import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Recompensa } from "@/pages/Shopping/Components/recompensa";
import { Hero } from "./Components/hero";

import PlaceholderXbox from '@/assets/images-shopping/placeholder-card-example.png'
import PlaceholderIfood from '@/assets/images-shopping/placegolder-ifood.png'
import PlaceholderMcDonalds from '@/assets/images-shopping/mcdonalds-brazil.webp'
import { vounchersAPI } from "@/lib/axios";

interface Vounchers {
    id: number,
    nome: string,
    descricao: string,
    codigo: string,
    foiComprado: boolean,
    pontos: number
}

export function ShoppingPage(){
  document.title = "Resgate seus pontos || Impacto"
  const [vounchers, setVounchers] = useState<Vounchers[] | []>([])
  const [erro, setErro] = useState('')

  useEffect(() => {
    vounchersAPI.get('/')
    .then(({ data: { vounchers } }) => {
      setVounchers(vounchers)
    })
    .catch((err) => {
      const { code } = err
      
      if (code === "ERR_NETWORK") {
        setErro('Não foi possível carregar os vounchers e cupons de desconto')
      }
      
    })
  },[])

  return (
    <div className="flex flex-col items-center">
      <div className="w-[80%] mb-6">
        <h1 className="text-2xl font-semibold">
          Já fez uma doação hoje?
        </h1>
        <h2 className="text-lg font-medium">
          Queremos te recompensar por isso!
        </h2>

        <div className="flex flex-col items-center lg:grid grid-cols-2 lg:space-x-4">
          <Hero buttonText="Confira" content="Aumete seus pontos fazendo doações e trabalhos voluntários!" title={`Olá${``}`} />
          <Hero buttonText="Convidar" content="Convite um amigo para doar em qualquer ong e ganhe 10 pontos!" title="Convide e ganhe!" />
        </div>
      
        <h2 className="mt-8 text-2xl font-medium">Troque seus pontos!</h2>

        <div className="flex gap-4 mt-5">
          <button className="bg-[#004AAD] text-white py-1 w-[100px] text-sm hover:opacity-85 transition-all rounded-full">gift-cards</button>
          <button className="bg-[#004AAD] text-white py-1 w-[100px] text-sm hover:opacity-85 transition-all rounded-full">cupons</button>
        </div>

        <section className="mt-8 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-0 gap-2 justify-between">
            <h3 className="text-2xl font-medium">Recompensas sugeridas</h3>

            <a href="" className="flex items-center gap-1 text-[#15406B] font-bold hover:underline hover:underline-offset-2">
              Ver todas as recompensas
              <ChevronRight />
            </a>
          </div>

          <section className="flex justify-between items-center gap-6 w-full flex-wrap">
            {
              erro === '' ?
              (vounchers.length > 0 && (
                <>
                  <Recompensa image={PlaceholderXbox} nome={vounchers[7].nome} price={vounchers[7].pontos} />
                  <Recompensa image={PlaceholderMcDonalds} nome={vounchers[6].nome} price={vounchers[6].pontos} />
                  <Recompensa image={PlaceholderIfood} nome={vounchers[11].nome} price={vounchers[11].pontos} />
                </>
              )) :
              <span className="text-xl font-bold text-red-600">
                {erro}
              </span>
            }
          </section>
        </section>
      </div>
    </div>
  )
}