import { InputImpacto } from "@/components/components-impacto/input";
import Editar from "./assets/editar.svg";
import Carrinho from "./assets/carrinho.svg";
import Cifrão from "./assets/cifrão.svg";
import { Calendar } from "@/components/shadcnUI/calendar";
import React from "react";

export function EditarRifa() {

    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className=" mb-[20px] ">

            <div className="flex items-center gap-5 ml-[135px]">

                <figure>

                    <img src={Editar} alt="" />

                </figure>

                <p className="text-center text-[#004358] font-medium">EDITAR: Exemplo de Titulo</p>

            </div>

            <div className="ml-[283px] mt-[21px]">

                <form className="space-y-7">

                    <div className="mb-[20px] space-y-3">

                        <label className="space-y-3" htmlFor="text">Título da campanha</label>

                        <InputImpacto className="rounded-xl w-3/4" placeholder="Exemplo de título" />

                    </div>

                    <div className="mb-[20px] space-y-3">

                        <label htmlFor="text">Modelo</label>

                        <InputImpacto className="rounded-xl w-3/4" placeholder="Sistema escolhe bilhetes de forma aleátorio">

                        </InputImpacto>

                    </div>

                    <div className="mb-[20px] space-y-3">

                        <label htmlFor="text">Descrição / Regulamento</label>

                        <InputImpacto className="rounded-xl w-3/4" />

                    </div>

                    <div className="grid grid-cols-2 gap-14 w-3/4">

                        <div className="mb-[20px] space-y-3">

                            <div className="w-full rounded-[10px]">

                                <div className="mb-[24px]">

                                    <label htmlFor="text">Quantidade minima de bilhete por compra</label>

                                </div>


                                <div className="flex">

                                    <div className="rounded-xl rounded-r-[0px] w-24 bg-[#D7D6D6] flex items-center justify-center">


                                        <figure>

                                            <img src={Carrinho} alt="" />

                                        </figure>

                                    </div>

                                    <InputImpacto className="flex-1 rounded-r-[10px] rounded-l-[0px] max-w-80" placeholder="1" type="text" />

                                </div>


                            </div>

                        </div>

                        <div className="mb-[20px] space-y-3">

                            <div className="w-full rounded-[10px]">

                                <div className="mb-[24px]">

                                    <label htmlFor="text">Quantidade maxima de bilhete por compra</label>

                                </div>


                                <div className="flex">

                                    <div className="rounded-xl rounded-r-[0px] w-24 bg-[#D7D6D6] flex items-center justify-center">


                                        <figure>

                                            <img src={Carrinho} alt="" />

                                        </figure>

                                    </div>

                                    <InputImpacto className="flex-1 rounded-r-[10px] rounded-l-[0px] max-w-80" placeholder="100" type="text" />

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="mb-[20px] space-y-3">

                        <label className="space-y-3" htmlFor="text">Quantidade de bilhetes</label>

                        <InputImpacto className="rounded-xl w-3/4" placeholder="100 bilhetes - (00 à 99)" />

                    </div>

                    <div className="mb-[20px] space-y-3">

                            <div className=" w-3/4 rounded-[10px]">

                                <div className="mb-[24px]">

                                    <label htmlFor="text">Valor do bilhete</label>

                                </div>


                                <div className="flex">

                                    <div className="rounded-xl rounded-r-[0px] w-24 bg-[#D7D6D6] flex items-center justify-center">


                                        <figure>

                                            <img src={Cifrão} alt="" />

                                        </figure>

                                    </div>

                                    <InputImpacto className="flex-1 rounded-r-[10px] rounded-l-[0px]" placeholder="100" type="text" />

                                </div>

                            </div>

                        </div>

                        <div className="mb-[20px] space-y-3">

                        <label className="space-y-3" htmlFor="text">Local da campanha</label>

                        <InputImpacto className="rounded-xl w-3/4" placeholder="Live do Instagram" />

                    </div>

                    <div className="mb-[20px] space-y-3">

                        <label htmlFor="text">Filtro do Instagram</label>

                        <InputImpacto className="rounded-xl w-3/4" placeholder="Mostrar todos os bilhetes">

                        </InputImpacto>

                    </div>

                    <div className="mb-[20px] space-y-3">

                        <div>

                            <label className="space-y-3" htmlFor="text">Data do sorteio</label>

                        </div>

                    </div>

                    <div>

                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border mb-[53.73px] w-fit"
                    />

                    </div>

                </form>

            </div>

        </div>

    )
}