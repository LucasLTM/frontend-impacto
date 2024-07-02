import { FormEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { Steps } from "./steps";

import { ButtonImpacto } from "@/components/components-impacto/button";
import { Label } from "@/components/shadcnUI/label";
import { InputImpacto } from "@/components/components-impacto/input";
import { Checkbox } from "@/components/shadcnUI/checkbox";
import { api } from "@/lib/axios";

const passos = ["Sobre você", "contato", "senha"]

interface RegisterBody{
  nome: string
  cpf: string
  genero: 'masculino' | 'feminino' | 'outros'
  doadorTempo?: boolean
  email: string
  telefone: string
  senha: string
  dataNascimento: string
}

export function RegisterUserForm(){
  const [step, setStep] = useState(0)
  const [senha, setSenha] = useState('')
  const [confirmaSenha, setConfirmaSenha] = useState('')

  const navigate = useNavigate()

  const [body, setBody] = useState<RegisterBody>({
    cpf: '',
    genero: 'outros',
    nome: '',
    doadorTempo: false,
    email: '',
    senha: '',
    telefone: '',
    dataNascimento: ''
  })

  const asSenhasNaoSaoAsMesmas = senha !== confirmaSenha

  function handleSubChangeStep() {
    setStep(state => state - 1)
  }

  function handleSumChangeStep() {
    setStep(state => state + 1)
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form);


    switch (step) {
      case 0:
        setBody(state => {
          return {
            ...state,
            nome: formData.get('name')?.toString() || '',
            cpf: formData.get('cpf')?.toString() || '',
            genero: formData.get('genero')?.toString() as 'masculino' | 'feminino' | 'outros',
            doadorTempo: formData.get('doadorTempo') === 'on',
            dataNascimento: new Date(formData.get('dataNascimento')?.toString() || '1970-01-01').toISOString()
          }
        })
        handleSumChangeStep()
        break;
    
      case 1:
        setBody(state => {
          return{
            ...state,
            telefone: formData.get('telefone')?.toString() || '',
            email: formData.get('email')?.toString() || ''
          }
        })

        handleSumChangeStep()
        break;

      default:
        console.log(formData.get('senha')?.toString())
        if (formData.get('senha')?.toString() === formData.get('confirmarSenha')?.toString()) {
          setBody(state => {
            return{
              ...state,
              senha: formData.get('senha')?.toString() || ''
            }
          })
          
          try {
            const response = await api.post('/api/usuarios', body)
            localStorage.setItem('userId', response.data.idUsuarios)
            navigate('/')
          } catch (error) {
            console.log(error)
          }
      
        }
      break;
    }
  }

  return(
    <form action="" onSubmit={handleSubmit} className="space-y-6">
      <Steps etapas={passos} step={step}  />

      {/* Passo 1 - Informações iniciais */}
      <section className={`${step === 0 ? "flex" : "hidden"} flex-col gap-2`}>
        <div className="space-y-4 mb-3">
          <Label htmlFor="name">Nome:</Label>
          <InputImpacto id="name" name="name" placeholder="Digite seu nome" required />
        </div>
        <div className="space-y-4 mb-3">
          <Label htmlFor="cpf">CPF:</Label>
          <InputImpacto id="cpf" name="cpf" placeholder="Digite o seu CPF" required />
        </div>
        <div className="grid grid-cols-2 grid-rows-1">
          <div className="space-y-1 mb-3 flex flex-col gap-2">
            <Label htmlFor="genero" className="leading-relaxed mt-0 p-0">Qual seu gênero</Label>
            <select name="genero" id="genero" className="w-fit cursor-pointer" required>
              <option value="" disabled selected className="hidden">Selecione o sexo...</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outros">Prefiro não informar</option>
            </select>
          </div>
          <div className="space-y-1 mb-3 flex flex-col gap-2">
            <Label htmlFor="dataNascimento" className="leading-relaxed mt-0 p-0">Qual sua data de nascimento?</Label>
            <InputImpacto type="date" name="dataNascimento" id="dataNascimento" className="w-fit" required />  
          </div>
        </div>
        <div className="mb-3 flex items-center gap-2">
          <Checkbox name="doadorTempo" id="doadorTempo" className="data-[state=checked]:bg-[#004AAD]" />
          <Label htmlFor="doadorTempo" className="leading-relaxed mt-0 p-0">Deseja participar de trabalhos voluntários?</Label>
        </div>
      </section>

      {/* Passo 2 - Sobre a ONG */}
      <section className={`${step === 1 ? "flex" : "hidden"} flex-col`}>
        <div className="space-y-4 mb-3">
          <Label htmlFor="email">E-mail:</Label>
          <InputImpacto id="email" placeholder="Digite seu e-mail" name="email" required={step === 1} />
        </div>

        <div className="space-y-4 mb-3">
          <Label htmlFor="telefone">Telefone:</Label>
          <InputImpacto id="telefone" placeholder="Digite seu telefone" name="telefone" required={step === 1} />
        </div>
      </section>

      {/* Passo 4 - Senha */}
      <div className={`${step === 2 ? "flex" : "hidden"} flex-col`}>
        <div className="space-y-4 mb-3">
          <Label htmlFor="senha">Senha:</Label>
          <InputImpacto id="senha" name="senha" placeholder="Digite sua senha" type="password" onChange={(e) => setSenha(e.target.value)} />
        </div>
        <div className="space-y-4 mb-3">
          <Label htmlFor="confirmarSenha">Confirmar senha:</Label>
          <InputImpacto id="confirmarSenha" name="confirmarSenha" placeholder="Confirme sua senha" type="password" onChange={(e) => setConfirmaSenha(e.target.value)} />
        </div>

        {asSenhasNaoSaoAsMesmas && (
          <span className="text-red-600 font-bold text-sm">As senhas informadas estão diferentes!</span>
        )}
      </div>

      {/* Form Controls */}
      <div className="mt-6 w-full flex flex-col gap-6">
        <div className="flex-1 grid grid-cols-2 gap-6">
          <div className={`${step === 0 ? "invisible" : "visible"}`} >
            <ButtonImpacto type="button" variant="secondary" onClick={handleSubChangeStep}>Voltar</ButtonImpacto>
          </div>
          <ButtonImpacto type="submit">{ step === 3 ? "Cadastrar" : "Continuar" }</ButtonImpacto>
        </div>

        <div className="flex items-center gap-2">
          <p>Já possui uma conta?</p>
          <NavLink to="/login" className="text-[#004AAD] font-semibold hover:underline hover:underline-offset-2">Faça login</NavLink>
        </div>
      </div>
    </form>
  )
}