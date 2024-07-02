import { ComponentProps } from "react";
import { Input } from "@/components/shadcnUI/input";
import { twMerge } from "tailwind-merge";

type InputImpactoProps = ComponentProps<'input'>
export function InputImpacto({ ...props}: InputImpactoProps){
  return <Input {...props} className={twMerge("bg-[#EDEDED] placeholder:text-sm", props.className)} />
}