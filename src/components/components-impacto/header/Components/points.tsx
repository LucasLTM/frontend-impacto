import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Moeda from '@/assets/images-header/moeda.png'

export function Points({ points }: { points: number }){
  const { t } = useTranslation()

  return(
    <NavLink to="/shopping" className="cursor-pointer flex items-center gap-2 hover:underline hover:underline-offset-2">
      <img src={Moeda} alt="icone de moeda" />
      <p>{points === 0 ? '' : points}{t('headerPontos')}</p>  
    </NavLink> 
  )
}