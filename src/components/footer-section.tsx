'use client'

import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 p-4 sm:p-5 w-full min-h-[240px] bg-black">
      {/* Contact Info Section */}
      <div className="flex flex-col gap-2 p-2.5 w-full h-auto justify-between items-center md:items-start">
        <button 
          onClick={scrollToTop}
          className="w-[196px] h-auto cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Back to top"
        >
          <Image
            src={getAssetPath("/assets/logos/white-logo-rec (1).png")}
            alt="Genesis Aircraft Parts"
            width={196}
            height={59}
            className="w-full h-auto object-contain"
          />
        </button>

        
        <div className="flex flex-col gap-2 w-full items-center md:items-start">
          <div className="text-sm text-white leading-[1.21]">4944 113th Avenue North</div>
          <div className="text-sm text-white leading-[1.21]">Clearwater, FL 33760 USA</div>
          <div className="text-sm text-white leading-[1.21]">(727) 202-6890</div>
          <div className="text-sm text-white leading-[1.21]">info@genesisaircraftparts.com</div>
          <div className="text-sm font-bold text-white leading-[1.21]">TAC-2000 Certified</div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="flex flex-col gap-2 p-2.5 w-full h-auto items-center md:items-start md:mt-[67px]">
        <div className="text-base font-bold text-[#10BEF2]">Navigation</div>
        <button 
          onClick={scrollToTop}
          className="text-base text-white hover:text-[#10BEF2] transition-colors cursor-pointer"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('about')}
          className="text-base text-white hover:text-[#10BEF2] transition-colors cursor-pointer"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection('services')}
          className="text-base text-white hover:text-[#10BEF2] transition-colors cursor-pointer"
        >
          Products & Services
        </button>
        <button 
          onClick={() => scrollToSection('quote')}
          className="text-base text-white hover:text-[#10BEF2] transition-colors cursor-pointer"
        >
          Get Quote
        </button>
      </div>

      {/* Newsletter Section */}
      <div className="flex flex-col gap-3 p-2.5 w-full h-auto md:col-span-2 lg:col-span-1 items-center md:items-start lg:mt-[67px]">
        <div className="text-base text-white w-full max-w-[290px]">Sign up for our newsletter!</div>
        
        <div className="flex items-center gap-2 w-full max-w-[320px]">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 h-10 px-4 bg-white text-sm text-gray-800 placeholder-[#999999] rounded-lg outline-none"
          />
          <button className="px-4 h-10 bg-[#2D9ACF] text-white text-sm font-medium rounded-lg hover:bg-[#2D9ACF]/90 transition-colors whitespace-nowrap">
            Sign Up
          </button>
        </div>
        
        <div className="text-base text-white">© Genesis Aircraft Parts 2025</div>
        
        <div className="flex items-center gap-2.5">
          <div className="text-base text-white">Created by Menes</div>
          <div className="w-7 h-7">
            <Image
              src={getAssetPath("/assets/logos/Menes_Logo.png")}
              alt="Menes Logo"
              width={30}
              height={30}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
