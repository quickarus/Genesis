'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { getAssetPath } from '@/lib/utils'

export default function ApuSection() {
  return (
    <section className="relative flex items-center justify-center px-4 sm:px-8 lg:px-15 py-12 sm:py-16 lg:py-20 w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getAssetPath("/assets/images/Frame 19.jpg")}
          alt="Frame 19 Background"
          fill
          className="object-cover w-full h-full"
          quality={100}
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      {/* Content Container */}
      <motion.div 
        className="relative z-10 flex items-center justify-center gap-2.5 p-4 sm:p-6 lg:p-8 bg-[#444444]/70 border border-[#2D9ACF] backdrop-blur-[10px] rounded-[15px] max-w-4xl mx-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-sm sm:text-base lg:text-lg font-medium text-white leading-[1.4] sm:leading-[1.33] text-center">
          At Genesis Aircraft Parts, we specialize in the purchase, sale, lease, and teardown of Auxiliary Power Units (APUs). Whether you need APU piece‑part support or whole asset support, Genesis Aircraft Parts offers serviceable APU's that are available for sale, lease, or flat‑rate exchange—our team delivers reliable, cost‑effective solutions tailored to your operational needs. Driven by strong communication, customer satisfaction, and industry expertise, Genesis Aircraft Parts is your trusted partner for all APU solutions.
        </div>
      </motion.div>
    </section>
  )
}
