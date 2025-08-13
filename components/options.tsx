import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useState } from "react"

interface Option {
  points: number
  color: string
  text: string
}

export function Option({option,color,tag}:{option:Option,color:string,tag:string}) {
  const [erScore,setErScore] = useState(0)
  const [cfScore,setCfScore] = useState(0)
  const [siScore,setSiScore] = useState(0)
  const [psScore,setPsScore] = useState(0)

  const handleClick = (option:Option) => {
    if( tag === "emotional regulation" ){
        setErScore(erScore + option.points)
    }else if(tag === "cognitive funtion"){
        setCfScore(cfScore + option.points)
    }else if(tag === "social mat"){
        setSiScore(siScore + option.points)
    }else if(tag === "psychological flexibility"){
        setPsScore(psScore + option.points)
  }
  }

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="h-8 w-8 rounded-full border-2 inline-block" style={{borderColor:`${color}`}}></div>
      </HoverCardTrigger>
      <HoverCardContent className="w-fit rounded-2xl">
        <div className="flex justify-between gap-4" onClick={() =>handleClick(option)}>
          {option.text}
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
