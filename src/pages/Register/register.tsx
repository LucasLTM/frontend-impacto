import { useState } from "react";
import { useTranslation } from "react-i18next";

import styles from './style.module.css'

import Logo from '@/assets/images-impacto/Logo.svg'

import { RegisterOngForm } from "./Components/register-ong-form";
import { RegisterUserForm } from "./Components/register-user-form";
import { ButtonImpacto } from "@/components/components-impacto/button";


document.title = "Criar Conta || Impacto"
export function Register(){
  const [registerType, setRegisterType] = useState<'user' | 'ong'>('user')
  const { t } = useTranslation()

  function handleChangeLogin() {
    setRegisterType(state => {
      return state === "user" ? "ong" : "user"
    })
  }
  
  return (
    <div className="lg:grid lg:grid-cols-2 flex">
      <section className={`${styles.bgImage} bg-cover h-screen hidden lg:flex flex-col relative items-center`}>
        <div className="block mt-16 font-medium text-center text-xl">
          <p>{t('loginTextPart1')}</p>
          <p>{t('loginTextPart2')}</p>
        </div>

        <div className="w-full flex flex-col items-end mt-20 gap-2">
          <button className={`p-5 w-[175px] ${registerType === 'user' && "bg-white font-bold text-black" || "text-white font-bold"} rounded-l-full`} onClick={handleChangeLogin}>
            Cadastro doador
          </button>
          <button className={`p-5 w-[175px] ${registerType === 'ong' && "bg-white font-bold text-black" || "text-white font-medium"} rounded-l-full`} onClick={handleChangeLogin}>
            Cadastro ONG
          </button>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 w-fit">
          <figure>
            <img src={Logo} alt="" className="w-[200px]" />
          </figure>
        </div>
      </section>

      <main className="mt-8 flex flex-col items-center *:w-full gap-6 w-[90%] pl-[10%] pb-4">
        <h2 className="text-4xl font-semibold">Crie sua conta!</h2>
        <p className="text-xl">
        Cria uma conta agora mesmo e {registerType === "ong" ? "seja impactada por " : "cause impacto em "} várias pessoas!
        </p>

        <div className="grid grid-cols-2 gap-2 w-full sm:hidden">
          <ButtonImpacto variant={registerType === 'ong' ? "primary" : "secondary"} onClick={handleChangeLogin}>Conta para ONG</ButtonImpacto>
          <ButtonImpacto variant={registerType === 'user' ? "primary" : "secondary"} onClick={handleChangeLogin}>Conta para Doador</ButtonImpacto>
        </div>

        {
          registerType === "user" ? <RegisterUserForm /> : <RegisterOngForm />
        }
      </main>
    </div>
  )
}