import { ComponentProps } from "react";
import { Button } from "../shadcnUI/button";
import { twMerge } from "tailwind-merge";

type ButtonImpactoProps = ComponentProps<'button'> & {
  variant?: "primary" | "secondary"
}
export function ButtonImpacto({ variant = "primary", ...props }: ButtonImpactoProps){
  switch (variant) {
    case 'primary':
      return <Button {...props} variant="default" className={twMerge("bg-[#004AAD] transition-all hover:bg-[#4483d6] font-semibold", props.className)} />
    case 'secondary':
      return <Button {...props} variant="secondary" className={twMerge("bg-transparent hover:bg-zinc-100 w-full border-2 border-[#4483d6] text-[#4483d6] font-bold", props.className)} />
  }
}