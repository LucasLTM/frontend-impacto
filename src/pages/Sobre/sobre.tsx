import { useTranslation } from "react-i18next"

import styles from './style.module.css'

import EquipeImpacto from '@/assets/images-impacto/equipe-impacto.jpeg'
import Logo from '@/assets/images-impacto/Logo.svg'
import Visao from '@/assets/images-sobrenos/nossa-visao.jpg'
import Valores from '@/assets/images-sobrenos/nossos-valores.jpeg'
import { Content } from "@/pages/Sobre/Components/content"
import { Impactante } from "./Components/impactante"

// Imagem dos impactantes
import Celina from './assets/images/impactantes/celina.png'
import Fabio from './assets/images/impactantes/fabio.png'
import Gabriel from './assets/images/impactantes/gabriel.png'
import Gustavo from './assets/images/impactantes/gustavo.png'
import Helen from './assets/images/impactantes/hellen.png'
import Kaua from './assets/images/impactantes/kaua.png'
import Lucas from './assets/images/impactantes/lucas.png'
const impactantes = [
    {
      nome: "Celina Wendy",
      image: Celina,
      cargo: "Front end",
      github: "https://github.com/Celina22w",
      linkedin: "https://www.linkedin.com/in/celina-lozano-981895282/"
    },
    {
      nome: "Fabio Henrique",
      image: Fabio,
      cargo: "Back end",
      github: "https://github.com/FH-Silva",
      linkedin: "https://www.linkedin.com/in/fh-silva/"
    },
    {
      nome: "Gabriel Braz",
      image: Gabriel,
      cargo: "Scrum Master e Full Stack",
      github: "https://github.com/bieelbrz",
      linkedin: "https://www.linkedin.com/in/gabbraz/"
    },
    {
      nome: "Gustavo Sales",
      image: Gustavo,
      cargo: "Full stack",
      github: "https://github.com/Gusales",
      linkedin: "https://www.linkedin.com/in/devgusales/"
    },
    {
      nome: "Helen Silva",
      image: Helen,
      cargo: "UX/UI, Financeira e Front end",
      github: "https://github.com/helenrocha19",
      linkedin: "https://www.linkedin.com/in/helen-silva-26b176231/"
    },
    {
      nome: "Kauã Dolores",
      image: Kaua,
      cargo: "Back end",
      github: "https://github.com/Kauadoloress",
      linkedin: "https://www.linkedin.com/in/kaua-dolores-developer/"
    },
    {
      nome: "Lucas Tomaz",
      image: Lucas,
      cargo: "Product Owner, UX/UI e Front end",
      github: "https://github.com/LucasLTM",
      linkedin: "https://www.linkedin.com/in/lucas-tomaz-monteiro-331149270/"
    },
]

import PulseMais from './assets/images/parceiros/pulse_mais.jpg'
import Proa from './assets/images/parceiros/instituto_proa.jpg'
import { Parceiro } from "./Components/parceiro"

