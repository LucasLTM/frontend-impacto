import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcnUI/dialog"
import { QrCode } from "./qr-code"
import { Label } from "@/components/shadcnUI/label"
import { InputImpacto } from "@/components/components-impacto/input"
import { FormEvent, useState } from "react"
import { ButtonImpacto } from "@/components/components-impacto/button"


export function DialogDoacao(){
  const [value, setValue] = useState(0.00)
  const [showQrCode, setShowQrCode] = useState(false)
  const [url, setUrl] = useState('')

  async function handleGenerateQrCode(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    setUrl(`http://localhost:5500/index.html?idOng=1&valorDoacao=${value}`)
    setShowQrCode(true)
  }

  return(
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-[#004AAD] w-[200px] text-zinc-50 text-xl px-5 py-1 font-semibold rounded hover:opacity-80 transition-all text-center">Doar</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Vamos fazer uma doação?
          </DialogTitle>
          <DialogDescription>
            <section className="mt-2 flex flex-col items-center gap-4">
              {
                showQrCode ? (
                  <section className="space-y-4 flex flex-col items-center">
                    <h2 className="text-xl text-center font-medium">Escaneie o Qr Code abaixo para realizar a doação:</h2>
                    <QrCode isShow={showQrCode} url={url} />

                    <a href={url} target="_blank" className="text-base hover:underline hover:underline-offset-2">Ou clique aqui!</a>

                    <button className="text-base hover:underline hover:underline-offset-2" onClick={() => setShowQrCode(state => !state)} >Deseja fazer uma nova doação?</button>
                  </section>
                ) : (
                  <form onSubmit={handleGenerateQrCode} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="doacaoValor">Digite o valor que você deseja contribuir</Label>
                      <InputImpacto type="number" value={value} onChange={e => setValue(Number(e.target.value))} id="doacaoValor" disabled={showQrCode} />
                    </div>

                    <ButtonImpacto>Confirmar doação</ButtonImpacto>
                  </form>
                )
              }
            </section>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>

  )
}