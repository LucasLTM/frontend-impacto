import { useState } from "react";
import { useTranslation } from "react-i18next";

import { LoginOngForm } from "./Components/login-ong-form";
import { LoginUserForm } from "./Components/login-user-form";

import Logo from '@/assets/images-impacto/Logo.svg'
import Bridge from '@/assets/images-impacto/bridge-logo.svg'

import styles from './style.module.css'

export function Login(){
  document.title = "Login || Impacto"
  const [loginType, setLoginType] = useState<'user' | 'ong'>('user')
  const { t } = useTranslation()

  function handleChangeLoginToONG(){
    setLoginType("ong")
  }

  function handleChangeLoginToUser(){
    setLoginType("user")
  }
  

  return (
    <div className="lg:grid lg:grid-cols-2 flex items-center">
      <main className="mt-8 flex flex-col items-center *:w-full gap-6 w-[90%] pl-[10%] pb-4">
        <div className="flex items-center gap-2">
          <img src={Bridge} className="w-12" />
          <h2 className="font-semibold text-xl uppercase text-[#004AAD]">
            {t('slogan')}
          </h2>
        </div>
        <h1 className="text-4xl font-bold leading-relaxed">{t('loginTitle')}</h1>
        <p>{t('loginFrase')}</p>

        {
          loginType === 'user' ? <LoginUserForm /> : <LoginOngForm />
        }

      </main>
      <section className={`${styles.bgImage} bg-cover h-screen hidden lg:flex flex-col relative items-center`}>
        <div className="block mt-16 font-medium text-center text-xl">
          <p>{t('loginTextPart1')}</p>
          <p>{t('loginTextPart2')}</p>
        </div>

        <div className="w-full flex flex-col mt-12 gap-2">
          <button className={`p-5 w-[175px] ${loginType === 'user' ? "text-black bg-white font-bold" : "text-white"} rounded-r-full`} onClick={handleChangeLoginToUser}>
            {t('loginButtonUser')}
          </button>
          <button className={`p-5 w-[175px] ${loginType === 'ong' ? "text-black bg-white font-bold" : "text-white"} rounded-r-full`} onClick={handleChangeLoginToONG}>
          {t('loginButtonONG')}
          </button>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 w-fit">
          <figure>
            <img src={Logo} alt="" className="w-[200px]" />
          </figure>
        </div>
      </section>
    </div>
  )
}