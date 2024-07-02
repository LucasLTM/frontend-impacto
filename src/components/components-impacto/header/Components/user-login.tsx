import { useEffect, useState } from "react";

import LoginPlaceholder from '@/assets/images-header/login.png'
import { api } from "@/lib/axios";

interface User{
  idUsuarios: number
  nome: string
}

export function UserLogin({ userId }: { userId: number }) {
  const [user, setUser] = useState<User | null>(null)
  async function getUserById(){
    const response = await api.get(`/api/usuarios/${userId}`)
    console.log(response.data.nome.split(' ')[0])
    setUser(response.data)
  }
  useEffect(() => {
    getUserById()
  },[])

  return(
    <div className="flex gap-2 items-center cursor-pointer hover:underline">
      <img src={LoginPlaceholder} alt="" className="h-[40px] w-[40px]" />
      <p>{user?.nome.split(' ')[0]}</p>
    </div>
  )
}