import { ComponentProps } from "react";

interface TagProps extends ComponentProps<'button'>{}

export function Tag(props: TagProps){
  return <button {...props} className="w-fit py-0.5 px-4 rounded-full bg-[#004AAD] text-white font-light hover:opacity-85 transition-all text-sm sm:text-base" />
}