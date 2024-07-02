import { ChevronRight, Check } from 'lucide-react'

interface StepsProps {
  step: number,
  etapas: string[]
}

export function Steps({ step, etapas }: StepsProps){
  return (
    <div className="w-full flex items-center mb-6 text-xs sm:text-base flex-wrap gap-6">
      {
        etapas.map((item, index) => (
          <>
            <Step count={index + 1} isCheck={step >= index + 1} isActive={step === index} text={item} />
            { index + 2 <= etapas.length && <ChevronRight /> }
          </>
        ))
      }
    </div>
  )
}

export function Step({count, isCheck = false, isActive = false, text}: {count: number, isCheck?: boolean, isActive: boolean, text: string}){
  return (
    <div className="flex items-center gap-2">
        <span className={`flex items-center justify-center w-6 h-6 rounded-full font-bold ${isCheck ? "bg-[#1D8841] text-white" : isActive ? "bg-[#004AAD] text-white" : "bg-[#E1E1E6] text-[#8D8D99]"}`}>
          {
            isCheck ? <Check width={20} height={20} /> : count
          }
        </span>
        <p className={`${isCheck || isActive ? "text-black font-semibold" : "text-[#8D8D99]"} ${!isActive ? "hidden" : "block"}`}>{text}</p>
      </div>
  )
}