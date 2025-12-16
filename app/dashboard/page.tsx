"use client";

import React,{useEffect,Suspense} from 'react';
import { BrainCircuit,ChartLine,House, NotebookPen } from 'lucide-react'
import { Merienda } from 'next/font/google'
import DailyLogs from '@/components/dailyLogs';
import Journel from '@/components/journel';
import Insight from '@/components/insight';
import axios from 'axios';
import { useUser } from '@clerk/nextjs'
import AfterLogs from '@/components/afterLog';
import Loading from '@/components/loading';
import dayjs from 'dayjs';

const merienda = Merienda({ weight: "400", subsets: ["latin"] });


const page = () => {

  const {user} =  useUser()

    const [selectedPage, setSelectedPage] = React.useState<string>("Home");
    const [showToday,setShowToday] = React.useState<boolean>(false)
    const [dataSubmited,setDataSubmited] = React.useState<boolean>(false)
  
    const handlePageChange = (page: string) => {
      setSelectedPage(page);
    };
  
    useEffect(()=>{
      if(selectedPage == "Home"){
        document.getElementById("home")?.classList.add("bg-white/50")
        document.getElementById("journel")?.classList.remove("bg-white/50")
        document.getElementById("insight")?.classList.remove("bg-white/50")
        
      }else if(selectedPage == "Journel"){
        document.getElementById("journel")?.classList.add("bg-white/50")
        document.getElementById("home")?.classList.remove("bg-white/50")
        document.getElementById("insight")?.classList.remove("bg-white/50")
        
      }else if(selectedPage == "Insight"){
        document.getElementById("insight")?.classList.add("bg-white/50")
        document.getElementById("journel")?.classList.remove("bg-white/50")
        document.getElementById("home")?.classList.remove("bg-white/50")
        
     }
    })

    useEffect(() => {
    axios.get("/api/entry/checks",{
      params: {time: dayjs().format("YYYY-MM-DD")}
    })
    .then((response)=>{
      response.data ? setShowToday(true) : setShowToday(false)
    })
  },[user,showToday]);

  return (
    <div className="h-[95vh] flex">

      <div className='h-full w-[15vw] bg-[#3D5CBC] rounded-[20px_0_0_20px] flex flex-col justify-start items-center m-[15px_0_15px_20px] gap-24 '>
            <div className="flex flex-col items-center mt-5">
              <span className='bg-[#FD5D00] p-2 rounded-xl text-white' > <BrainCircuit /> </span>
              <span className={`${merienda.className} text-white`}>MindMaster</span>
            </div>
            <div id='home' className="p-4 rounded-2xl text-white " onClick={()=>handlePageChange("Home")}>
              <House size={30} />
            </div>
            <div id='journel' className="p-4  rounded-2xl text-white " onClick={()=>handlePageChange("Journel")}>
              <NotebookPen size={30} />
            </div>
            <div id='insight' className="p-4  rounded-2xl text-white " onClick={()=>handlePageChange("Insight")}>
              <ChartLine size={30} />
            </div>
      </div>

      <div className="border-[2px_0_2px_8px] m-[4px_0_0_4px] rounded-[40px_0_0_40px] border-[#C7C7C7] bg-[#F1F4FF] h-[98vh] w-[84vw] left-[15vw] absolute">
        {
        selectedPage === "Home" ? showToday || dataSubmited ?
        <Suspense fallback={<Loading/>} >
          <AfterLogs />
        </Suspense>
          : <Suspense fallback={<Loading/>} >
            <DailyLogs setDataSubmited={setDataSubmited} />
          </Suspense> 
           : selectedPage === "Journel" ? 
           <Suspense fallback={<Loading/>} >
            <Journel selectPage={selectedPage} user={user} />
          </Suspense>
            :<Suspense fallback={<Loading/>} >
            <Insight selectPage={selectedPage} />
          </Suspense>
            
      }
      </div>
    </div>
  );
};

export default page;
