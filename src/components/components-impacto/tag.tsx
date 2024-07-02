import { ComponentProps } from "react";

interface TagProps extends ComponentProps<"button">{}

export function Tag(props:TagProps){
    return <button {...props} className="w-fit flex py-1  px-7 text-white bg-[#004AAD] font-medium hover:opacity-85 transition-all rounded"/>
}