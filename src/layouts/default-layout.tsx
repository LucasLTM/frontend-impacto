import Footer from "@/components/components-impacto/footer";
import { Header } from "@/components/components-impacto/header/header";
import { Outlet } from "react-router-dom";

export function DefaultLayout(){
  return(
    <div className="flex flex-col">
      <Header />
      <div className="flex-1 mt-24 sm:mt-[175px] ">
        <Outlet  />
      </div>
      <Footer />
    </div>
  )
}