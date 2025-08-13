import React,{useEffect} from 'react'
import { BrainCog, Smile, Users,Dumbbell } from "lucide-react";
import { Anybody } from 'next/font/google';
import axios from 'axios';

const anybody = Anybody({
    weight: ["400", "600"],
    subsets: ["latin"],
})

interface Data {
  cognitiveFunction: number;
  emotionalRegulation: number;
  psychologicalFlexibility: number;
  scoialMatric: number;
  totalScore: number;
}

const DataSection = ({data,day}:{data:Data,day:string}) => {

    const percent = (data.totalScore * 20)
    const rotationPercent = (percent/100) * 565.48
    const finalRoation = 565.48 - rotationPercent

    function getComment(score: number): string {
  if (score >= 5 && score < 6) return "Poor";
  if (score >= 6 && score < 7) return "Decent";
  if (score >= 7 && score < 8) return "Good";
  if (score >= 8 && score <= 9) return "Very Good";
  if (score >= 9 && score <= 10) return "Excellent";

  return "Unknown";
}

function forTScore(score: number): string {
  if (score >= 0 && score < 1) return "Bad";
  if (score >= 1 && score < 2) return "Decent";
  if (score >=2  && score < 3) return "Good";
  if (score >= 3 && score <= 4) return "Very Good";
  if (score >= 4 && score <= 5) return "Excellent";

  return "Unknown";
}


  return (
    <div>
      <section
          className={`w-[25vw] pb-10 font-semibold bg-white border-2 rounded-2xl mx-10 ${anybody.className} flex flex-col gap-8`}
        >
          <div className="text-[#FF8400] text-2xl mt-4 mx-4">
            {day}
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="text-[#8E44AD] bg-[#b4d3ee3a] flex justify-center mx-12 gap-8 py-2 rounded-2xl w-3/4 border-2 border-[#8E44AD]">
              <div className=" ">
                <svg width="50" height="50" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="#e3d8e7"
                    strokeWidth="20"
                  />

                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="#8E44AD"
                    strokeWidth="20"
                    strokeLinecap="round"
                    strokeDasharray="565.48"
                    strokeDashoffset={finalRoation}
                    transform="rotate(-90 100 100)"
                    id="progress-circle"
                  />

                  <text
                    x="100"
                    y="110"
                    textAnchor="middle"
                    fontFamily="Arial"
                    fontSize="50"
                    fill="#333"
                    id="progress-text"
                  >
                    {percent}%
                  </text>
                </svg>
              </div>
              <div className="">
                <p>Total score</p>
                <p className="text-sm">{forTScore(data.totalScore)}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 justify-center items-center">
            <div className="flex justify-center mx-10 items-center gap-8 py-2 rounded-2xl w-[15vw] shadow-gray-800 shadow-sm">
              <span className="bg-[#CED4FF] h-fit p-1 rounded-full">
                <Smile stroke="#3D5CBC" />
              </span>
              <span>
                <p className="text-[#656565] text-[10px]">
                  Emotional Regulation
                </p>
                <p>{data.emotionalRegulation}/10 - {getComment(data.emotionalRegulation)}</p>
              </span>
            </div>
            <div className="flex justify-center mx-10 items-center gap-8 py-2 rounded-2xl w-[15vw] shadow-gray-800 shadow-sm">
              <span className="bg-[#D7FFCE] h-fit p-1 rounded-full">
                <BrainCog stroke="#20B100" />
              </span>
              <span>
                <p className="text-[#656565] text-[10px]">
                  Congnitive Function
                </p>
                <p>{data.cognitiveFunction}/10 - {getComment(data.cognitiveFunction)}</p>
              </span>
            </div>
            <div className="flex justify-center mx-10 items-center gap-8 py-2 rounded-2xl w-[15vw] shadow-gray-800 shadow-sm">
              <span className="bg-[#FAFFCE] h-fit p-1 rounded-full">
                <Users stroke="#7A8700" />
              </span>
              <span>
                <p className="text-[#656565] text-[10px]">
                  Social Matric
                </p>
                <p>{data.scoialMatric}/10 - {getComment(data.scoialMatric)}</p>
              </span>
            </div>
            <div className="flex justify-center mx-10 items-center gap-8 py-2 rounded-2xl w-[15vw] shadow-gray-800 shadow-sm">
              <span className="bg-[#FFE3CE] h-fit p-1 rounded-full">
                <Dumbbell stroke="#834400" />
              </span>
              <span>
                <p className="text-[#656565] text-[10px]">
                  Psychological Flexibility
                </p>
                <p>{data.psychologicalFlexibility}/10 - {getComment(data.psychologicalFlexibility)}</p>
              </span>
            </div>
          </div>
        </section>
    </div>
  )
}

export default DataSection
