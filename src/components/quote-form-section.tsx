import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'

export default function QuoteFormSection() {
  return (
    <section id="quote" className="relative flex items-center justify-center gap-6 sm:gap-15 px-4 sm:px-8 lg:px-15 py-8 sm:py-12 lg:py-2.5 w-full min-h-[600px] sm:min-h-[734px] bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={getAssetPath("/assets/images/aircraft-hangar.jpg")}
          alt="Aircraft Hangar"
          width={1440}
          height={960}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      
      {/* Image Damper */}
      <div className="absolute inset-0 bg-black/75" />
      
      {/* Quote Form */}
      <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-5 p-4 sm:p-6 lg:p-10 w-full max-w-[600px] min-h-[500px] sm:min-h-[640px] bg-[#444444] border border-[#676767] rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.5)] mx-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">Quote Request</h2>
        
        <div className="flex flex-col gap-4 sm:gap-5 w-full items-center">
          <div className="w-full max-w-[520px] h-12 bg-[#F2F2F2] rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Name"
              className="w-full h-full px-4 bg-transparent text-[#999999] rounded-lg outline-none"
            />
          </div>
          
          <div className="w-full max-w-[520px] h-12 bg-[#F2F2F2] rounded-lg flex items-center">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-full px-4 bg-transparent text-[#999999] rounded-lg outline-none"
            />
          </div>
          
          <div className="w-full max-w-[520px] h-12 bg-[#F2F2F2] rounded-lg flex items-center">
            <input
              type="tel"
              placeholder="Phone"
              className="w-full h-full px-4 bg-transparent text-[#999999] rounded-lg outline-none"
            />
          </div>
          
          <div className="w-full max-w-[520px] h-12 bg-[#F2F2F2] rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Company Name"
              className="w-full h-full px-4 bg-transparent text-[#999999] rounded-lg outline-none"
            />
          </div>
          
          <div className="w-full max-w-[520px] h-12 bg-[#F2F2F2] rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Aircraft Part Number"
              className="w-full h-full px-4 bg-transparent text-[#999999] rounded-lg outline-none"
            />
          </div>
          
          {/* Captcha */}
          <div className="w-full max-w-[300px] h-[74px]">
            <Image
              src={getAssetPath("/assets/images/captcha.png")}
              alt="Captcha"
              width={300}
              height={74}
              className="w-full h-full object-stretch"
            />
          </div>
          
          {/* Submit Button */}
          <button className="flex items-center justify-center gap-2.5 px-4 py-2.5 w-full max-w-[204px] bg-[#2D9ACF] rounded-lg">
            <span className="text-lg sm:text-xl font-medium text-white">Submit</span>
          </button>
        </div>
      </div>
    </section>
  )
}
