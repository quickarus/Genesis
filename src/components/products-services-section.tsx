'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { getAssetPath } from '@/lib/utils'

export default function ProductsServicesSection() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id)
  }

  const services = [
    {
      icon: getAssetPath("/icons/apu-fleet.svg"),
      title: "Purchasing",
      id: "purchasing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: getAssetPath("/icons/supply-chain.svg"), 
      title: "Leases",
      id: "leases",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: getAssetPath("/icons/component-sales.svg"),
      title: "Component Sales", 
      id: "component-sales",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: getAssetPath("/icons/inventory.svg"),
      title: "Supply Chain Management",
      id: "supply-chain",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: getAssetPath("/icons/exchanges.svg"),
      title: "Exchanges",
      id: "exchanges",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: getAssetPath("/icons/leasing.svg"),
      title: "APU Sales",
      id: "apu-sales",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: getAssetPath("/icons/repair.svg"),
      title: "Repair Management",
      id: "repair-management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: getAssetPath("/icons/consulting.svg"),
      title: "APU Fleet Management",
      id: "apu-fleet",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: getAssetPath("/icons/consignment.svg"),
      title: "Consulting",
      id: "consulting",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]

  return (
    <section 
      id="services" 
      className="relative flex flex-col items-center justify-center gap-6 sm:gap-10 px-4 sm:px-8 lg:px-15 py-12 sm:py-20 w-full overflow-hidden"
    >
      {/* Background Image - Fixed Layer */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${getAssetPath("/assets/images/iStock-621838358.jpg")})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'translateZ(0)',
          willChange: 'auto'
        }}
      />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/75" />

      {/* Content Container with Background */}
      <div className="relative z-10 w-full max-w-[1200px] bg-[#666666]/80 rounded-lg p-4 sm:p-6 lg:p-10 mx-4">
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 w-full">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-[#10BEF2] text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Our Products & Services
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
            {services.slice(0, 8).map((service, index) => (
              <motion.div 
                key={service.id} 
                className="flex flex-col gap-2 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              >
                <div className="flex items-center gap-2.5 p-2.5 w-fit bg-black/60 border-[0.5px] border-[#2D9ACF] backdrop-blur-[4px] rounded-lg">
                  <div className="w-7 h-7">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={30}
                      height={30}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => toggleDropdown(service.id)}
                  className="flex items-center justify-between p-3 w-full bg-black/60 border-[0.5px] border-[#2D9ACF] backdrop-blur-[4px] rounded-[20px] cursor-pointer hover:bg-black/75 transition-colors"
                >
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-white">
                    {service.title}
                  </span>
                  <div className={`w-7 h-7 transition-transform duration-300 ${openDropdown === service.id ? 'rotate-180' : ''}`}>
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M6 9L12 15L18 9" stroke="#2D9ACF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                <AnimatePresence>
                  {openDropdown === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="w-full overflow-hidden"
                    >
                      <div className="p-4 bg-black/60 border-[0.5px] border-[#2D9ACF] backdrop-blur-[4px] rounded-lg">
                        <p className="text-sm sm:text-base text-white leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Consulting (9th item) */}
          <motion.div 
            className="flex flex-col gap-2 w-full max-w-[474px] items-center mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
          >
            <div className="flex items-center gap-2.5 p-2.5 w-fit bg-black/60 border-[0.5px] border-[#2D9ACF] backdrop-blur-[4px] rounded-lg">
              <div className="w-7 h-7">
                <Image
                  src={services[8].icon}
                  alt={services[8].title}
                  width={30}
                  height={30}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <button 
              onClick={() => toggleDropdown(services[8].id)}
              className="flex items-center justify-between p-3 w-full bg-black/60 border-[0.5px] border-[#2D9ACF] backdrop-blur-[4px] rounded-[20px] cursor-pointer hover:bg-black/75 transition-colors"
            >
              <span className="text-sm sm:text-base lg:text-lg font-bold text-white">
                {services[8].title}
              </span>
              <div className={`w-7 h-7 transition-transform duration-300 ${openDropdown === services[8].id ? 'rotate-180' : ''}`}>
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M6 9L12 15L18 9" stroke="#2D9ACF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
            <AnimatePresence>
              {openDropdown === services[8].id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full overflow-hidden"
                >
                  <div className="p-4 bg-black/60 border-[0.5px] border-[#2D9ACF] backdrop-blur-[4px] rounded-lg">
                    <p className="text-sm sm:text-base text-white leading-relaxed">
                      {services[8].description}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* AeroXchange Logo */}
          <motion.div 
            className="w-[150px] sm:w-[180px] lg:w-[211px] h-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.9 }}
          >
            <Image
              src={getAssetPath("/assets/images/Aeroxchange422x292_2 1.png")}
              alt="AeroXchange"
              width={211}
              height={146}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}