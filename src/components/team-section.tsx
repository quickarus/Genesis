'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TeamSection() {
  return (
    <section className="w-full py-20 bg-black">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-secondary text-center"
        >
          Meet Our Team
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl h-[667px] rounded-lg overflow-hidden"
        >
          <Image
            src="https://placekitten.com/1000/667"
            alt="Genesis Aircraft Parts Team"
            width={1000}
            height={667}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
