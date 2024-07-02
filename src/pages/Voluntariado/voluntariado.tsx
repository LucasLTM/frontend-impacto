
import Criancas from "@/assets/imagens-voluntariado/criancas.png"
import Animais from "@/assets/imagens-voluntariado/animais.png"
import CombateAFome from "@/assets/imagens-voluntariado/combate-a-fome.png"
import Idosos from "@/assets/imagens-voluntariado/idosos.png"
import SituacaoDeRua from "@/assets/imagens-voluntariado/situacao-de-rua.png"
import Outros from "@/assets/imagens-voluntariado/outros.png"
import { Jobs } from "@/components/components-impacto/jobs"

import { Tag } from "../Doacoes/components/tag";

export function Voluntariado(){
    return(
        <div className="flex flex-col items-center">
            <main className="w-4/5 pb-8">
                    <div className="flex gap-20" >
                        <div className="flex flex-col items-center justify-center">
                            <img src={Criancas} alt="Icone de Crianças" />
                            <Tag>Crianças</Tag>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img src={Animais} alt="Icone de Pata de Cachorro" />
                            <Tag>Animais</Tag>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img src={CombateAFome} alt="Icone de alimentos" />
                            <Tag>Combate à fome</Tag>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img src={Idosos} alt="Icone de dois idosos" />
                            <Tag>Idosos</Tag>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-y-2">
                            <img src={SituacaoDeRua} alt="Icone de Camiseta" />
                            <Tag>Situação de rua</Tag>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img src={Outros} alt="Icone de Opções" />
                            <Tag>Outros</Tag>
                        </div>
                    </div>
                    <div className="text-[#004358] font-semibold text-2xl mt-12">
                        <h2>VAGA IDEAL PARA VOCÊ</h2>
                    </div>
                    <div className="flex">
                        <Jobs />
                        <Jobs />
                        <Jobs />

                    </div>
            </main>
      </div>
    )
}