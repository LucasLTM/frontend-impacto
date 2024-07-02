import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/shadcnUI/carousel"
import Autoplay from "embla-carousel-autoplay"

import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";

import WomanDog from "@/assets/images-home/womanDog-destaques.svg"
import Cadeirante from "@/assets/images-home/cadeirante-destaques.svg"
import Cupons from "@/assets/images-home/cupons.svg"

import Criancas from "@/assets/images-home/criancas-destaques.svg"
import CeInstagram from "@/assets/images-home/celInstagram.svg"
import Ponte from "@/assets/images-home/ponte.svg"

import { useTranslation } from "react-i18next";

function Destaques() {
    const { t } = useTranslation()

    return (
            <Carousel className="relative max-w-[100vw] mx-auto overflow-hidden shadow-[0px_4px_10px_0px_#807e7e] -mt-16 sm:-mt-[175px]"
            plugins={[
                Autoplay({
                    delay: 4000,
                }),
            ]} 
            >
                <CarouselContent className="flex transition-transform">
                    <CarouselItem className="min-w-full flex-shrink-0">
                        <div className="flex flex-col items-center sm:flex-row justify-between h-screen bg-gradient-to-b from-[#DAF1FF] to-[#7BB0C1] p-5 text-black">
                            <div className="text-center mt-20 p-10">
                                <img src={Ponte} alt="Logo da Impacto" title="Impacto" className="mx-auto" />
                                <p className="text-[24px] font-semibold leading-[35px] text-[#004358]">{t('destaquesCarousel1PrimeiraFrase')}</p>
                                <p className="max-w-[60%] text-[20px] mx-auto mt-[44px] text-[#061314]">{t('destaquesCarousel1SegundaFrase')}</p>
                                <a href="#"><button className='bg-[#004AAD] text-white w-[250px] h-[43px] rounded-[5px] text-[24px] cursor-pointer mt-[88px]'>{t('destaquesCarousel1TerceiraFrase')}</button></a>
                            </div>
                            <img className="h-screen pt-52" src={WomanDog} alt="Uma mulher segurando um cachorro" />
                        </div>
                    </CarouselItem>

                    <CarouselItem className="w-screen flex-shrink-0">
                        <div className="flex flex-col sm:flex-row relative items-center h-screen bg-gradient-to-b from-[#DAF1FF] to-[#7BB0C1] p-5 text-black">
                            <div className="flex mt-36">
                                <div className="text-center">
                                    <img src={Ponte} alt="Logo da Impacto" title="Impacto" className="mx-auto" />
                                    <p className="text-[24px] font-semibold leading-[35px] text-[#004358]">{t('destaquesCarousel2PrimeiraFrase')}</p>
                                    <p className="max-w-[60%] text-[20px] mx-auto mt-[44px] text-[#061314]">{t('destaquesCarousel2SegundaFrase')}</p>
                                    <a href="#"><button className='bg-[#004AAD] text-white w-[250px] h-[43px] rounded-[5px] text-[24px] cursor-pointer mt-[88px]'>{t('destaquesCarousel2TerceiraFrase')}</button></a>
                                    <p className="text-[24px] font-semibold leading-[35px] text-[#004358] mt-5">{t('destaquesCarousel2QuartaFrase')}</p>
                                </div>
                            </div>
                                <img className="m-auto mt-72" src={Cadeirante} alt="Um voluntário e senhor cadeirante" />
                        </div>
                    </CarouselItem>

                    <CarouselItem className="w-screen flex-shrink-0   ">
                        <div className="flex flex-col relative items-center justify-between h-screen bg-gradient-to-b from-[#DAF1FF] to-[#7BB0C1] p-5 text-black">
                            <div className="mt-5 sm:mt-20 p-10 static sm:absolute inset-0 flex flex-col items-center justify-center sm:max-w-[50%]">
                                <img src={Ponte} alt="Logo da Impacto" title="Impacto" className="mx-auto" />
                                <p className="w-full sm:text-[24px] font-semibold leading-[35px] text-[#004358] text-center">{t('destaquesCarousel3PrimeiraFrase')}</p>
                                <p className="sm:max-w-[60%] text-center text-[20px] mx-auto mt-[44px] text-[#061314] mb-[88px]">{t('destaquesCarousel3SegundaFrase')}</p>
                                <a href="#"><button className='bg-[#004AAD] text-white w-[250px] h-[43px] rounded-[5px] text-[24px] cursor-pointer'>{t('destaquesCarousel3TerceiraFrase')}</button></a>
                                <p className="text-[24px] font-semibold leading-[35px] text-[#004358] mt-5 hidden sm:block">{t('destaquesCarousel3QuartaFrase')}</p>
                            </div>
                            <figure className="hidden sm:block">
                                <img className="w-full h-auto" src={Cupons} alt="Ilustração dos pontos da impacto" />
                            </figure>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="w-screen flex-shrink-0">
                        <div className="flex flex-col items-center sm:flex-row justify-between h-screen bg-gradient-to-b from-[#DAF1FF] to-[#7BB0C1] p-5 text-black">
                            <div className="text-center mt-10 sm:mt-20 p-10">

                                <img src={Ponte} alt="Logo da Impacto" title="Impacto" className="mx-auto" />
                                <p className="text-[24px] font-semibold leading-[35px] text-[#004358]">{t('destaquesCarousel4PrimeiraFrase')}</p>
                                <p className="sm:max-w-[60%] text-[20px] mx-auto mt-[44px] text-[#061314]">{t('destaquesCarousel4SegundaFrase')} <strong className="text-[#004358]">IMPACTO</strong> {t('destaquesCarousel4TerceiraFrase')}</p>
                                <a href="#"><button className='bg-[#004AAD] text-white w-[250px] h-[43px] rounded-[5px] text-[24px] cursor-pointer mt-[88px]'>{t('destaquesCarousel4QuartaFrase')} IMPACTO</button></a>
                            </div>
                            <img className="h-screen pt-52 mr-10" src={Criancas} alt="Crianças da Tanzânia" />
                        </div>
                    </CarouselItem>

                    <CarouselItem className="w-screen flex-shrink-0">
                        <div className="flex flex-col items-center sm:flex-row justify-between h-screen bg-gradient-to-b from-[#DAF1FF] via-[#cfeafa] to-[#7BB0C1] p-5 text-black">
                            <div className="text-center mt-5 sm:mt-20 p-10">
                                <img src={Ponte} alt="Logo da Impacto" title="Impacto" className="mx-auto" />

                                <p className="text-base sm:text-[24px] font-semibold leading-[35px] text-[#004358]">{t('destaquesCarousel5PrimeiraFrase')}</p>
                                <p className="max-w-[60%] text-[20px] mx-auto mt-[44px] text-[#061314]">{t('destaquesCarousel5SegundaFrase')} <strong className="text-[#004358]">IMPACTO</strong> {t('destaquesCarousel5TerceiraFrase')}</p>
                                <p className="text-base sm:text-[24px] font-semibold leading-[35px] text-[#004358] mt-10">{t('destaquesCarousel5QuartaFrase')}</p>

                                <div className="flex flex-col sm:flex-row gap-y-3 sm:max-w-[60%] mx-auto pt-10 sm:pt-32 items-center justify-between">
                                    <a href="https://www.linkedin.com/company/impactoinspira/" target="_blank" className="flex"><Linkedin /><p className="ml-1">Linkedin</p></a>
                                    <a href="https://www.facebook.com/profile.php?id=61560001469951" target="_blank" className="flex"><Facebook /><p>Facebook</p></a>
                                    <a href="https://www.instagram.com/impactoinspira?igsh=OWl4ZHc1dTV2NDd5" target="_blank" className="flex"><Instagram /><p className="ml-1">Instagram</p></a>
                                </div>
                            </div>
                            <img className="h-screen pr-10 pt-52" src={CeInstagram} alt="Instagram da Impacto" />
                        </div>
                    </CarouselItem>
                </CarouselContent>

                <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer">
                </CarouselPrevious>
                <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer">
                </CarouselNext>
            </Carousel>
    );
};
export default Destaques;