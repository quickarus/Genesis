'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import { getAssetPath } from '@/lib/utils'

export default function QuoteFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    partNumber: ''
  })
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!captchaToken) {
      alert('Please complete the CAPTCHA verification')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Create a mailto link with the form data
      const mailtoLink = `mailto:info@genesisaircraftparts.com?subject=Quote Request from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nAircraft Part Number: ${formData.partNumber}`
      )}`
      
      window.location.href = mailtoLink
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        partNumber: ''
      })
      setCaptchaToken(null)
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="quote" className="relative flex items-center justify-center gap-6 sm:gap-15 px-4 sm:px-8 lg:px-16 py-12 sm:py-20 lg:py-28 xl:py-36 w-full min-h-[600px] sm:min-h-[734px] lg:min-h-[850px] xl:min-h-[1000px] bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={getAssetPath("/assets/images/AdobeStock_1756726183.mov")}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover object-top"
        />
      </div>
      
      {/* Image Damper */}
      <div className="absolute inset-0 bg-black/45" />
      
      {/* Quote Form */}
      <motion.form 
        onSubmit={handleSubmit}
        className="relative z-10 flex flex-col items-center gap-4 sm:gap-5 p-4 sm:p-6 lg:p-10 w-full max-w-[600px] min-h-[500px] sm:min-h-[640px] bg-[#444444]/60 border border-[#676767] rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.5)] mx-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">Quote Request</h2>
        
        <div className="flex flex-col gap-4 sm:gap-5 w-full items-center">
          <div className="w-full max-w-[520px] h-12 bg-[#F2F2F2] rounded-lg flex items-center">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full h-full px-4 bg-transparent text-[#333333] placeholder:text-[#999999] rounded-lg outline-none"
            />
          </div>
          
          <div className="w-full max-w-[520px] h-12 bg-[#F2F2F2] rounded-lg flex items-center">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full h-full px-4 bg-transparent text-[#333333] placeholder:text-[#999999] rounded-lg outline-none"
            />
          </div>
          
          <div className="w-full max-w-[520px] h-12 bg-[#F2F2F2] rounded-lg flex items-center">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full h-full px-4 bg-transparent text-[#333333] placeholder:text-[#999999] rounded-lg outline-none"
            />
          </div>
          
          <div className="w-full max-w-[520px] h-12 bg-[#F2F2F2] rounded-lg flex items-center">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full h-full px-4 bg-transparent text-[#333333] placeholder:text-[#999999] rounded-lg outline-none"
            />
          </div>
          
          <div className="w-full max-w-[520px] h-12 bg-[#F2F2F2] rounded-lg flex items-center">
            <input
              type="text"
              name="partNumber"
              value={formData.partNumber}
              onChange={handleChange}
              placeholder="Aircraft Part Number"
              className="w-full h-full px-4 bg-transparent text-[#333333] placeholder:text-[#999999] rounded-lg outline-none"
            />
          </div>
          
          {/* Google reCAPTCHA */}
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6LdlvH8sAAAAAFeSqHQdjlRm7Vr9XEktCXS3uLxc"
              onChange={handleCaptchaChange}
              theme="light"
            />
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="text-green-400 text-sm font-medium">
              Quote request sent successfully! We'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="text-red-400 text-sm font-medium">
              Error sending quote request. Please try again.
            </div>
          )}
          
          {/* Submit Button */}
          <button 
            type="submit"
            disabled={isSubmitting || !captchaToken}
            className="flex items-center justify-center gap-2.5 px-4 py-2.5 w-full max-w-[204px] bg-[#2D9ACF] rounded-lg hover:bg-[#2D9ACF]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-lg sm:text-xl font-medium text-white">
              {isSubmitting ? 'Sending...' : 'Submit'}
            </span>
          </button>
        </div>
      </motion.form>
    </section>
  )
}
