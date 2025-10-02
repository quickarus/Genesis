'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false) // Close mobile menu after navigation
  }

  return (
    <div className="bg-black/10 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-5 max-w-screen-xl mx-auto">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 mx-auto">
          <button 
            onClick={() => scrollToSection('services')}
            className="px-4 py-2 rounded-lg text-white font-medium text-base lg:text-lg hover:bg-white/10 transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="px-4 py-2 rounded-lg text-white font-medium text-base lg:text-lg hover:bg-white/10 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('quote')}
            className="px-4 py-2 rounded-lg bg-[#2D9ACF] text-white font-medium text-base lg:text-lg hover:bg-[#2D9ACF]/90 hover:border hover:border-white transition-all duration-300"
          >
            Get Quote
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 ml-auto"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm md:hidden z-50">
            <nav className="flex flex-col items-center gap-4 py-6">
              <button 
                onClick={() => scrollToSection('services')}
                className="px-4 py-2 rounded-lg text-white font-medium text-lg hover:bg-white/10 transition-colors w-full max-w-xs text-center"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="px-4 py-2 rounded-lg text-white font-medium text-lg hover:bg-white/10 transition-colors w-full max-w-xs text-center"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('quote')}
                className="px-4 py-2 rounded-lg bg-[#2D9ACF] text-white font-medium text-lg hover:bg-[#2D9ACF]/90 hover:border hover:border-white transition-all duration-300 w-full max-w-xs text-center"
              >
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}