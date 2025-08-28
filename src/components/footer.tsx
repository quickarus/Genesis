'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <footer className="w-full bg-black py-5 px-5">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-start gap-5">
          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2 p-2.5 w-[401px] h-40"
          >
            <div className="w-[196px] h-[59px] bg-gray-300 rounded flex items-center justify-center mb-4">
              <span className="text-black font-bold text-sm">GENESIS LOGO</span>
            </div>
            
            <div className="flex justify-end items-end gap-2.5">
              <div className="flex flex-col gap-0">
                <p className="text-sm text-white">4944 113th Avenue North</p>
                <p className="text-sm text-white">Clearwater, FL 33760 USA</p>
                <p className="text-sm text-white">(727) 202-6890</p>
              </div>
              
              <div className="flex flex-col gap-0">
                <p className="text-sm text-white">info@genesisaircraftparts.com</p>
                <p className="text-sm text-white font-bold">TAC-2000 Certified</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2 p-2.5 w-[200px] h-40"
          >
            <h3 className="text-base font-bold text-secondary mb-2">Navigation</h3>
            <a href="#" className="text-base text-white hover:text-secondary transition-colors">Home</a>
            <a href="#" className="text-base text-white hover:text-secondary transition-colors">About</a>
            <a href="#" className="text-base text-white hover:text-secondary transition-colors">Products & Services</a>
            <a href="#" className="text-base text-white hover:text-secondary transition-colors">Contact</a>
            <a href="#" className="text-base text-white hover:text-secondary transition-colors">Get Quote</a>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 p-2.5 w-[320px] h-40"
          >
            <form onSubmit={handleEmailSubmit} className="flex items-center gap-2 p-2.5 w-[280px] h-10">
              <div className="bg-white rounded w-[180px] h-8 flex items-center px-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email address"
                  className="bg-transparent w-full text-sm text-gray-600 outline-none placeholder-gray-500"
                />
                <span className="text-sm text-gray-600">Email</span>
              </div>
              <button
                type="submit"
                className="bg-primary rounded w-[92px] h-8 text-white text-sm font-medium hover:bg-primary/80 transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-base text-white">✈ 📫 Sign up for our newsletter!</p>
            <p className="text-base text-white">©️ Genesis Aircraft Parts 2025</p>
            
            <div className="flex items-center gap-2.5">
              <p className="text-base text-white">Created by Menes</p>
              <div className="w-7.5 h-7.5 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-black text-xs font-bold">M</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
