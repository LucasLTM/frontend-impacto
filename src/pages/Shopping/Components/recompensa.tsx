interface RecompensaProps{
  image: string
  nome: string
  price: number
}

export function Recompensa({ image, nome, price }: RecompensaProps){
  return(
    <article className="w-80 h-[450px] bg-[#DAF1FFAD] shadow-lg flex flex-col rounded-md overflow-hidden transition-all hover:scale-105">
      <figure>
        <img src={image} alt="Resgate placeholder" />
      </figure>

      <div className="flex-1 flex flex-col items-center justify-between pt-6 pb-4 px-4">
        <h4 className="text-2xl font-medium text-center">{nome}</h4>

        <button className="text-xl hover:">
          <p>Resgate por</p>
          <p className="text-3xl text-[#004AAD]">{price}</p>
          <p>pontos</p>
        </button>
      </div>
    </article>
  )
}