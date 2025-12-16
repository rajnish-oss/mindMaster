"use client";

import React, { useEffect, useState } from "react";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import { PencilLine } from "lucide-react";
import { Merienda } from "next/font/google";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

// Extend dayjs with plugins if needed
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

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

const Journel = ({ selectPage, user }: { selectPage: string; user: any }) => {
  // Fix: Initialize with Date, not Dayjs object
  const [value, onChange] = useState<Value>(new Date());
  const [prevJournel, setPrevJournel] = useState<any>(null);
  const [html, setHtml] = useState<string>("");
  const [disable, setDisable] = useState(false);
  const [journelData, setJournelData] = useState<Data[]>();
  const [submissionTrigger, setSubmissionTrigger] = useState(0);

  // Fix: Convert value to Dayjs object for comparison
  const isToday = value ? dayjs(value).isSame(dayjs(), "day") : false;

  useEffect(() => {
    axios.get("/api/entry").then((response) => {
      const fetchedData = response.data;
      setJournelData(fetchedData);

      // Fix: Handle null value case
      let date = value ? dayjs(value).format("YYYY-MM-DD") : "";

      const selectedDateJournel = fetchedData.filter(
        (data: Data) => data.createdAt === date
      );

      setPrevJournel(selectedDateJournel);

      // Check for disabling the submit button
      if (!isToday || selectedDateJournel.length > 0) {
        setDisable(true);
      } else {
        setDisable(false);
      }
    });
  }, [value, selectPage, user, submissionTrigger]);

  const submitJournel = (html: string) => {
    setDisable(true);
    console.log(html)
    axios
      .post("/api/entry/journel", {
        body: JSON.stringify(html),
      })
      .then((response) => {
        if (response.status === 200) {
          setSubmissionTrigger((prev) => prev + 1);
        } else {
          setDisable(false);
        }
      })
      .catch((error) => {
        console.error("Submission failed:", error);
        setDisable(false);
      });
  };

  return (
    <div className="m-8 flex flex-col gap-5">
      <section>
        <div className={`${merienda.className} flex gap-2 items-center`}>
          <PencilLine />
          <p className="text-2xl">Daily Journel</p>
        </div>
      </section>

      <section className="flex gap-10">
        {prevJournel?.length > 0 ? (
          <>
            <SimpleEditor
              prevJour={prevJournel[0].journel}
              date={selectPage}
              setHtml={setHtml}
            />

            <button
              className={`absolute z-10 bottom-10 right-[28vw] bg-[#4c4efe] p-2 rounded-2xl 
               `}
              onClick={() => submitJournel(html)}
              
            >
              Submit
            </button>
          </>
        ) : (
          <div className="">
            <SimpleEditor
              setHtml={setHtml}
              prevJour=""
              date=""
            />

            <button
              className={`absolute z-10 bottom-10 right-[28vw] bg-[#4c4efe] p-2 rounded-2xl 
               `}
              onClick={() => submitJournel(html)}
              
            >
              Submit
            </button>
          </div>
        )}

        <Calendar
          onChange={onChange}
          value={value}
          className="bg-[#f5f5f5] rounded-2xl w-[30vw] h-fit p-2"
        />
      </section>
    </div>
  );
};

export default Journel;