'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] mt-20 overflow-hidden">
      {/* World Map Background */}
      <div className="absolute inset-0 bg-white">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[2500px] h-[857px] relative -ml-[530px] -mt-1">
            {/* Simplified world map representation */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 2500 857"
              className="text-light opacity-80"
            >
              <g fill="currentColor" stroke="#000" strokeWidth="0.2">
                {/* Simplified continent shapes */}
                <path d="M400 200 L800 150 L900 300 L700 400 L300 350 Z" opacity="0.8" />
                <path d="M1200 180 L1600 160 L1700 350 L1400 450 L1100 380 Z" opacity="0.8" />
                <path d="M1800 250 L2200 230 L2300 450 L2000 550 L1700 480 Z" opacity="0.8" />
                <path d="M500 500 L900 480 L1000 700 L700 750 L400 720 Z" opacity="0.8" />
                <path d="M1300 520 L1700 500 L1800 720 L1500 770 L1200 740 Z" opacity="0.8" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Image Damper */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="bg-dark/70 backdrop-blur-lg border border-primary rounded-2xl p-10 w-[800px] h-[300px] flex flex-col items-center justify-center gap-5">
          <div className="w-[500px] h-[200px] bg-gray-600 rounded flex items-center justify-center">
            <span className="text-white text-lg font-bold">HERO CONTENT PLACEHOLDER</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
