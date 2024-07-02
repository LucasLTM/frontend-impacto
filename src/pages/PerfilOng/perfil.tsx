import BridgeLogo from "@/assets/images-impacto/bridge-logo.svg";
import DoacoesRealizadas from "@/assets/imagens-perfil-ong/doacoes-realizadas.png";
import Repassados from "@/assets/imagens-perfil-ong/repassados.png";
import Candidatos from "@/assets/imagens-perfil-ong/candidatos.png";
import Pasta from "@/assets/imagens-perfil-ong/pasta.png";
import Seta from "@/assets/imagens-perfil-ong/seta.png";
import Verificacao from "@/assets/imagens-perfil-ong/verificacao.png";
import Banner from "@/assets/images-placeholder/CapaOng.jpg";
import Logo from "@/assets/images-placeholder/logo.jpg";

export function PerfilOng() {

  document.title = "Painel de administração"
    return (
      <div className="flex flex-col items-center">
        <div className="max-w-[80vw] mb-10">
          <div className="flex gap-8 items-center font-medium text-3xl mb-10 text-[#004358]">
            <img
              src={BridgeLogo}
              alt="Imagem da logo da impacto"
              className="h-10"
            />
            <p>Olá, bem vind@ de volta</p>
          </div>
  
          <section className="relative">
            <img
              src={Banner}
              alt="Capa da ONG"
              className="rounded-t-full w-full md:h-80 object-cover"
            />
            <img
              src={Logo}
              alt="Logo da ONG"
              className="rounded-full h-24 md:h-[210px] absolute -bottom left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden hover:scale-105 transition-all"
            />
          </section>

        <section className="mt-14  pb-5">
          <p className="text-lg mb-24">Resultados gerais:</p>
          <div className="flex justify-between">
            <div className="flex flex-col items-center gap-2">
              <img src={DoacoesRealizadas} alt="Imagem de mão contribuindo" />
              <h1 className="text-3xl font-semibold text-[#004358] mt-1">
                252.000
              </h1>
              <h1 className="text-lg font-semibold text-[#004358] mt-1">
                Total de Doações Realizadas
              </h1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src={Repassados}
                alt="Imagem de uma moeda caindo em uma mão"
              />
              <h1 className="text-3xl font-semibold text-[#004358] mt-1">
                13.624,00
              </h1>
              <h1 className="text-lg font-semibold text-[#004358] mt-1">
                Total repassado a ONG
              </h1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src={Candidatos}
                alt="Imagem com dois usuários para demonstrar os candidatos"
              />
              <h1 className="text-3xl font-semibold text-[#004358] mt-1">
                25.520
              </h1>
              <h1 className="text-lg font-semibold text-[#004358] mt-1">
                Total de candidatos
              </h1>
            </div>
          </div>
          <div className="flex gap-20 mt-14 justify-center mb-28">
            <button className="bg-[#E7E7E7] text-[#373F42] text-xl flex rounded-full items-center ">
              <img
                className="size-12 ml-3 mr-6"
                src={Pasta}
                alt="Icone de Pasta"
              />
              Recebidos por Ong
              <img className="ml-32" src={Seta} alt="Icone de Seta" />
            </button>
            <button className="bg-[#E7E7E7] text-[#373F42] text-xl flex rounded-full items-center ">
              <img
                className="size-12 ml-3 mr-6"
                src={Pasta}
                alt="Icone de Pasta"
              />
              Relatório Completo
              <img className="ml-32" src={Seta} alt="Icone de Seta" />
            </button>
          </div>
          <div className="w-full grid place-content-center">
            <div className="bg-[#D2EEFF] rounded-full items-center  w-[548px]">
              <h1 className="text-2xl text-[#004358] text-center">Mentor</h1>
            </div>
          </div>
          <div className="flex justify-center gap-[70px] mt-7">
            <div className="bg-[#D2EEFF] rounded-full w-[217px]">
              <h1 className="text-[#3D3C3C] text-center text-base">
                Nome do candidato:
              </h1>
            </div>
            <div className="bg-[#D2EEFF] rounded-full w-[87px] ">
              <h1 className="text-base text-[#3d3c3c] text-center">Idade:</h1>
            </div>
            <div className="bg-[#d2eeff] rounded-full w-[102px]">
              <h1 className="text-base text-[#3d3c3c] text-center">Função:</h1>
            </div>
          </div>

          <div className="flex justify-center gap-[70px] mt-7">
            <div className="rounded-full w-[87px]">
              <h1 className="text-[#373F42]">Guilherme</h1>
            </div>
            <div className=" rounded-full w-[87px] ">
              <h1 className="text-base text-[#3d3c3c] text-center">30 anos</h1>
            </div>
            <div className="rounded-full w-[102px]">
              <h1 className="text-base text-[#3d3c3c] text-center">Mentor</h1>
            </div>
          </div>

          <div className="flex justify-center gap-[70px] mt-7">
            <div className="rounded-full w-[87px]">
              <h1 className="text-[#373F42]">Matheus</h1>
            </div>
            <div className=" rounded-full w-[87px] ">
              <h1 className="text-base text-[#3d3c3c] text-center">19 anos</h1>
            </div>
            <div className="rounded-full w-[102px]">
              <h1 className="text-base text-[#3d3c3c] text-center">Mentor</h1>
            </div>
          </div>

          <div className="w-full grid place-content-center mt-9">
            <div className="bg-[#D2EEFF] rounded-full items-center  w-[548px]">
              <h1 className="text-2xl text-[#004358] text-center">
                Programador
              </h1>
            </div>
          </div>

          <div className="flex justify-center gap-[70px] mt-7">
            <div className="bg-[#D2EEFF] rounded-full w-[217px]">
              <h1 className="text-[#3D3C3C] text-center text-base">
                Nome do candidato:
              </h1>
            </div>
            <div className="bg-[#D2EEFF] rounded-full w-[87px] ">
              <h1 className="text-base text-[#3d3c3c] text-center">Idade:</h1>
            </div>
            <div className="bg-[#d2eeff] rounded-full w-[102px]">
              <h1 className="text-base text-[#3d3c3c] text-center">Função:</h1>
            </div>
          </div>

          <div className="flex justify-center gap-[70px] mt-7">
            <div className="rounded-full w-[87px]">
              <h1 className="text-[#373F42]">Gabriel</h1>
            </div>
            <div className=" rounded-full w-[87px] ">
              <h1 className="text-base text-[#3d3c3c] text-center">45 anos</h1>
            </div>
            <div className="rounded-full w-[102px]">
              <h1 className="text-base text-[#3d3c3c] text-center">
                Front end
              </h1>
            </div>
          </div>

          <div className="flex justify-center gap-[70px] mt-7">
            <div className="rounded-full w-[87px]">
              <h1 className="text-[#373F42]">Adriana</h1>
            </div>
            <div className=" rounded-full w-[87px] ">
              <h1 className="text-base text-[#3d3c3c] text-center">31 anos</h1>
            </div>
            <div className="rounded-full w-[102px]">
              <h1 className="text-base text-[#3d3c3c] text-center">
                Full Stack
              </h1>
            </div>
          </div>

          <div className="flex mt-20 justify-end mb-9 border-b border-b-[#373F42] pb-9">
            <h1 className="text-base text-[#000] font-bold text-right">
              Mais informações de trabalho voluntário:{" "}
            </h1>
            <img className="size-7 ml-2" src={Seta} alt="Icone de Seta" />
          </div>

          <div>
            <h1 className="text-[#004358] text-[28px] mb-20">
              IMPULSIONE AS SUAS CAMPANHAS
            </h1>
            <h1 className="text-3xl font-bold text-[#004358] text-center">
              Plano premium
            </h1>
          </div>

          <div className="bg-[#D2EEFF] mt-20 grid grid-cols-2 gap-y-16 p-14">
            <div className="flex items-center mr-20 gap-5">
              <img src={Verificacao} alt="Icone de Verificação Azul" />
              <h1 className="text-2xl font-medium">
                Sem taxas e uso ilimitado das rifas
              </h1>
            </div>
            <div className="flex items-center gap-5">
              <img src={Verificacao} alt="Icone de Verificação Azul" />
              <h1 className="text-2xl font-medium">
                Curso de gestão financeira
              </h1>
            </div>

            <div className="flex items-center mr-20 gap-5">
              <img src={Verificacao} alt="Icone de Verificação Azul" />
              <h1 className="text-2xl font-medium">Plataforma sem anúncios</h1>
            </div>
            <div className="flex items-center gap-5">
              <img src={Verificacao} alt="Icone de Verificação Azul" />
              <h1 className="text-2xl font-medium">
                Acessos a quantos usuários entraram no seu perfil
              </h1>
            </div>
            <div className="flex items-center mr-20 gap-5">
              <img src={Verificacao} alt="Icone de Verificação Azul" />
              <h1 className="text-2xl font-medium">
                Ser ONG destaque na nossa plataforma
              </h1>
            </div>
          </div>
          
          <div className="flex text-items-center gap-64 mt-16 justify-center">
            <button className="text-5xl">
             <h1 className="mb-6 text-3xl">Plano mensal</h1>
              29⁹⁹
              <br />
              <h1 className="text-xl">por mês</h1>
            </button>
            <button className="text-5xl">
              <h1 className="mb-6 text-3xl">Plano anual</h1>
              21⁹⁹
              <br />
              <h1 className="text-xl">por mês</h1>
            </button>
          </div>

        </section>        

      </div>
    </div>
  );
}
