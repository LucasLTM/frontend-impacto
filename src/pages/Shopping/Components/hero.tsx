import Sacolas from '@/assets/images-shopping/sacolas.png'

interface HeroProps{
  title: string
  content: string
  buttonText: string
}

export function Hero({ buttonText, content, title }: HeroProps){
  return(
    <section className="flex p-5 w-full justify-between bg-[#DAF1FFAD] rounded-xl shadow-md mt-8">
      <div className="flex flex-col justify-between gap-2">
        <div className="flex-1 flex flex-col gap-2">
          <h2 className="text-2xl">{title}</h2>
          <p className="sm:w-2/3">{content}</p>
        </div>
        <a href="" className="p-2 w-2/5 bg-[#004AAD] text-white text-center sm:text-xl rounded-md font-medium hover:opacity-80 transition-all">{buttonText}</a>
      </div>
      <figure>
        <img src={Sacolas} alt="Troque pontos por cupons de desconto!" />
      </figure>
    </section>
  )
}