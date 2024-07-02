import Destaques from "@/pages/Home/Components/destaques"
import HomeContent from "@/pages/Home/Components/home-content"

export function Home(){
  document.title = "Impacto"
  return(
    <>
      <Destaques />
      <HomeContent />
    </>  
  )
}