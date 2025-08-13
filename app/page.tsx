"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  BrainCircuit,
  MessageCircle,
  BarChart3,
  BookOpen,
  Target,
  Star,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { Italianno,Merienda } from "next/font/google";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'


const italian = Italianno({ weight: "400", subsets: ["latin"] });
const merienda = Merienda({ weight: "400", subsets: ["latin"] });

export default function MentalHealthPlatform() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1A2B45] text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
        <div className="absolute top-20 left-20 w-1 h-1 bg-[#f4906e] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-[#f4906e] rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-1 h-1 bg-[#f4906e] rounded-full animate-pulse"></div>

        {/* Larger stars */}
        <div className="absolute top-32 right-1/4">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="text-[#f4906e] fill-current animate-pulse"
          >
            <path d="M8 0l2.5 5.5L16 8l-5.5 2.5L8 16l-2.5-5.5L0 8l5.5-2.5L8 0z" />
          </svg>
        </div>
        <div className="absolute bottom-32 left-16">
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            className="text-[#f4906e] fill-current animate-pulse delay-100"
          >
            <path d="M8 0l2.5 5.5L16 8l-5.5 2.5L8 16l-2.5-5.5L0 8l5.5-2.5L8 0z" />
          </svg>
        </div>

        {/* Planets */}
        <div className="absolute top-16 right-16 w-12 h-12 bg-orange-500 rounded-full opacity-80"></div>
        <div className="absolute bottom-20 left-8 w-20 h-20 bg-gradient-to-br from-[#f4906e] to-orange-600 rounded-full opacity-60"></div>
        <div className="absolute top-1/2 left-4 w-8 h-8 bg-blue-400 rounded-full opacity-70"></div>

        {/* Curved lines */}
        <svg
          className="absolute top-1/4 right-1/3 opacity-30"
          width="200"
          height="100"
        >
          <path
            d="M0,50 Q50,0 100,50 T200,50"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
        <svg
          className="absolute bottom-1/3 left-1/4 opacity-30"
          width="150"
          height="80"
        >
          <path
            d="M0,40 Q75,0 150,40"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-50  bg-[#1A2B45]/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <BrainCircuit className="w-5 h-5 text-white" />
              </div>
              <span className={`text-xl font-bold text-white ${merienda.className}`}>MindMaster</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-300 hover:text-[#f4906e] transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-300 hover:text-[#f4906e] transition-colors"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-gray-300 hover:text-[#f4906e] transition-colors"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-gray-300 hover:text-[#f4906e] transition-colors"
              >
                Reviews
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <SignedIn />
              <SignInButton>
               <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Sign In
              </Button> 
              </SignInButton>
              <SignUpButton>
               <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Sign Up
              </Button> 
              </SignUpButton>
              
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Where awareness begins, <br />
              <span className="text-[#f4906e]">control follows.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Your thoughts and emotions aren't enemies — they're signals.
              <br />
              We help you observe, understand, and guide your mind toward peace
              and clarity.
            </p>

            <div className="flex flex-col justify-center items-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 w-fit text-lg px-8 py-4"
              >
                Start Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-sm text-gray-400">
                It's Free
              </p>
            </div>
          </div>
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 320" className="block w-full h-auto">
            <path
              fill="#ffffff"
              d="M0,224L80,192C160,160,320,96,480,101.3C640,107,800,181,960,213.3C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              The Modern Mind is{" "}
              <span className="text-red-500">Overwhelmed</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Anxiety, burnout, racing thoughts — we've normalized what's not
              normal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 mx-30 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-bold">📱</span>
                </div>
                <p className="text-lg text-gray-700">
                  You check your phone 100+ times a day.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-bold">❓</span>
                </div>
                <p className="text-lg text-gray-700">
                  You don't know why you feel off — just that you do.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-bold">🌪️</span>
                </div>
                <p className="text-lg text-gray-700">
                  You overthink everything, but still feel out of control.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-bold">⚡</span>
                </div>
                <p className="text-lg text-gray-700">
                  You're functioning, but not thriving.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-16 h-16 bg-yellow-300 rounded-full animate-ping"></div>
                  <div className="absolute top-12 right-8 w-12 h-12 bg-orange-500 rounded-full animate-ping delay-500"></div>
                  <div className="absolute bottom-8 left-12 w-20 h-20 bg-red-700 rounded-full animate-ping delay-1000"></div>
                </div>
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Chaotic Mind
                  </h3>
                  <p className="text-gray-600">
                    Scattered thoughts, constant worry, no clear direction
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-300 rounded-full animate-pulse"></div>
                </div>
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Centered Mind
                  </h3>
                  <p className="text-gray-600">
                    Clear thoughts, emotional balance, purposeful action
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insight Section with Curve */}
      <section className="relative h-180 bg-[#fdeccd] text-white py-20">
        {/* Curved Top */}
        <div className="absolute top-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="rotate-180" viewBox="0 0 1440 320">
  <path fill="#ffffff" fill-opacity="1" d="M0,224L34.3,218.7C68.6,213,137,203,206,218.7C274.3,235,343,277,411,282.7C480,288,549,256,617,240C685.7,224,754,224,823,208C891.4,192,960,160,1029,144C1097.1,128,1166,128,1234,154.7C1302.9,181,1371,235,1406,261.3L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
</svg>
        </div>

        <div className=" px-4 text-center relative top-20 z-10 grid grid-cols-2 items-center mx-38 ">
          <div className="mask"></div>
          <div className="text-[#f4906e]">
           <p className={` ${italian.className} text-4xl`}>
            "The greatest warrior is not the one who conquers others, but the one who conquers his mind — and refuses to be led by emotion"
          </p>
          <p className="">~ Lord Krishna</p>
          </div>
          
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="rotate-180" viewBox="0 0 1440 320">
          <path fill="#ffffff" fill-opacity="1" d="M0,288L34.3,261.3C68.6,235,137,181,206,181.3C274.3,181,343,235,411,240C480,245,549,203,617,176C685.7,149,754,139,823,154.7C891.4,171,960,213,1029,197.3C1097.1,181,1166,107,1234,85.3C1302.9,64,1371,96,1406,112L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
          </svg>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Your Personal Mental Health{" "}
              <span className="text-orange-500">Copilot</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We built a science-backed platform to help you track your
              thoughts, assess your emotions, and regain control — one journal,
              check-in, and insight at a time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-white shadow-md">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  📊 Daily Mood & Mental Check-ins
                </h3>
                <p className="text-gray-600">
                  Track your emotional state and mental clarity with quick,
                  science-based assessments.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-white shadow-md">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  📖 AI-Enhanced Thought Journal
                </h3>
                <p className="text-gray-600">
                  Write freely while our AI helps identify patterns and provides
                  gentle insights.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-white shadow-md">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BrainCircuit className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  🧠 Smart Insights & Emotional Patterns
                </h3>
                <p className="text-gray-600">
                  Discover your triggers, strengths, and growth opportunities
                  through data-driven insights.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-white shadow-md">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  💬 Private AI Copilot Chat
                </h3>
                <p className="text-gray-600">
                  Get personalized support and coping strategies through
                  confidential AI conversations.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-white shadow-md">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  🎯 Custom Habits & Focus Tools
                </h3>
                <p className="text-gray-600">
                  Build mental wellness habits with personalized reminders and
                  progress tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-white shadow-md">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  📈 Progress Tracking
                </h3>
                <p className="text-gray-600">
                  Visualize your mental health journey with meaningful metrics
                  and milestones.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-4"
            >
              Start Tracking Your Mind — For Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works with Curve */}
      <section
        id="how-it-works"
        className="relative h-220 bg-[#1A2B45] text-white py-20"
      >
        {/* Curved Top */}
        <div className="absolute top-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 320"
            className="block w-full h-auto rotate-180"
          >
            <path
              fill="#ffffff"
              d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        <div className="mx-auto px-4 relative z-10 top-40">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-300">
              Three simple steps to mental clarity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4">Check-in Daily</h3>
              <p className="text-gray-300">
                Track mood, energy, thoughts with quick, personalized
                assessments.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4">Reflect Weekly</h3>
              <p className="text-gray-300">
                Our AI summarizes your emotional patterns and highlights key
                insights.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4">Take Control</h3>
              <p className="text-gray-300">
                Get coping tools and mental clarity to navigate life with
                confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 320" className="block w-full h-auto">
            <path
              fill="#ffffff"
              d="M0,224L80,192C160,160,320,96,480,101.3C640,107,800,181,960,213.3C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* Features Comparison with Curve */}
      <section className="relative bg-white text-blue-950  py-20">

        <div className="container mx-auto px-4 relative z-10 pt-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
              More than tracking — we help you{" "}
              <span className="text-[#f65e2c]">transform</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#f4906e] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Fully Private
                    </h3>
                    <p className="text-gray-700">
                      End-to-end encrypted journals and data
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#f4906e] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Designed with Psychology
                    </h3>
                    <p className="text-gray-700">
                      Based on CBT, mindfulness, and behavioral science
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#f4906e] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      AI Reflections
                    </h3>
                    <p className="text-gray-700">
                      Not just raw data, but actionable insights
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#f4906e] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Flexible</h3>
                    <p className="text-gray-700">
                      Use it daily or weekly — it adapts to you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative  bg-[#1A2B45] h-120 text-white py-20">
        {/* Curved Top */}
        <div className="absolute top-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 320"
            className="block w-full h-auto rotate-180"
          >
            <path
              fill="#ffffff"
              d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        <div className="relative flex flex-col items-center  z-10 top-45">
          <div className="flex w-full justify-evenly items-center">
           <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-white" />
                </div>
                <span className={`text-xl font-bold ${merienda.className}`}>MindMaster</span>
              </div>
              <p className="text-gray-400">
                Your personal mental health copilot for a clearer, calmer mind.
              </p>
            </div>
            <div className="">
              <ul className="flex gap-5 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            </div>
            <div className="border-t border-[#1A2B45] mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 MindMaster. All rights reserved. Your mental health
              journey starts here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
