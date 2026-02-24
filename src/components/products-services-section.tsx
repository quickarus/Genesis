'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShoppingCart, Plane, Package, Network, Wrench, Building2 } from 'lucide-react'
import { getAssetPath } from '@/lib/utils'

export default function ProductsServicesSection() {
  const services = [
    {
      icon: ShoppingCart,
      title: "APU Purchasing",
      id: "apu-purchasing"
    },
    {
      icon: Plane,
      title: "APU Sales, Lease, & Exchange",
      id: "apu-sales-lease"
    },
    {
      icon: Package,
      title: "Component Sales & Exchange", 
      id: "component-sales"
    },
    {
      icon: Network,
      title: "Supply Chain Management",
      id: "supply-chain"
    },
    {
      icon: Wrench,
      title: "Repair Management",
      id: "repair-management"
    },
    {
      icon: Building2,
      title: "APU Fleet Management",
      id: "apu-fleet"
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
          backgroundImage: `url('${getAssetPath("/assets/images/7cfe5b5d-0b75-407c-a391-05b64a65bedb.png")}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
          transform: 'translateZ(0)',
          willChange: 'auto'
        }}
      />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/75" />

      {/* Content Container with Background */}
      <div className="relative z-10 w-full max-w-[1200px] bg-[#666666]/30 rounded-lg p-4 sm:p-6 lg:p-10 mx-4">
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
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div 
                  key={service.id} 
                  className="flex flex-col gap-3 items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-2.5 p-3 w-fit bg-black/60 border-[0.5px] border-[#2D9ACF] backdrop-blur-[4px] rounded-lg">
                    <IconComponent 
                      className="w-7 h-7 text-[#10BEF2]" 
                      strokeWidth={2.5}
                    />
                  </div>
                  <div className="p-3 w-full bg-black/60 border-[0.5px] border-[#2D9ACF] backdrop-blur-[4px] rounded-[20px]">
                    <p className="text-sm sm:text-base lg:text-lg font-bold text-white text-center">
                      {service.title}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

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