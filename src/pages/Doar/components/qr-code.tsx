import { Skeleton } from "@/components/shadcnUI/skeleton";
import { ComponentProps } from "react";

interface QrCodeProps extends ComponentProps<'img'> {
  isShow?: boolean
  url: string
}

export function QrCode({ isShow = false, url }: QrCodeProps){
  if (!isShow) return null;

  return(
    <div className="relative w-[175px] h-[175px]">
      <Skeleton
        className="w-[175px] h-[175px] bg-zinc-300"
      />
      <img 
        src={`https://api.qrserver.com/v1/create-qr-code/?size=175x175&data=${url}`} 
        alt="Qr Code para realizar a doação" 
        loading="lazy"
        className="absolute inset-0" 
      />
    </div>
  )

}