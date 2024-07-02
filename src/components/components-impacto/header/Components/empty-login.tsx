import LoginPlaceholder from '@/assets/images-header/login.png'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

export function EmptyLogin(){
  const { t } = useTranslation()

  return(
    <div className="flex gap-2 items-center cursor-pointer hover:underline">
      <img src={LoginPlaceholder} alt="" className="h-[40px] w-[40px]" />
      <NavLink to="/login">{t('headerEntrar')}</NavLink>
    </div>
  )
}