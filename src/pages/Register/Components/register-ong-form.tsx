import { FormEvent, useState } from "react";
import { NavLink } from "react-router-dom";

import { Upload } from 'lucide-react'

import { Steps } from "./steps";

import { Input } from "@/components/shadcnUI/input";
import { Label } from "@/components/shadcnUI/label";
import { Textarea } from "@/components/shadcnUI/textarea";

import { InputImpacto } from "@/components/components-impacto/input";
import { ButtonImpacto } from "@/components/components-impacto/button";
import { useToast } from "@/components/shadcnUI/use-toast";

const etapas = ["informações", "sobre a ong", "contato", "senha"]

export function RegisterOngForm(){
  const [step, setStep] = useState(0)
  const [causas, setCausas] = useState<string[] | []>([])
  const [causa, setCausa] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmaSenha, setConfirmaSenha] = useState('')
  const { toast } = useToast()

  const asSenhasSaoAsMesmas = senha !== confirmaSenha

  function handleSumChangeStep(){
    setStep(state => state+1)
  }
  function handleSubChangeStep(){
    setStep(state => state-1)
  }

  function handleAddCausa() {
    const novasCausas = [...causas, causa]
    causa !== '' && setCausas(novasCausas.filter((este, i) => novasCausas.indexOf(este) === i))
    causa !== '' && setCausa('')
  }

  function handleRemoveCausa(causa: string){
    setCausas(state => state.filter(item => item !== causa))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    handleSumChangeStep()
    console.log(step);
    
    if (step === 4) {
      toast({
        title: "Atenção!",
        description: "Seu acesso será liberado assim que nossa analise de segurança for feita. Fique atento a sua caixa de e-mail",
        variant: "destructive"
      })
    }
  }

  return(
    <form action="" onSubmit={handleSubmit}>
      <Steps step={step < 4 ? step : 3} etapas={etapas} />

      {/* Passo 1 - Informações iniciais */}
      <div className={`${step === 0 ? "flex" : "hidden"} flex-col gap-2`}>
        <div className="space-y-4 mb-3">
          <Label htmlFor="name">Nome:</Label>
          <InputImpacto id="name" placeholder="Digite o nome da ONG" />
        </div>
        <div className="space-y-4 mb-3">
          <Label htmlFor="cnpj">CNPJ:</Label>
          <InputImpacto id="cnpj" placeholder="Digite o CNPJ da ONG" />
        </div>
        <div className="space-y-4 mb-3">
          <Label htmlFor="email">E-mail:</Label>
          <InputImpacto id="email" placeholder="Digite o e-mail da ONG" />
        </div>
      </div>

      {/* Passo 2 - Sobre a ONG */}
      <div className={`${step === 1 ? "flex" : "hidden"} flex-col`}>
        <div className="flex gap-2">
          <div>
            <Label htmlFor="fotoPerfil" className="w-20 h-20 bg-[#D9D9D9] hover:bg-[#e2e2e2] transition-all rounded-md flex items-center justify-center cursor-pointer">
              <Upload className="text-[#8C8C8C]" size={36} />
            </Label>
            <Input id="fotoPerfil" type="file" className="hidden" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-sm">Logo da ONG</h3>
            <p className="text-xs w-4/5">Carregue uma foto com formato JPEG, JPG ou PNG de no máximo 2mb. Para melhores resultados, use imagens quadradas para garantir que sua logo não seja cortada</p>
          </div>
        </div>

        <div className="space-y-5 mt-4">
          <Label>Sobre</Label>
          <Textarea className="h-[130px] resize-none bg-[#EDEDED]" placeholder="Fale sobre sua ONG, qual sua missão? Sua visão e seus valores?" />
        </div>
      </div>

      {/* Passo 3 - Contatos */}
      <div className={`${step === 2 ? "flex" : "hidden"} flex-col`}>
        <div className="space-y-4 mb-3">
          <Label htmlFor="telefone">Telefone:</Label>
          <InputImpacto id="telefone" type="tel" placeholder="(00) 00000-0000" />
        </div>

        <div className="space-y-4 mb-3">
          <Label htmlFor="telefone">Local de atuação:</Label>
          <InputImpacto id="telefone" placeholder="Estado - País" />
        </div>

        <div className="space-y-2">
          <div className="space-y-4 mb-3">
            <Label htmlFor="telefone">Causas:</Label>
            <div className="flex items-center gap-2">
              <InputImpacto id="telefone" placeholder="Quais causas vocês apoiam?" className="flex-1" onChange={(e) => setCausa(e.target.value.trim())} value={causa} />
              <button className="hidden" onClick={handleAddCausa}>Adicionar</button>
            </div>
          </div>
          <div className="flex flex-wrap w-full gap-2">
            {causas.map(item => (
              <button key={item} className="block py-2 px-4 bg-[#EDEDED] rounded-full text-xs hover:underline hover:underline-offset-2" onClick={() => handleRemoveCausa(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Passo 4 - Senha */}
      <div className={`${step >= 3 ? "flex" : "hidden"} flex-col`}>
        <div className="space-y-4 mb-3">
          <Label htmlFor="senha">Senha:</Label>
          <InputImpacto id="senha" placeholder="Digite sua senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
        <div className="space-y-4 mb-3">
          <Label htmlFor="confirmarSenha">Confirmar senha:</Label>
          <InputImpacto id="confirmarSenha" placeholder="Confirme sua senha" type="password" value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)} />
        </div>

        {asSenhasSaoAsMesmas && (
          <span className="text-red-600 font-bold text-sm">As senhas informadas estão diferentes!</span>
        )}
      </div>

      {/* Form Controls */}
      <div className="mt-6 w-full flex flex-col gap-6">
        <div className="flex-1 grid grid-cols-2 gap-6">
          <div className={`${step === 0 ? "invisible" : "visible"}`} >
            <ButtonImpacto type="button" variant="secondary" onClick={handleSubChangeStep}>Voltar</ButtonImpacto>
          </div>
          {
            step >= 3 ?
            <ButtonImpacto type="submit" variant="secondary">
              Cadastrar
            </ButtonImpacto>
            : <ButtonImpacto type="button" onClick={handleSumChangeStep}>
            Continuar
          </ButtonImpacto>
          }
        </div>

        <div className="flex items-center gap-2">
          <p>Já possui uma conta?</p>
          <NavLink to="/login" className="text-[#004AAD] font-semibold hover:underline hover:underline-offset-2">Faça login</NavLink>
        </div>
      </div>
    </form>
  )
}