export function Sobre() {
  const { t } = useTranslation()

    document.title = "Sobre nós da Impacto"
    return(
        <div className={`${styles.bgImage} bg-no-repeat bg-cover flex flex-col items-center`}>
            <main id="sobre" className="w-4/5 flex flex-col items-center gap-4 mb-10">
                <div className="text-center border-b-4 border-[#004AAD] w-fit mb-12">
                    <h1 className="text-3xl text-[#475459]">{t('slogan')}</h1>
                </div>

                <Content 
                    content={t('sobreSurgiuImpacto')}
                    imgAlt="Imagem dos fundadores da Impacto, onde comemoram a formação do grupo, todos estão muito sorridentes na foto"
                    imgSrc={EquipeImpacto}
                    title={t('sobreSurgiuImpactoTitulo')}
                />

                <Content
                    content={t('sobreNossaMissao')}
                    title={t('sobreNossaMissaoTitulo')}
                    imgAlt="Imagem da Logo da nossa plataforma, uma ponte, simbolizando a conexão entre doadores e organizações não governamentais"
                    imgSrc={Logo}
                    imgPosition="left"
                />

                <Content
                    title={t('sobreNossaVisaoTitulo')}
                    content={t('sobreNossaVisao')}
                    imgSrc={Visao}
                    imgAlt="Imagem de um mundo sendo segurado por mãos, que está passando por transformações"
                />
                
                <Content
                    content={t('sobreNossosValores')}
                    title={t('sobreNossosValoresTitulo')}
                    imgAlt="Imagem da Logo da nossa plataforma, uma ponte, simbolizando a conexão entre doadores e organizações não governamentais"
                    imgSrc={Valores}
                    imgPosition="left"
                />

                <section className="space-y-8 w-full mt-20">
                    <h2 className="text-center text-3xl font-semibold">
                      {t('sobreConhecaNossaEquipe')}
                    </h2>
                    <div className="flex flex-col gap-10 md:grid grid-cols-2 md:gap-y-5">
                        {impactantes.map((impactante, index) => (
                            <Impactante 
                                atuacao={impactante.cargo} 
                                githubLink={impactante.github}
                                imgSrc={impactante.image}
                                linkedinLink={impactante.linkedin}
                                nome={impactante.nome}
                                position={index % 2 === 0 ? "left" : "right"}
                            />
                        ))}
                    </div>
                </section>

                <section className="flex flex-col items-center justify-center pt-16 gap-10 md:h-screen mt-20 md:mt-0">
                  <h2 className="text-center text-2xl font-semibold">
                    {t('sobreIdentidadeVisualTitulo')}
                  </h2>
                  <div className="flex flex-col gap-10 md:grid grid-cols-3 md:gap-x-4 text-center">
                    <article className="flex flex-col items-center gap-5">
                      <div className="h-[120px] flex items-center justify-center hover:scale-110 transition-all">
                        <p className="text-4xl font-medium uppercase tracking-widest text-[#004358]">Impacto</p>
                      </div>

                      <h3 className="font-medium text-xl leading-relaxed text-[#004358]">
                        {t('sobrePorQueImpactoTitulo') + " Impacto?"}
                      </h3>
                      <p>
                        {t('sobrePorQueImpacto')}
                      </p>
                    </article>

                    <article className="flex flex-col items-center gap-5">
                      <figure className="h-[120px] flex items-center justify-center hover:scale-110 transition-all">
                        <img src={Logo} alt="Logo da Impacto" />
                      </figure>

                      <h3 className="font-medium text-xl leading-relaxed text-[#004358]">
                        {t('sobrePorQuePonteTitulo')}
                      </h3>
                      <p>
                        {t('sobrePorQuePonte')}
                      </p>
                    </article>

                    <article className="flex flex-col items-center gap-5">
                      <div className="h-[120px] flex items-center justify-center hover:scale-110 transition-all">
                        <p className="text-2xl font-medium uppercase tracking-widest text-[#004358]">
                          {t('slogan')}
                        </p>
                      </div>

                      <h3 className="font-medium text-xl leading-relaxed text-[#004358]">
                        {t('sobrePorQueSloganTitulo')}
                      </h3>
                      <p>
                        {t('sobrePorQueSlogan')}
                      </p>
                    </article>
                  </div>
                </section>

                <section className="mt-20 md:mt-0 md:h-[90vh]">
                  <h2 className="text-center text-2xl font-semibold">
                    {t('sobreNossosParceiros')}
                  </h2>
                  <p className="mt-4 text-center">
                    {t('sobreNossosParceirosTexto')}
                  </p>
                  <div className="flex items-center gap-10 justify-center mt-10">
                    <Parceiro cover={Proa} coverAlt="Logo do Instituto PROA" nome="Instituto PROA" />
                    <Parceiro cover={PulseMais} coverAlt="Logo da ONG Pulse Mais" nome="Pulse Mais" />
                  </div>
                </section>
            </main>
        </div>
    )
}