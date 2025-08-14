"use client";
import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import dayjs from "dayjs";
import { Anybody } from "next/font/google";
import Banner from "@/components/banner";
import que from "@/lib/data";
import { BrainCog, Smile, Users } from "lucide-react";
import { Option } from "@/components/options";
import axios from "axios"
import Chartjs from "@/components/chart";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useState } from "react";
import DataSection from "./dataSection";
import Loading from "./loading";
import { UserButton } from "@clerk/nextjs";

interface Option {
  points: number;
  color: string;
  text: string;
}

interface Data {
  cognitiveFunction: number;
  emotionalRegulation: number;
  psychologicalFlexibility: number;
  scoialMatric: number;
  totalScore: number;
}

const anybody = Anybody({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function DailyLogs({setDataSubmited}:any) {
  const { user } = useUser();
  const a = dayjs();

  const [erScore, setErScore] = useState(0);
  const [cfScore, setCfScore] = useState(0);
  const [smScore, setSmScore] = useState(0);
  const [pfScore, setPfScore] = useState(0);

  const [showToday,setShowToday] = useState<Data>()

  const handleClick = (option: Option,tag:string) => {
    if (tag === "emotional regulation") {
      setErScore(erScore + option.points);
    } else if (tag === "cognitive funtion") {
      setCfScore(cfScore + option.points);
    } else if (tag === "social matric") {
      setSmScore(smScore + option.points);
    } else if (tag === "psychological flexibility") {
      setPfScore(pfScore + option.points);
    }

    console.log("clicked",option.points)

    option.color = "#000000";
  };

  const onSubmit = () => {
    const totalScore = (erScore + cfScore + smScore + pfScore)/10
    const data = {
      totalScore,
      erScore,
      cfScore,
      smScore,
      pfScore,
    };

    console.log(data)

    axios.post("/api/entry/checks", data)

    setDataSubmited(true)
    
  };

  useEffect(() => {
    axios.get("/api/entry/checks",{
      params:{time:new Date(new Date().getTime() - 86400000).toISOString().split("T")[0]}
    })
    .then((response)=>{
      console.log(response)
      setShowToday(response.data)
    })
  },[user]);

 return  user ? <> 
    <header className="flex justify-between m-[20px_20px_0_20px]">
        <div className={`ml-7 ${anybody.className}`}>
          <span className="text-2xl flex items-center justify-center gap-2">
            Welcome <p className="text-xl text-gray-800">{user?.username}</p>
          </span>
          <p className="text-gray-700 text-sm">{a.format("dddd D MMM YYYY")}</p>
        </div>
        <div className="">
          <UserButton />
        </div>
      </header>

      <main className="flex items-center mt-5">
        <section className="w-3/5 ml-10 flex flex-col gap-6">
          <Banner greeting="Hi" text="Let's get started with your today's test" />

            <div
            className={`shadow-gray-800 shadow-sm rounded-2xl p-4 flex flex-col gap-10 overflow-scroll h-[50vh] ${anybody.className}`}
            style={{ scrollbarWidth: "none" }}
          >
            {que.map(
              ({
                question,
                options,
                id,
                tag,
              }: {
                question: string;
                options: { text: string; points: number; color: string }[];
                id: number;
                tag: string;
              }) => (
                <div key={id} className="flex flex-col gap-4">
                  <span>{question}</span>
                  <span className="flex gap-5">
                    {options.map(
                      (option: {
                        text: string;
                        points: number;
                        color: string;
                      }) => (
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <div
                            onClick={() => handleClick(option,tag)}
                              className="h-8 w-8 rounded-full border-2 inline-block"
                              style={{ borderColor: `${option.color}` }}
                            ></div>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-fit rounded-2xl">
                            <div
                              className="flex justify-between gap-4"
                              
                            >
                              {option.text}
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      )
                    )}
                  </span>
                </div>
              )
            )}
            <button
              className="bg-gradient-to-tr from-blue-500 to-blue-900 w-[8vw] rounded-2xl text-white py-2 hover:text-black"
              onClick={() => onSubmit()}
            >
              Submit
            </button>
          </div>
         
        </section>
        {showToday ? <DataSection data={showToday} day="Yesterday's Data"/> : <div className={`w-[25vw] h-[78vh] pb-10 font-semibold bg-white border-2 rounded-2xl mx-10 ${anybody.className} flex justify-center items-center`}> <p>NO Data Found</p></div>}
      </main> </> : <Loading/>
    
  ;
}
