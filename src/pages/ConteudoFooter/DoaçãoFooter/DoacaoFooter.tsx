import { NavLink } from "react-router-dom";

export function DoacaoFooter() {
    return (

        <main>

            <section className="text-center border-[#EDEDED] border-4 w-3/4 rounded-[50px] ml-auto mr-auto">

                <article>

                    <article>

                        <h1 className="text-left text-2xl font-medium pt-12 m-20">Qual assunto você quer aprofundar?</h1>

                    </article>

                    <nav className="text-left m-20">

                        <ul className="text-lg">
                            <li><a href="#Importância da doação">1- Importância da doação</a></li>
                            <li><a href="#Benefícios da doação">2 - Benefícios da doação</a></li>
                            <li><a href="#ONG’s cadastradas">3 - ONG’s cadastradas</a></li>
                        </ul>

                    </nav>

                </article>

            </section>

            <section className="mt-20 mb-20">

                <h2 className="text-2xl italic font-bold mb-10 ml-48"> 1. Importância da doação</h2>

                <p className="text-xl pl-24 pr-24 leading-8">
                    <span className="text-xl font-bold leading-8">Sua doação faz a diferença para as ONG’s! </span>
                    Fazendo uma pesquisa e estudando as suas dores percebemos que a principal dificuldade enfrentada pelas mesmas é a falta de financiamento constante. Ao contribuir, você está apoiando causas que impactam vidas, promovem mudanças e criam um mundo melhor. Cada centavo conta e pode fazer a diferença para uma sociedade mais feliz, harmoniosa, justa e muito mais!
                </p>

            </section>

            <section className="mt-20 mb-20">

                <h2 className="text-2xl italic font-bold mb-10 ml-48"> 2. Benefícios da doação</h2>

                <p className="text-xl pl-24 pr-24 leading-8">Doar é um ato de generosidade que beneficia tanto o doador quanto quem recebe. Isso não é apenas  apoiar causas valiosas, mas também é investir na sua própria felicidade e bem-estar. A alegria de doar se converte em um sorriso que você pode sentir por dentro. Além disso, doar pode ser uma experiência que enriquece a alma, trazendo paz interior e a consciência de que você contribuiu para um mundo melhor. E não se esqueça, muitas vezes, ao ajudar os outros, você também está criando laços mais fortes com sua comunidade e descobrindo novas maneiras de se conectar com aqueles ao seu redor. Então, quando você decide doar, lembre-se de que está fazendo muito mais do que apenas uma boa ação; você está criando ondas de positividade que reverberam através de sua vida e da sociedade.</p>

            </section>

            <section className="mt-20 mb-20">

                <h2 className="text-2xl italic font-bold mb-10 ml-48">3. ONG’s cadastradas</h2>

                <p className="text-xl pl-24 pr-24 leading-8">Em nossa plataforma, temos uma variedade incrível de ONGs trabalhando incansavelmente para causas que abrangem vários temas como: causas animais, educação, crianças, esportes e etc. E tudo isso com muita força de vontade! Cada ONG traz sua paixão, sua missão e seu impacto único. <NavLink className="text-xl text-[#106BE4]" to="/doacoes">Faça a diferença!</NavLink></p>

            </section>

        </main>
        
    )
}