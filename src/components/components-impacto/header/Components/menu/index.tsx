import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { EmptyLogin } from "../empty-login";
import { Points } from "../points";

import styles from './style.module.css'
import { SelectLanguages } from "../languages";
import { useEffect, useState } from "react";
import { UserLogin } from "../user-login";

export function Menu({ isShow }: { isShow: boolean }){
  const [idUsuario, setIdUsuario] = useState('')
  const { t } = useTranslation()

  useEffect(() => {
    const idUsuario = localStorage.getItem('userId')

    if (idUsuario) {
      setIdUsuario(idUsuario)
    }
  }, [])

  if (!isShow) return;

  return(
    <div className={`fixed shadow top-[4.5rem] w-full z-[98] ${isShow && styles.animationMenu}`}>
      <section className={`flex flex-col items-center gap-4 sm:hidden py-4 bg-white w-full`}>
        <h2 className="font-medium text-xl">Navegue pela plataforma</h2>
        <NavLink to="/sobrenos" className="transition-all hover:underline hover:underline-offset-2">{t('headerSobreNos')}</NavLink>
        <NavLink to="/doacoes" className="transition-all hover:underline hover:underline-offset-2">{t('headerDoacao')}</NavLink>
        <NavLink to="/voluntario" className="transition-all hover:underline hover:underline-offset-2">{t('headerTrabalhoVoluntario')}</NavLink>
        <SelectLanguages textColor="black" />
        {
          idUsuario !== '' ? <UserLogin userId={Number(idUsuario)} /> : <EmptyLogin />
        }

        <Points points={0} />
      </section>
    </div>
  )
}