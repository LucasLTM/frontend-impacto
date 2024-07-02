import { InputImpacto } from "@/components/components-impacto/input";
import Ticket from "./assets/ticket.svg";
import { ButtonImpacto } from "@/components/components-impacto/button";
import Arrow from "./assets/arrow.svg";

export function CriarRifa() {

    return (
        <div className=" mb-[20px] ">

            <div className="flex items-center gap-5 ml-[135px]">

                <figure>

                    <img src={Ticket} alt="" />

                </figure>

                <p className="text-center text-[#004358] font-medium">CRIAR CAMPANHA</p>

            </div>

            <div className="ml-[283px] mt-[21px]">

                <form className="space-y-7">

                    <div className="mb-[20px] space-y-3">

                        <label className="space-y-3" htmlFor="text">Nome da campanha</label>

                        <InputImpacto className="rounded-xl w-3/4" placeholder="Digite o nome da sua campanha" />

                    </div>

                    <div className="mb-[20px] space-y-3">

                        <label htmlFor="text">Quantidade de bilhetes</label>

                        <InputImpacto className="rounded-xl w-3/4" placeholder="Escolha uma das opções abaixo" />

                    </div>

                    <div className="mb-[20px] space-y-3">

                        <label htmlFor="text">Onde será realizado o sorteio</label>

                        <InputImpacto className="rounded-xl w-3/4" placeholder="Escolha uma das opções abaixo" />

                    </div>

                    <div className="mb-[20px] space-y-3">

                        <label htmlFor="text">Valor do bilhete</label>

                        <div className="flex bg-[#EDEDED] w-3/4 rounded-[10px]">

                            <div className="rounded-xl w-24 bg-[#D7D6D6] flex items-center justify-center">

                                <p className="text-[#004358] font-medium">R$</p>
                            </div>

                            <InputImpacto className="flex-1 rounded-r-[10px]" placeholder="0,00" type="tel" />

                        </div>


                    </div>

                    <div className="mb-[20px] space-y-3">

                        <label htmlFor="text">Telefone para contato</label>

                        <div className="flex bg-[#EDEDED] w-3/4 rounded-[10px]">

                            <div className="rounded-xl w-24 bg-[#D7D6D6] flex items-center justify-center">

                                <p className="text-[#004358] font-medium">+55</p>
                            </div>

                            <InputImpacto className="flex-1 rounded-r-[10px]" placeholder="Telefone / WhatsApp" type="tel" />

                        </div>


                    </div>

                </form>

            </div>

            <div className="mt-[41px] mb-[38px] ml-[100px]">

                <hr className="text-[#004358] w-[1080px] shadow-[0px_4px_4px_0px_rgba(0, 0, 0, 0.25)]"/>

            </div>

            <div className="ml-[550px]">

            <p className="text-[#004358] font-normal">TAXAS DE PUBLICAÇÃO</p>

            </div>

            <div className="flex justify-between ml-[100px] mr-[160px] mb-[23px]">

                <div>

                    <p>Taxa de publicação</p>

                </div>

                <div>

                    <p className="text-[#F35454]">- R$ 5,00</p>
                    
                </div>

            </div>

            <div className="flex justify-between ml-[100px] mr-[160px]">

                <div>

                    <p>Arrecadação estimada</p>

                </div>

                <div>

                    <p className="text-[#21BB1E]">+ R$ 0,00</p>
                    
                </div>

            </div>

            <ButtonImpacto className="ml-[100px] mt-[55px] mb-[53.73px]">
                
                <p className="ml-[88.33px]" >Prosseguir</p>

                <figure>

                    <img className="ml-[32.67px] mr-[28.33px]" src={Arrow} alt="" />

                </figure>

            </ButtonImpacto>

        </div>
    )
}