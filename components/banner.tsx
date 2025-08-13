"use client"
import { Sparkle, Star } from 'lucide-react'
import {useUser} from '@clerk/nextjs'

export default function Banner({greeting,text}:{greeting:string,text:string}) {
  const {user} = useUser()

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#3D5CBC] p-6 text-white shadow-gray-800 shadow-sm">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Decorative dots - various sizes and positions */}
        <div className="absolute top-4 right-20 h-2 w-2 rounded-full bg-white/30"></div>
        <div className="absolute top-8 right-32 h-1.5 w-1.5 rounded-full bg-white/40"></div>
        <div className="absolute bottom-6 right-16 h-1 w-1 rounded-full bg-white/30"></div>
        <div className="absolute top-12 left-32 h-1.5 w-1.5 rounded-full bg-white/20"></div>
        <div className="absolute bottom-8 left-20 h-2 w-2 rounded-full bg-white/25"></div>
        <div className="absolute top-16 right-8 h-1 w-1 rounded-full bg-white/35"></div>
        <div className="absolute top-20 left-16 h-2.5 w-2.5 rounded-full bg-white/20"></div>
        <div className="absolute bottom-12 right-28 h-1.5 w-1.5 rounded-full bg-white/30"></div>
        <div className="absolute top-6 left-8 h-1 w-1 rounded-full bg-white/40"></div>
        <div className="absolute bottom-4 left-40 h-2 w-2 rounded-full bg-white/25"></div>
        <div className="absolute top-24 right-12 h-1 w-1 rounded-full bg-white/35"></div>
        <div className="absolute bottom-16 left-8 h-1.5 w-1.5 rounded-full bg-white/30"></div>
        <div className="absolute top-2 right-40 h-1 w-1 rounded-full bg-white/25"></div>
        <div className="absolute bottom-2 right-6 h-2 w-2 rounded-full bg-white/20"></div>
        <div className="absolute top-28 left-24 h-1 w-1 rounded-full bg-white/40"></div>
        
        {/* Decorative stars */}
        <Star className="absolute top-6 right-24 h-3 w-3 text-white/25" />
        <Star className="absolute top-14 left-12 h-2 w-2 text-white/30" />
        <Star className="absolute bottom-10 right-20 h-2.5 w-2.5 text-white/20" />
        <Star className="absolute top-22 right-36 h-2 w-2 text-white/35" />
        <Star className="absolute bottom-14 left-28 h-3 w-3 text-white/25" />
        <Star className="absolute top-10 left-36 h-2 w-2 text-white/30" />
        <Star className="absolute bottom-6 left-12 h-2.5 w-2.5 text-white/20" />
        <Star className="absolute top-18 right-14 h-2 w-2 text-white/40" />
        <Star className="absolute bottom-20 right-32 h-3 w-3 text-white/15" />
        <Star className="absolute top-4 left-28 h-2 w-2 text-white/35" />

        {/* More Lucide React stars */}
        <Star className="absolute top-3 right-29 h-2.5 w-2.5 text-white/30" />
        <Star className="absolute top-26 left-6 h-2 w-2 text-white/25" />
        <Star className="absolute bottom-3 right-24 h-3 w-3 text-white/20" />
        <Star className="absolute top-8 left-20 h-2.5 w-2.5 text-white/35" />
        <Star className="absolute bottom-18 left-16 h-2 w-2 text-white/30" />
        <Star className="absolute top-15 right-6 h-2.5 w-2.5 text-white/25" />
        <Star className="absolute bottom-8 right-10 h-2 w-2 text-white/40" />
        <Star className="absolute top-20 left-32 h-3 w-3 text-white/20" />

        {/* Orange/Yellow stars for color variety */}
        <Star className="absolute top-9 right-22 h-2.5 w-2.5 text-orange-300/40" />
        <Star className="absolute top-17 left-8 h-2 w-2 text-orange-400/35" />
        <Star className="absolute bottom-9 right-14 h-3 w-3 text-orange-300/30" />
        <Star className="absolute top-25 left-20 h-2.5 w-2.5 text-yellow-300/40" />
        <Star className="absolute bottom-17 right-26 h-2 w-2 text-orange-400/30" />
        <Star className="absolute top-11 left-26 h-2.5 w-2.5 text-orange-300/35" />

        {/* Custom SVG stars for variety */}
        <svg className="absolute top-5 left-14 h-3 w-3 text-white/30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <svg className="absolute top-12 right-28 h-2.5 w-2.5 text-white/25" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <svg className="absolute bottom-12 left-6 h-2 w-2 text-white/35" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <svg className="absolute top-24 right-4 h-3 w-3 text-white/20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <svg className="absolute bottom-5 left-24 h-2.5 w-2.5 text-white/30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>

        {/* Orange custom SVG stars */}
        <svg className="absolute top-19 right-10 h-2.5 w-2.5 text-orange-300/35" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <svg className="absolute bottom-7 left-18 h-2 w-2 text-yellow-400/40" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <svg className="absolute top-13 left-30 h-3 w-3 text-orange-400/25" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>

        {/* Small sparkle-style stars */}
        <svg className="absolute top-7 right-18 h-2 w-2 text-white/40" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l1.5 4.5L18 6l-4.5 1.5L12 12l-1.5-4.5L6 6l4.5-1.5L12 0z"/>
        </svg>
        <svg className="absolute top-16 left-4 h-2 w-2 text-white/35" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l1.5 4.5L18 6l-4.5 1.5L12 12l-1.5-4.5L6 6l4.5-1.5L12 0z"/>
        </svg>
        <svg className="absolute bottom-15 right-8 h-2 w-2 text-white/30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l1.5 4.5L18 6l-4.5 1.5L12 12l-1.5-4.5L6 6l4.5-1.5L12 0z"/>
        </svg>
        <svg className="absolute top-22 left-10 h-2 w-2 text-white/25" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l1.5 4.5L18 6l-4.5 1.5L12 12l-1.5-4.5L6 6l4.5-1.5L12 0z"/>
        </svg>
        <svg className="absolute top-6 right-30 h-2 w-2 text-orange-300/45" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l1.5 4.5L18 6l-4.5 1.5L12 12l-1.5-4.5L6 6l4.5-1.5L12 0z"/>
        </svg>
        <svg className="absolute bottom-11 left-14 h-2 w-2 text-yellow-300/35" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l1.5 4.5L18 6l-4.5 1.5L12 12l-1.5-4.5L6 6l4.5-1.5L12 0z"/>
        </svg>

        {/* Disfigured trapezium */}
        <svg className="absolute top-5 right-[-6rem]  h-50 w-100 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 8l6-2 8 1 2 4-3 6-7 1-5-3z"/>
        </svg>
      </div>
      
      <div className="relative flex items-center justify-between m-[0_20px_0_20px] ">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 text-[#F59848]">
            <h1 className="text-2xl font-bold">{greeting}, {user?.username}</h1>
            <Sparkle />
          </div>
          <p className="text-lg text-white/90 max-w-xs">
            {text}
          </p>
        </div>
        
        <div className="flex-shrink-0">
          <img
            src="/DC.png"
            alt="Friendly doctor character with glasses and stethoscope"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}
