"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, TrendingUp, TrendingDown, Lightbulb, ChevronRight, Sparkles } from "lucide-react"

interface Insight {
  onGoodDays: string[]
  onBadDays: string[]
  suggestion: string[]
}


export function AiSuggestion({onGoodDays, onBadDays, suggestion }:{onGoodDays:string[], onBadDays:string[], suggestion:string[]} ) {
  const [selectedInsight, setSelectedInsight] = useState(0)
  const [activeTab, setActiveTab] = useState<"good" | "bad" | "suggestions">("good")
  console.log(onGoodDays,onBadDays,suggestion)

  return (
    <div className="space-y-8">
      {/* AI Header */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-2xl blur-xl"></div>
        
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center">
        <div className="bg-white backdrop-blur-sm rounded-full p-2 border border-white">
          <div className="flex gap-2">
            <Button
              variant={activeTab === "good" ? "default" : "ghost"}
              onClick={() => setActiveTab("good")}
              className={`rounded-full px-6 ${
                activeTab === "good"
                  ? "bg-gradient-to-r from-green-500 to-emerald-400 text-white"
                  : "text-slate-700 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Good Days
            </Button>
            <Button
              variant={activeTab === "bad" ? "default" : "ghost"}
              onClick={() => setActiveTab("bad")}
              className={`rounded-full px-6 ${
                activeTab === "bad"
                  ? "bg-gradient-to-r from-red-500 to-pink-400 text-white"
                  : "text-slate-700 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              <TrendingDown className="w-4 h-4 mr-2" />
              Challenging Days
            </Button>
            <Button
              variant={activeTab === "suggestions" ? "default" : "ghost"}
              onClick={() => setActiveTab("suggestions")}
              className={`rounded-full px-6 ${
                activeTab === "suggestions"
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
                  : "text-slate-700 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              <Lightbulb className="w-4 h-4 mr-2" />
              AI Suggestions
            </Button>
          </div>
        </div>
      </div>

      {/* Content Display */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-2xl blur-2xl"></div>
        <Card className="relative bg-white border-blue-500/20 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              {activeTab === "good" && (
                <>
                  <div className="p-2 bg-gradient-to-br from-green-500/20 to-emerald-400/20 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-black">Positive Patterns</CardTitle>
                    <p className="text-green-700 text-sm">What makes your good days great</p>
                  </div>
                </>
              )}
              {activeTab === "bad" && (
                <>
                  <div className="p-2 bg-gradient-to-br from-red-500/20 to-pink-400/20 rounded-lg">
                    <TrendingDown className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-black">Challenge Patterns</CardTitle>
                    <p className="text-red-700 text-sm">Understanding difficult moments</p>
                  </div>
                </>
              )}
              {activeTab === "suggestions" && (
                <>
                  <div className="p-2 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-lg">
                    <Lightbulb className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-black">AI Recommendations</CardTitle>
                    <p className="text-cyan-700 text-sm">Personalized strategies for growth</p>
                  </div>
                </>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-4 max-h-[48vh] overflow-scroll" style={{ scrollbarWidth: "none" }}>
            {activeTab === "good" &&
           onGoodDays?.length > 0 &&  onGoodDays.map((pattern) => (
                <div className="group">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-400/10 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                    <p >🌑</p>
                    <p className="text-green-700 leading-relaxed flex-1">{pattern}</p>
                    <ChevronRight className="w-5 h-5 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}

            {activeTab === "bad" &&
            onBadDays?.length > 0 && onBadDays.map((pattern) => (
                <div  className="group">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-red-500/10 to-pink-400/10 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                    <p >🌑</p>
                    <p className="text-red-700 leading-relaxed flex-1">{pattern}</p>
                    <ChevronRight className="w-5 h-5 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}

            {activeTab === "suggestions" &&
            suggestion?.length > 0 && suggestion.map((suggestion) => (
                <div  className="group">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-400/10 border border-blue-500/20 hover:border-cyan-400/40 transition-all duration-300">
                    <p >🌑</p>
                    <p className="text-cyan-700 leading-relaxed flex-1">{suggestion}</p>
                    <ChevronRight className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
          </CardContent>
        </Card>
      </div>

      {/* AI Processing Indicator */}

    </div>
  )
}
