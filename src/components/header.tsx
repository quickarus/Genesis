'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show logo when scrolled past hero section (roughly 80vh)
      const heroHeight = window.innerHeight * 0.8
      setShowLogo(window.scrollY > heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false) // Close mobile menu after navigation
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="bg-black/10 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-5 max-w-screen-xl mx-auto">
        {/* Logo - appears when scrolled */}
        <button
          onClick={scrollToTop}
          className={`transition-opacity duration-300 ${showLogo ? 'opacity-100' : 'opacity-0 pointer-events-none'} flex-shrink-0 cursor-pointer hover:opacity-80 transition-all`}
          aria-label="Back to top"
        >
          <Image
            src={getAssetPath("/assets/logos/white-logo-rec (1).png")}
            alt="Genesis Aircraft Parts"
            width={150}
            height={45}
            className="h-8 sm:h-10 w-auto object-contain"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 flex-1 justify-center">
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

        {/* Spacer to balance layout when logo is visible */}
        <div className={`transition-opacity duration-300 ${showLogo ? 'opacity-100' : 'opacity-0 pointer-events-none'} flex-shrink-0 w-[150px] hidden md:block`} />

        {/* Spacer for mobile to balance layout */}
        <div className="md:hidden flex-1" />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
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