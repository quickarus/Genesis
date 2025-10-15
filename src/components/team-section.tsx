'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { getAssetPath } from '@/lib/utils'

export default function TeamSection() {
  return (
    <section id="about" className="flex flex-col items-center gap-8 sm:gap-12 py-12 sm:py-20 px-4 sm:px-8 lg:px-16 w-full max-w-7xl mx-auto bg-black">
      <motion.h2 
        className="text-2xl sm:text-3xl font-bold text-[#10BEF2] text-center w-full mt-8 sm:mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Meet Our Team
      </motion.h2>
      <motion.div 
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="w-full aspect-[1100/667] sm:max-w-[1100px] mx-auto rounded-lg overflow-hidden">
          <Image
            src={getAssetPath("/assets/images/ChatGPT Image Jun 27, 2025, 12_38_41 PM 1.jpg")}
            alt="Genesis Aircraft Parts Team"
            width={1100}
            height={667}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="w-full sm:max-w-[1100px] mx-auto px-4 sm:px-8 lg:px-12 mt-6 sm:mt-8">
          <div className="bg-[#444444]/70 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-lg">
            <div className="text-white space-y-3 sm:space-y-4 lg:space-y-6">
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                Genesis is a premier supplier in the commercial aviation industry. We specialize in inventory solutions to the worldwide aviation marketplace. With over 50 years combined experience in aircraft maintenance, finance solutions, and asset management, our team prides itself in our commitment to integrity, flexibility, and quality of work.
              </p>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                As an international service company, we work closely with our network of partners to meet a wide range of material requirements for customers. From simple parts transactions to highly intricate supply chain management programs, we are committed to providing practical business solutions that meet our customer needs.
              </p>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                We are a trusted partner in the commercial aerospace aftermarket for supply, purchase, exchange, lease, and repair management. We offer a direct link between your commercial aircraft and engine needs and innovative, cost effective, quality driven inventory solutions. At Genesis Aircraft our commitment is to you, the customer and is driven by integrity, technology and the highest quality standards.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}