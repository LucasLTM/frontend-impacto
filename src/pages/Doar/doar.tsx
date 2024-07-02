import { Instagram, Linkedin } from 'lucide-react'

import BridgeLogo from '@/assets/images-impacto/bridge-logo.svg'

import Banner from '@/assets/images-placeholder/CapaOng.jpg'
import Logo from '@/assets/images-placeholder/logo.jpg'
import ImagePlaceholder from '@/assets/images-placeholder/Image-Vaga.jpg'
import { DialogDoacao } from './components/dialog-doacao'
import { useLayoutEffect } from 'react'

export function Doar(){
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [])

  return(
    <div className="flex flex-col items-center">
      <div className="max-w-[80vw] mb-10">
        <div className="flex gap-8 items-center font-medium text-3xl mb-10 text-[#004358]">  
          <img src={BridgeLogo} alt="Imagem da logo da impacto" className="h-10" />
          <p>Olá, bem vind@ de volta</p>
        </div>

        <section className="relative">
          <img src={Banner} alt="Capa da ONG" className="rounded-t-full w-full md:h-80 object-cover" />
          <img src={Logo} alt="Logo da ONG" className="rounded-full h-24 md:h-[210px] absolute -bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden hover:scale-105 transition-all" />
        </section>

        <section className="mt-14 border-b border-b-[#373F42] pb-5">
          <p className="text-xl mb-4">São Paulo, SP</p>
          <h2 className="text-2xl font-medium mb-6">Pulse Mais</h2>
          <p className="text-xl mb-6">Nossa missão é ajudar jovens com vulnerabilidade social, promovendo o  encontro do amor, solidariedade e do trabalho.</p>
          <div className="flex items-center gap-2 text-sm leading-relaxed">
            <span className="bg-[#1e4d8c] p-1 px-4 cursor-pointer hover:opacity-80 min-w-[100px] text-zinc-50 text-center rounded-full">#Crianças</span>
            <span className="bg-[#1e4d8c] p-1 px-4 cursor-pointer hover:opacity-80 min-w-[100px] text-zinc-50 text-center rounded-full">#Combate à fome</span>
            <span className="bg-[#1e4d8c] p-1 px-4 cursor-pointer hover:opacity-80 min-w-[100px] text-zinc-50 text-center rounded-full">#Situação de rua</span>
          </div>
        </section>

        <div className="flex flex-col items-center justify-center mt-10 text-[#004358] text-3xl gap-1">
          <h1 className="font-semibold">Colabore com a Pulse Mais</h1>
          <h2 className="font-medium">Faça sua doação</h2>
        </div>

        <section className="mt-14 grid grid-cols-2">
          <section className="h-full flex flex-col justify-between items-center">
            <div className="w-full">
              <p className="w-2/3 text-xl">Atendemos, direta e indiretamente, 24 mil crianças, jovens, adultos e idosos em situação de alta vulnerabilidade social, por meio de 9 programas sociais divididos em 4 eixos - Educação de Qualidade, Inclusão Produtiva, Vínculos Comunitários e Longevidade.</p>
            </div>
            <div className="flex flex-col gap-10 text-xl w-full">
              <p>Transferências via PIX do banco que você tem conta para:</p>
              <p className="font-semibold text-[#15406B]">Organização Social</p>
              <p>CNPJ: 29.936.002/0001-79</p>
              <p>Por favor, confirme a baixo que você fará a doação via PIX. </p>
              <p>Essa confirmação é muito importante para identificarmos a sua doação!</p>
            </div>

            <DialogDoacao />
          </section>

          <section className="flex flex-col gap-5 items-end text-[#15406B]">
            <div className="w-4/5">
              <img src={ImagePlaceholder} alt="" className="object-cover" />
              <p className="w-full text-center text-xl my-5">Telefone: +55 3670-2911</p>
              <div className="flex flex-col items-start w-full gap-2">
                <a href="https://www.linkedin.com/company/pulsemaisong/" target="_blank" className="flex items-center text-xl gap-2 hover:underline underline-offset-2">
                  <div className="bg-[#004358] w-fit p-2 rounded-full">
                    <Linkedin fill="white" strokeWidth={1} className="text-white" />
                  </div>
                  <p>
                    pulsemais
                  </p>
                </a>
                <a href="https://www.instagram.com/pulsemaisong/" target="_blank" className="flex items-center text-xl gap-2 hover:underline underline-offset-2">
                  <div className="bg-[#004358] w-fit p-2 rounded-full">
                    <Instagram strokeWidth={2} stroke="white" />
                  </div>
                  <p>
                    @pulsemais
                  </p>
                </a>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  )
}