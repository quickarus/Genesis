'use client'

import Image from 'next/image'

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-black/10 backdrop-blur-sm">
      <div className="flex items-center justify-center px-5 py-5 max-w-screen-xl mx-auto">
        <nav className="flex items-center gap-5">
          <button 
            onClick={() => scrollToSection('services')}
            className="px-4 py-2 rounded-lg text-white font-medium text-lg hover:bg-white/10 transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="px-4 py-2 rounded-lg text-white font-medium text-lg hover:bg-white/10 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('quote')}
            className="px-4 py-2 rounded-lg bg-[#2D9ACF] text-white font-medium text-lg hover:bg-[#2D9ACF]/90 hover:border hover:border-white transition-all duration-300"
          >
            Get Quote
          </button>
        </nav>
      </div>
    </div>
  )
}