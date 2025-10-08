'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate parallax offset - move in opposite direction with multiplier
  const parallaxOffset = scrollY * 0.5

  return (
    <section className="relative w-full h-[80vh] min-h-[500px] sm:min-h-[600px] flex items-center justify-center bg-black overflow-hidden">
      {/* World Map Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div 
          className="absolute top-[50px] sm:top-[100px] left-[-400px] sm:left-[-300px] w-[2000px] sm:w-[2500px] h-[600px] sm:h-[857px]"
          style={{
            transform: `translateY(-${parallaxOffset}px)`
          }}
        >
          <Image
            src={getAssetPath("/assets/images/world.svg")}
            alt="World Map"
            width={2500}
            height={857}
            className="w-full h-full object-cover opacity-90"
            priority
          />
        </div>
      </div>
      
      {/* Image Damper Overlay */}
      <div className="absolute inset-0 bg-black/75 z-[1]" />
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-3 sm:gap-5 p-4 sm:p-6 w-full max-w-[90vw] sm:max-w-[800px] h-[250px] sm:h-[300px] bg-[#444444]/70 backdrop-blur-[10px] border border-[#2D9ACF] rounded-[15px] mx-4">
        <div className="w-full max-w-[400px] sm:max-w-[500px] h-[150px] sm:h-[200px] flex items-center justify-center">
          <Image
            src={getAssetPath("/assets/logos/white-logo-rec (1).png")}
            alt="Genesis Aircraft Parts"
            width={400}
            height={120}
            className="object-contain max-w-full max-h-full"
            priority
          />
        </div>
      </div>
    </section>
  )
}