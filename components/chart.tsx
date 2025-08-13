"use client"
import React, { useEffect } from 'react'
import dynamic from "next/dynamic";
import { useAuth } from '@clerk/nextjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Line),
  { ssr: false }
);

interface Data {
  cognitiveFunction: number;
  emotionalRegulation: number;
  psychologicalFlexibility: number;
  scoialMatric: number;
  totalScore: number;
  createdAt: string
}

const Chartjs = () => {
  const { userId } = useAuth()
  const [data, setData] = React.useState<Data[]>([]);

  const date = data.map((item) => item.createdAt)

  useEffect(() => {
    axios.get('/api/entry').then((response) => {
      setData(response.data)
    })
  }, [userId])

  return (
    <div>
      <LineChart
        data={{
          labels: date,
          datasets: [
            {
              label: "Mental Health Score",
              data: data.map((item) => ({
                x: item.createdAt,
                y: item.totalScore,
                extra: {
                  emotionalRegulation: item.emotionalRegulation,
                  cognitiveFunction: item.cognitiveFunction,
                  psychologicalFlexibility: item.psychologicalFlexibility,
                  scoialMatric: item.scoialMatric
                }
              })),
              backgroundColor: "#5FC3D6",
              borderColor: "#5FC3D6",
              borderWidth: 1,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: false,
              min: 0,
              max: 10
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context:any) {
                  const extra = context.raw.extra;
                  return [
                    `Total Score: ${context.parsed.y}`,
                    `Emotional Regulation: ${extra.emotionalRegulation}`,
                    `Cognitive Function: ${extra.cognitiveFunction}`,
                    `Psychological Flexibility: ${extra.psychologicalFlexibility}`,
                    `Social Metric: ${extra.scoialMatric}`
                  ];
                }
              }
            }
          }
        }}
        height={120}
      />
    </div>
  )
}

export default Chartjs
