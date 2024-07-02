import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import LoginRedirectModal from '../../../components/components-impacto/LoginRedirectModal';
import Proa from "../assets/instituto-proa.jpg";
import MissaoVida from "../assets/missao-vida.png";
import PulseMais from "../assets/pulse-mais.jpg";
import { useNavigate } from 'react-router-dom';

const HomeContent: React.FC = () => {
    const { t } = useTranslation();
    const [idUsuario, setIdUsuario] = useState('')
    const [modalOpen, setModalOpen] = useState(false);

    const navigate = useNavigate()


    useEffect(() => {
    const idUsuario = localStorage.getItem('userId')

    if (idUsuario) {
        setIdUsuario(idUsuario)
    }
    }, [])

    const handleCandidatarClick = () => {
        idUsuario === '' ? setModalOpen(true) : navigate('/doar');
    };

    return (
            <main className="mx-auto w-[80%] flex flex-col items-center">
                    <div>
                        <h2 className="text-2xl text-center sm:text-start font-bold m-5">{t('recomendacoesDia')}</h2>
                        <p className="font-[#313131] text-[18px] ml-5 text-center sm:text-start">{t('conhecaOng')}</p>


                        <div className="flex flex-col items-center sm:flex-row m-5 mb-28 mt-10 gap-4 justify-between">
                            <a href="#"><img className="w-[200px] sm:w-[350px] sm:h-[350px] rounded-[30px] object-cover hover:scale-105 transition-all" src={ Proa } alt="Logo da ONG" /></a>
                            <a href="#"><img className="w-[200px] sm:w-[350px] sm:h-[350px] rounded-[30px] object-cover hover:scale-105 transition-all" src={ MissaoVida } alt="Logo da ONG" /></a>
                            <a href="#"><img className="w-[200px] sm:w-[350px] sm:h-[350px] rounded-[30px] object-cover hover:scale-105 transition-all" src={ PulseMais } alt="Logo da ONG" /></a>
                        </div>
                    </div>

                <div className="m-5">
                    <h2 className="m-5 font-[600] text-[28px] text-center sm:text-start">{t('vagaIdeal')}</h2>

                    <div className="flex flex-col sm:flex-row justify-between">
                        <section className="shadow-xl bg-[#DAF1FFAD] max-w-[400px] rounded-[24px] m-2 p-5">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center space-x-4">
                                    <div>
                                        <h2 className="text-[28px] font-semibold mr-14">{t('tituloVaga')}</h2>
                                        <p className="text-base text-[18px] mb-2">{t('informacoes')}</p>
                                    </div>
                                    <img src={ Proa } alt="Logo da ONG" className="object-cover rounded-[10px] w-[75px] h-[75px]" />
                                </div>
                            </div>

                            <p className="font-[500] pl-1">{t('requisitos')}</p>
                                <ul className=" text-[18px] font-[500] list-disc p-7">
                                    <li>{t('requisitoa')}</li>
                                    <li>{t('requisitoa')}</li>
                                    <li>{t('requisitoa')}</li>
                                </ul>
                                <div className="text-center">
                                    <button
                                        className="bg-[#004AAD] text-white font-[600] py-2 px-4 rounded-[10px]"
                                        onClick={handleCandidatarClick}
                                    >
                                        {t('candidatar')}
                                    </button>
                                </div>

                        </section>

                        <section className="shadow-xl bg-[#DAF1FFAD] max-w-[400px] rounded-[24px] m-2 p-5">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center space-x-4">
                                    <div>
                                        <h2 className="text-[28px] font-semibold mr-14">{t('tituloVaga')}</h2>
                                        <p className="text-base text-[18px] mb-2">{t('informacoes')}</p>
                                    </div>
                                    <img src={ MissaoVida } alt="Logo da ONG" className="object-cover rounded-[10px] w-[75px] h-[75px]" />
                                </div>
                            </div>

                            <p className="font-[500] pl-1">{t('requisitos')}</p>
                                <ul className=" text-[18px] font-[500] list-disc p-7">
                                    <li>{t('requisitoa')}</li>
                                    <li>{t('requisitoa')}</li>
                                    <li>{t('requisitoa')}</li>
                                </ul>
                                <div className="text-center">
                                    <button
                                        className="bg-[#004AAD] text-white font-[600] py-2 px-4 rounded-[10px]"
                                        onClick={handleCandidatarClick}
                                    >
                                        {t('candidatar')}
                                    </button>
                                </div>

                        </section>

                        <section className="shadow-xl bg-[#DAF1FFAD] max-w-[400px] rounded-[24px] m-2 p-5">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center space-x-4">
                                    <div>
                                        <h2 className="text-[28px] font-semibold mr-14">{t('tituloVaga')}</h2>
                                        <p className="text-base text-[18px] mb-2">{t('informacoes')}</p>
                                    </div>
                                    <img src={ PulseMais } alt="Logo da ONG" className="object-cover rounded-[10px] w-[75px] h-[75px]" />
                                </div>
                            </div>

                            <p className="font-[500] pl-1">{t('requisitos')}</p>
                                <ul className=" text-[18px] font-[500] list-disc p-7">
                                    <li>{t('requisitoa')}</li>
                                    <li>{t('requisitoa')}</li>
                                    <li>{t('requisitoa')}</li>
                                </ul>
                                <div className="text-center">
                                    <button
                                        className="bg-[#004AAD] text-white font-[600] py-2 px-4 rounded-[10px]"
                                        onClick={handleCandidatarClick}
                                    >
                                        {t('candidatar')}
                                    </button>
                                </div>

                        </section>
                    </div>
                </div>
                <LoginRedirectModal open={modalOpen} onOpenChange={setModalOpen} />
            </main>
    );
};
export default HomeContent;