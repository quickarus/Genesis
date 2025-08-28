'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    partNumber: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  return (
    <section className="relative w-full py-20 px-15 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://placekitten.com/1440/960)',
          }}
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto flex justify-center items-center gap-15">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-dark/90 backdrop-blur border border-gray-600 rounded-xl p-10 w-[600px] shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-white mb-5 text-center">Quote Request</h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="bg-gray-200 rounded-lg h-12 flex items-center px-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-transparent w-full text-gray-600 outline-none placeholder-gray-500"
              />
            </div>

            <div className="bg-gray-200 rounded-lg h-12 flex items-center px-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-transparent w-full text-gray-600 outline-none placeholder-gray-500"
              />
            </div>

            <div className="bg-gray-200 rounded-lg h-12 flex items-center px-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-transparent w-full text-gray-600 outline-none placeholder-gray-500"
              />
            </div>

            <div className="bg-gray-200 rounded-lg h-12 flex items-center px-4">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleInputChange}
                className="bg-transparent w-full text-gray-600 outline-none placeholder-gray-500"
              />
            </div>

            <div className="bg-gray-200 rounded-lg h-12 flex items-center px-4">
              <input
                type="text"
                name="partNumber"
                placeholder="Aircraft Part Number"
                value={formData.partNumber}
                onChange={handleInputChange}
                className="bg-transparent w-full text-gray-600 outline-none placeholder-gray-500"
              />
            </div>

            {/* Captcha Placeholder */}
            <div className="w-[300px] h-[74px] bg-gray-300 rounded flex items-center justify-center mx-auto">
              <span className="text-black text-sm font-bold">CAPTCHA PLACEHOLDER</span>
            </div>

            <button
              type="submit"
              className="bg-primary hover:bg-primary/80 text-white font-medium text-xl py-2.5 px-4 rounded-lg transition-colors w-[204px] mx-auto"
            >
              Submit
            </button>
          </form>
        </motion.div>

        {/* APU Description */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-dark/30 backdrop-blur border border-primary rounded-2xl p-10 max-w-lg"
        >
          <p className="text-lg text-white leading-relaxed font-medium">
            At Genesis Aircraft Parts, we specialize in the purchase, sale, lease, and teardown of Auxiliary Power Units (APUs). Whether you're looking to sell surplus APUs, acquire high-quality units, secure lease options, or source teardown components, our team delivers reliable, cost-effective solutions tailored to your operational needs. Backed by a commitment to quality, integrity, and industry expertise, Genesis is your go-to partner for all things APU.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
