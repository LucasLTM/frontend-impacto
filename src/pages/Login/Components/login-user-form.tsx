import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";

import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/shadcnUI/input";
import { Label } from "@/components/shadcnUI/label";
import { Button } from "@/components/shadcnUI/button";
import { api } from "@/lib/axios";
import { useToast } from "@/components/shadcnUI/use-toast";

export function LoginUserForm(){
  const [showPassword, setShowPassword] = useState(false)
  const { toast } = useToast()
  const { t } = useTranslation()
  const navigate = useNavigate()


  function handleShowPassword() {
    setShowPassword(state => !state)
  }

  function showToast() {
    toast({
      title: "Ops!",
      description: "Credenciais inválidas",
      variant: "destructive"
    })
  }

  async function handleLogin(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const { data } = await api.get('/api/usuarios')

    const email = formData.get('email')?.toString()
    const senha = formData.get('senha')?.toString()

    const usuarioFoiCadastrado = data.find((item: any) => item.email === email)

    if (!usuarioFoiCadastrado) {
      showToast()
      return
    }

    console.log(senha !== usuarioFoiCadastrado.senha)
    
    if (senha !== usuarioFoiCadastrado.senha) {
      showToast()
      return
    }

    localStorage.setItem('userId', usuarioFoiCadastrado.idUsuarios)
    navigate('/')
  }

  return(
    <form action="" className="space-y-9" onSubmit={handleLogin}>
      <div className="space-y-5">
        <Label htmlFor="email" className="font-normal">
          {t('formUserEmailLabel')}
        </Label>
        <Input id="email" name="email" className="w-full bg-[#EDEDED] p-6" placeholder={t('formUserEmailInputPlaceholder')} />
      </div>
      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <Label htmlFor="password" className="font-normal">
            {t('formPasswordLabel')}
          </Label>
          <a href="" className="text-[#004AAD] font-semibold hover:underline hover:underline-offset-2">{t('formEsqueceuSuaSenha')}</a>
        </div>
        <div className="relative">
          <Input id="password" name="senha" className="w-full bg-[#EDEDED] p-6" type={showPassword ? "text" : "password"} placeholder={t('formPasswordInputPlaceholder')} />
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