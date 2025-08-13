"use client";

import React, { useEffect, useState } from "react";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import { PencilLine } from "lucide-react";
import { Merienda } from "next/font/google";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import { strict } from "assert";

type Value = Date | null;

const merienda = Merienda({
  weight: "400",
  subsets: ["latin"],
});

interface Data {
  cognitiveFunction: number;
  emotionalRegulation: number;
  psychologicalFlexibility: number;
  scoialMatric: number;
  totalScore: number;
  journel: string;
  createdAt: string;
  id: number;
}

const Journel = ({selectPage}:{selectPage:string}) => {
  const [value, onChange] = useState<Value>(new Date());
  const [prevJournel, setPrevJournel] = useState<any>(null);
  const [html, setHtml] = useState<string>("");
  const [disable, setDisable] = useState(false);
  const [journelData, setJournelData] = useState<Data[]>();


  // let date = new Date((value?.getTime() ?? 0) + 86400000).toISOString().split("T")[0];
  
  // const prevJournel = journelData && journelData.filter((data) => data.createdAt === date);


  useEffect(() => {
    axios.get("/api/entry").then((response) => {
      setJournelData(response.data);
    });
    let date = new Date((value?.getTime() ?? 0) + 86400000).toISOString().split("T")[0];
  
  setPrevJournel(journelData && journelData.filter((data) => data.createdAt === date))
  }, [value,selectPage]);

  const submitJournel = (html: string) => {
    axios
      .post("/api/entry/journel", {
        body: JSON.stringify(html),
      })
      .then((response) => {
        response.status === 200 ? setDisable(true) : setDisable(false);
      });
  };

  return (
    <div className="m-8  flex flex-col gap-5">
      <section>
        <div className={`${merienda.className} flex gap-2 items-center`}>
          <PencilLine />
          <p className="text-2xl">Daily Journel</p>
        </div>
      </section>

      <section className="flex gap-10">
        {prevJournel && prevJournel.length > 0 ? (
          <>
          <SimpleEditor prevJour={prevJournel[0].journel} date={selectPage} setHtml={setHtml}/>
          </>
          
        ) : (
          <div className="">
            <SimpleEditor
              setHtml={setHtml}
              prevJour=""
              date=""
            />
            <button
              className="absolute z-10 bottom-10 right-100 bg-[#4c4efe] p-2 rounded-2xl"
              disabled={disable}
              onClick={() => submitJournel(html)}
            >
              Submit
            </button>
          </div>
        )}

        
        {/* <button onClick={() => console.log("Text:", editor?.getText().text)}>Log Text</button> */}

        <Calendar
        //@ts-ignore
          onChange={onChange}
          value={value}
          className="bg-[#f5f5f5] rounded-2xl w-[30vw] h-fit p-2"
        />
      </section>
    </div>
  );
};

export default Journel;
