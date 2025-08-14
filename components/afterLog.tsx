"use client";
import React, { useEffect,Suspense } from "react";
import { useUser } from "@clerk/nextjs";
import dayjs from "dayjs";
import { Anybody } from "next/font/google";
import Banner from "@/components/banner";
import { UserButton } from "@clerk/nextjs";
import axios from "axios"
import Chartjs from "@/components/chart";
import Load from "./load";
import { useState } from "react";
import DataSection from "./dataSection";

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

export default function AfterLogs() {
  const { user } = useUser();
  const a = dayjs();

  const [showToday,setShowToday] = useState<Data>()


  useEffect(() => {
    axios.get("/api/entry/checks",{
      params:{time:new Date().toISOString().split("T")[0]}
    })
    .then((response)=>{

      setShowToday(JSON.parse(JSON.stringify(response.data)))
    })
  },[user]);

  return (
    <>
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
          <Banner greeting="Thank you" text="Here are you results" />

            <div
            className={`shadow-gray-800 shadow-sm rounded-2xl p-4 flex flex-col gap-10 overflow-scroll h-[50vh] ${anybody.className}`}
            style={{ scrollbarWidth: "none" }}
          >
            <Suspense fallback={<Load/>}>
              <Chartjs />
            </Suspense>
            
          </div>
         
        </section>
        { showToday && <Suspense fallback={<Load/>} >
          <DataSection data={showToday} day="Today's Data" />
        </Suspense> }
      </main>
    </>
  );
}
