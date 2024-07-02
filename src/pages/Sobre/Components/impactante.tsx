import { Github, Linkedin } from 'lucide-react'

interface ImpactanteProps{
  imgSrc: string
  nome: string
  atuacao: string
  linkedinLink: string
  githubLink: string
  position: "left" | "right"
}

export function Impactante({ atuacao, githubLink, imgSrc, linkedinLink, nome, position }: ImpactanteProps){
  return(
    <article className={`flex gap-4 ${position === "right" ? "justify-start flex-row-reverse" : ""}`}>
        <figure>
            <img src={imgSrc} className="w-72 object-cover" />
        </figure>
        <div className={`mt-4 ${position === "right" ? "text-end" : "text-start"}`}>
          <div className="space-y-2">
            <h3 className="font-medium text-xl">{nome}</h3>
            <p>{atuacao}</p>
          </div>
          <div className={`flex items-center gap-4 mt-2 ${position === "right" ? "justify-end" : "justify-start"}`}>
            <a href={linkedinLink} target="_blank">
              <Linkedin fill="#004AAD" strokeWidth={0} size={32} className="hover:scale-110 transition-all" />
            </a>
            <a href={githubLink} target="_blank">
              <Github fill="#004AAD" strokeWidth={0} size={32} className="hover:scale-110 transition-all" />
            </a>
          </div>
        </div>
    </article>
  )
}