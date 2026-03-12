'use client'

import { useState } from 'react'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'

export default function FooterSection() {
  const [showCertificate, setShowCertificate] = useState(false)

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
    <footer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 p-4 sm:p-5 w-full min-h-[240px] bg-black">
      {/* Contact Info Section */}
      <div className="flex flex-col gap-2 p-2.5 w-full h-auto justify-between items-center md:items-start">
        <button 
          onClick={scrollToTop}
          className="h-auto cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Back to top"
        >
          <img
            src={getAssetPath("/assets/logos/white-logo-rec (1).png")}
            alt="Genesis Aircraft Parts"
            style={{ width: '280px', height: 'auto' }}
          />
        </button>

        
        <div className="flex flex-col gap-2 w-full items-center md:items-start">
          <div className="text-sm text-white leading-[1.21]">4944 113th Avenue North</div>
          <div className="text-sm text-white leading-[1.21]">Clearwater, FL 33760 USA</div>
          <div className="text-sm text-white leading-[1.21]">(727) 202-6890</div>
          <div className="text-sm text-white leading-[1.21]">info@genesisaircraftparts.com</div>
          <button
            onClick={() => setShowCertificate(true)}
            className="text-sm font-bold text-white leading-[1.21] hover:text-[#10BEF2] transition-colors cursor-pointer underline"
          >
            ISO-9001 Certified
          </button>
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

      {/* Copyright Section */}
      <div className="flex flex-col gap-3 p-2.5 w-full h-auto items-center md:items-start md:mt-[67px]">
        <div className="text-base text-white">© Genesis Aircraft Parts 2025</div>
        
        <a href="https://quickarus.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <span className="text-base text-white underline">Created by Menes</span>
          <div className="w-7 h-7">
            <Image
              src={getAssetPath("/assets/logos/Menes_Logo.png")}
              alt="Menes Logo"
              width={30}
              height={30}
              className="w-full h-full object-contain"
            />
          </div>
        </a>
      </div>

      {/* Certificate Modal/Overlay */}
      {showCertificate && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setShowCertificate(false)}
        >
          <div 
            className="relative w-full max-w-5xl h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
            <iframe
              src={getAssetPath("/assets/images/GAP-2024-ISO-9001-CERTIFICATE OF ACCREDIDATION-.pdf")}
              className="w-full h-full"
              title="ISO-9001 Certificate"
            />
          </div>
        </div>
      )}
    </footer>
  )
}
