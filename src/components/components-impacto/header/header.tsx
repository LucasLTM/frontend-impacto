import { Input } from '@/components/shadcnUI/input'
import { SelectLanguages } from '@/components/components-impacto/header/Components/languages'

import { MenuIcon, Search, X } from 'lucide-react'
import Logo from '@/assets/images-impacto/Logo.svg'

import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { EmptyLogin } from './Components/empty-login'
import { Menu } from './Components/menu/index'
import { Points } from './Components/points'
import { UserLogin } from './Components/user-login'

export function Header(){
  const [showMenu, setShowMenu] = useState(false)
  const [idUsuario, setIdUsuario] = useState('')
  const { t } = useTranslation()

  useEffect(() => {
    const idUsuario = localStorage.getItem('userId')

    if (idUsuario) {
      setIdUsuario(idUsuario)
    }
  }, [])

  function handleToogleMenu(){
    setShowMenu(state => !state)
  }

  return (
    <>
      <header className="w-full flex flex-col items-center gap-4 shadow-md fixed top-0 z-[98] bg-white overflow-hidden">
        <section className="bg-linear-blue w-full flex pt-4 pb-3 justify-center shadow-md">
          <div className="w-[80%] flex items-center justify-between">
          <NavLink to="/">
              <figure>
                <img src={Logo} alt="Logo da Impacto" className="w-[75px] sm:w-[68px]" />
              </figure>
          </NavLink>

          <button className="block sm:hidden" onClick={handleToogleMenu}>
            {
              showMenu 
                ? <X size={36} color="#ffffff" /> 
                : <MenuIcon size={36} color="#ffffff" />
            }
          </button>
            

            <nav className="hidden sm:flex items-center w-2/3 justify-around">
              <NavLink to="/sobrenos" className="transition-all hover:underline hover:underline-offset-2">{t('headerSobreNos')}</NavLink>
              <NavLink to="/doacoes" className="transition-all hover:underline hover:underline-offset-2">{t('headerDoacao')}</NavLink>
              <NavLink to="/voluntario" className="transition-all hover:underline hover:underline-offset-2">{t('headerTrabalhoVoluntario')}</NavLink>
            </nav>

            <div className="hidden sm:flex gap-20">
              {
                idUsuario !== '' ? <UserLogin userId={Number(idUsuario)} /> : <EmptyLogin />
              }
              <SelectLanguages />
            </div>

          </div>
        </section>
        <section className="hidden sm:flex items-center justify-between w-[80%] gap-5 pb-4">
          <div className="flex-1 relative">
            <Input placeholder={t('headerInputPlaceholder')} className="w-full bg-[#EDEDED] px-5 py-3" />
            <Search className="absolute top-5 right-3 -translate-y-1/2 -translate-x-1/2" />
          </div>
          
          <Points points={0} />
        </section>
      </header>

      <Menu isShow={showMenu} />
    </>
  )
}