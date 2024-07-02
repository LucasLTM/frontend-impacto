import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/shadcnUI/input";
import { Label } from "@/components/shadcnUI/label";
import { Button } from "@/components/shadcnUI/button";

export function LoginOngForm(){
  const [showPassword, setShowPassword] = useState(false)
  const { t } = useTranslation()
  function handleShowPassword() {
    setShowPassword(state => !state)
  }
  return(
    <form action="" className="space-y-9">
      <div className="space-y-5">
        <Label htmlFor="cnpj" className="font-normal">
          {t('formONGCnpjLabel')}
        </Label>
        <Input id="cnpj" className="w-full bg-[#EDEDED] p-6" placeholder={t('formONGCnpjInputPlaceholder')} />
      </div>
      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <Label htmlFor="password" className="font-normal">
            {t('formPasswordLabel')}
          </Label>
          <a href="" className="text-[#004AAD] font-semibold hover:underline hover:underline-offset-2">{t('formEsqueceuSuaSenha')}</a>
        </div>
        <div className="relative">
          <Input id="password" className="w-full bg-[#EDEDED] p-6" type={showPassword ? "text" : "password"} placeholder={t('formPasswordInputPlaceholder')} />
          <button type="button" onClick={handleShowPassword} className="absolute top-6 right-6 -translate-y-1/2 -translate-x-1/2">
            {showPassword ? <Eye /> : <EyeOff />}
          </button>
        </div>
      </div>

      <Button type="submit" className="bg-[#004AAD] w-full p-6 font-bold text-xl hover:bg-[#004badda]">
        {t('formSubmitButton')}
      </Button>

      <div className="flex items-center gap-2">
        <p>{t('formLoginCriarConta')}</p>
        <NavLink to="/register" className="text-[#004AAD] font-semibold hover:underline hover:underline-offset-2">{t('formLoginCriarContaLink')}</NavLink>
      </div>
    </form>
  )
}