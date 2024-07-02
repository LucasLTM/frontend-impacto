import * as React from "react"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/shadcnUI/button"
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/shadcnUI/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcnUI/popover"

import BR from "@/assets/paises/br.svg"
import ES from "@/assets/paises/es.svg"
import US from "@/assets/paises/us.svg"
import { useTranslation } from "react-i18next"

const languages = [
  {
    value: "pt",
    label: "Português",
    flag: BR,
  },
  {
    value: "en",
    label: "English",
    flag: US,
  },
  {
    value: "es",
    label: "Espanhol",
    flag: ES,
  }
]

interface SelectLanguagesProps{
  textColor?: 'black' | 'white'
}

export function SelectLanguages({ textColor }: SelectLanguagesProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(localStorage.getItem('lang'))

  const { i18n } = useTranslation()

  
  function handleSetTranslation(currentValue: string){
    setValue(currentValue === value ? "" : currentValue)
    setOpen(state => !state)
    i18n.changeLanguage(currentValue)
    localStorage.setItem('lang', currentValue)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`flex w-fit justify-between border-0 hover:bg-transparent hover:underline bg-transparent ${textColor === 'black' ? "text-black hover:text-zinc-600" : "text-white hover:text-zinc-100"}  pr-0`}
        >
          {value
            ? (<div className="flex items-center gap-2">
            <img src={
              languages.find(item => item.value === value)?.flag
            } className="rounded-full object-cover h-[20px] w-[20px]"/>
            <p>{languages.find(item => item.value === value)?.label}</p>
          </div>)
            : (<div className="flex items-center gap-2">
              <img src={BR} className="rounded-full object-cover h-[20px] w-[20px]"/>
              <p>Português</p>
            </div>)
            }
          <ChevronDown className={`ml-2 h-4 w-4 shrink-0 opacity-50 ${open && "rotate-180"}`} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 z-[99]">
      <Command>
        <CommandList>
          <CommandGroup>
            {languages.map(item => (
              <CommandItem 
                key={item.value}
                value={item.value}
                onSelect={handleSetTranslation}
                className="gap-2"
                >
                  <img src={item.flag} className="rounded-full object-cover h-[20px] w-[20px]"/>
                  {item.label}
                </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
      </PopoverContent>
    </Popover>
  )
}
