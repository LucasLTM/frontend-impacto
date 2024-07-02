import { NavLink } from "react-router-dom"

interface OngProps{
  image: string
  idOng: number
  nome: string
  sobreOng: string
}

export function Ong({ idOng, image, nome, sobreOng }: OngProps){
  return(
    <li className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
      <figure>
        <img src={image} alt="Exemplo de ONG" className="min-w-[150px] h-[150px] object-cover rounded-2xl" />
      </figure>

      <div className="space-y-2">
        <h4 className="text-xl font-semibold">{nome}</h4>
        <div className="inline-block">
          <p className="leading-relaxed">{sobreOng}</p>
          <NavLink to={`/doar?ongId=${idOng}`} className="text-[#106BE4] font-medium hover:underline hover:underline-offset-2">Saiba mais!</NavLink>
        </div>
      </div>
    </li>
  )
}