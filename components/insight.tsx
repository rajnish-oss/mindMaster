import React, { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import HeatMap from "@uiw/react-heat-map";
import { Merienda } from "next/font/google";
import axios from "axios";
import { useUser } from "@clerk/nextjs"
import Tooltip from '@uiw/react-tooltip';
import { AiSuggestion } from "./aiSuggestion";
import Load from "./load";

const merienda = Merienda({ weight: "400", subsets: ["latin"] });

const value = [
  { date: "2016/01/11", count: 52 },
  { date: "2016/04/12", count: 2 },
  { date: "2016/05/01", count: 17 },
  { date: "2016/05/02", count: 65 },
  { date: "2016/05/03", count: 27 },
  { date: "2016/05/04", count: 11 },
  { date: "2016/05/08", count: 32 },
];

interface Data {
  cognitiveFunction: number;
  emotionalRegulation: number;
  psychologicalFlexibility: number;
  scoialMatric: number;
  totalScore: number;
  createdAt: string;
  id: number;
}

interface Insight {
  onGoodDays: string[]
  onBadDays: string[]
  suggestion: string[]
}

const Insight = ({selectPage}:{selectPage:string}) => {
  const [data,setData] = useState<Data[]>()
  const [insight,setInsight] = useState<Insight>()
  const {user} = useUser()

  const value = data && data.map((data) => ({ date: data.createdAt, count: data.totalScore }));
  console.log(value);

  useEffect(()=>{
  axios.get("/api/entry/").then((response) => {
    setData(response.data);
  });
  axios.get("/api/insight").then((response) => {
    setInsight(response.data[0]);
    console.log("in",(response.data[0]))
  });

},[user]);


  return (
    <div className="m-8 flex flex-col ">
      <section className={`ml-8 flex gap-2 items-center text-2xl ${merienda.className}`}>
        <Sparkles />
        <p>Insight</p>
      </section>
      {/* <section className="h-[30vh]">
        <HeatMap
          value={value}
          rectSize={20}
          width={1200}
          style={{ color: "#3f4343" }}
          startDate={new Date("2025/01/01")}
          panelColors={{
        0: '#EBEDF1',
        1: '#621a1a',
        2: '#9a2121',
        3: '#C6E48A',
        4: '#219A3B',
        5: '#1A6226'
      }}
          scale="0-5"
          rectRender={(props, data) => {
        // if (!data.count) return <rect {...props} />;
        return (
          <Tooltip placement="bottom" content={`Total Score: ${data.count || 0}`}>
            <rect {...props} />
          </Tooltip>
        );
      }}
        />
      </section> */}
      <section>
       { insight ? <AiSuggestion onGoodDays={insight.onGoodDays} onBadDays={insight.onBadDays} suggestion={insight.suggestion} /> : <Load/> }
      </section>
    </div>
  );
};

export default Insight;
