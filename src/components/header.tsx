'use client'

import { useState } from 'react'
import Image from 'next/image'

interface NavigationProps {
  isActive?: boolean
  children: React.ReactNode
  onClick?: () => void
}

function NavigationButton({ isActive = false, children, onClick }: NavigationProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-white font-medium transition-colors ${
        isActive 
          ? 'bg-primary text-white' 
          : 'bg-transparent hover:bg-gray-700'
      }`}
    >
      {children}
    </button>
  )
}

export default function Header() {
  const [activeNav, setActiveNav] = useState('Services')

  const handleNavClick = (navItem: string) => {
    setActiveNav(navItem)
  }

  return (
    <header className="w-full h-20 bg-black/10 backdrop-blur-sm fixed top-0 z-50">
      <div className="flex justify-between items-center px-5 py-5 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="w-[167px] h-[50px] bg-gray-300 rounded flex items-center justify-center">
            <span className="text-black font-bold text-sm">GENESIS LOGO</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-5">
          <NavigationButton
            isActive={activeNav === 'Services'}
            onClick={() => handleNavClick('Services')}
          >
            Services
          </NavigationButton>
          <NavigationButton
            isActive={activeNav === 'About'}
            onClick={() => handleNavClick('About')}
          >
            About
          </NavigationButton>
          <NavigationButton
            isActive={activeNav === 'Get Quote'}
            onClick={() => handleNavClick('Get Quote')}
          >
            Get Quote
          </NavigationButton>
        </nav>
      </div>
    </header>
  )
}
