import Facebook from "@/assets/images-footer/facebook.svg";
import Instagram from "@/assets/images-footer/inconInstagram.svg";
import Linkedin from "@/assets/images-footer/iconLinkedin.svg";
import { NavLink } from "react-router-dom";


function Footer() {
    return (
        <footer className="w-full bg-[#B7D5E5] flex flex-col items-center">
            <section className="flex justify-around items-center p-4">
                <div className="flex flex-col items-center sm:items-start sm:flex-row w-full space-x-0 sm:space-x-60 gap-y-8">
                    <div className="flex flex-col text-center items-center space-y-4 flex-1">
                        <ul className="text-[18px] text-[#262E30] font-[500] ">
                            <li className="p-2">
                                <h3 className="text-2xl font-medium text-[#004358] pb-5">Impacto</h3>
                            </li>
                            <li className="p-2">
                                <NavLink to="/sobrenos#sobre">Sobre Nós</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col text-center items-center space-y-4 flex-1">
                        <ul className="text-[18px] text-[#262E30] font-[500]">
                            <li className="p-2">
                                <h3 className="text-2xl font-medium text-[#004358] pb-5">Doação</h3>
                            </li>
                            <li className="p-2 mb-7">
                                <NavLink to="/doacaofooter"><p>Importância da doação</p></NavLink>
                            </li>
                            <li className="p-2 mb-7">
                                <NavLink to="/doacaofooter">Benefícios da doação</NavLink>
                            </li>
                            <li className="p-2">
                            <NavLink to="/doacaofooter">ONG's cadastradas</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col text-center items-center space-y-4 flex-1">
                        <ul className="text-[18px] text-[#262E30] font-[500] ">
                            <li className="p-2">
                                <h3 className="text-2xl font-medium text-[#004358] pb-5">ONG</h3>
                            </li>
                            <li className="p-2 mb-7">
                                <NavLink to="/register">Cadastrar minha ONG</NavLink>
                            </li>
                            <li className="p-2">
                            <NavLink to="/ongfooter">Benefícios oferecidos</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="flex flex-row items-center mt-10 font-medium pb-6">
                <h4>Siga a Impacto nas redes! -</h4>
                <a className="p-2" href="https://www.facebook.com/profile.php?id=61560001469951" target="_blank" rel="noopener noreferrer">
                    <img src={Facebook} alt="Ícone do Facebook" className="h-8 w-8" />
                </a>
                <a className="p-2" href="https://www.instagram.com/impactoinspira?igsh=OWl4ZHc1dTV2NDd5" target="_blank" rel="noopener noreferrer">
                    <img src={Instagram} alt="Ícone do Instagram" className="h-8 w-8" />
                </a>
                <a className="p-2" href="https://www.linkedin.com/company/impactoinspira/" target="_blank" rel="noopener noreferrer">
                    <img src={Linkedin} alt="Ícone do Linkedin" className="h-8 w-8" />
                </a>
            </div>
            <p className="text-center pt-2 text-lg text-[#004358] font-medium pb-6">
                © 2024 Impacto
            </p>
        </footer>
    )
};
export default Footer;