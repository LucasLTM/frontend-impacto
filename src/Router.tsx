import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "./layouts/default-layout";

import { Home } from "./pages/Home/home";
import { Login } from "./pages/Login/login";
import { Register } from "./pages/Register/register";
import { ShoppingPage } from "./pages/Shopping/shopping";
import { Doar } from "./pages/Doar/doar";
import { Sobre } from "./pages/Sobre/sobre";
import { Doacoes } from "./pages/Doacoes/doacoes";
import { Voluntariado } from "./pages/Voluntariado/voluntariado";
import { CriarRifa } from "./pages/Rifa/CriarRifa/rifa";
import { PerfilOng } from "./pages/PerfilOng/perfil";
import { EditarRifa } from "./pages/Rifa/EditarRifa/editarrifa";
import { DoacaoFooter } from "./pages/ConteudoFooter/DoaçãoFooter/DoacaoFooter";

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<ShoppingPage />} />
        <Route path="/doar" element={<Doar />} />
        <Route path="/sobrenos" element={<Sobre />} />
        <Route path="/doacoes" element={<Doacoes />} />
        <Route path="/voluntario" element={<Voluntariado />} />
        <Route path="/rifa" element={<CriarRifa />} />
        <Route path="/rifa/edit" element={<EditarRifa />} />
        <Route path="/perfilong" element={<PerfilOng />} />
        <Route path="/doaçãofooter" element={<DoacaoFooter />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}