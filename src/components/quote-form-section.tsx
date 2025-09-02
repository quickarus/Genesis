import Image from 'next/image'

export default function QuoteFormSection() {
  return (
    <section className="relative flex items-center justify-center gap-15 px-15 py-2.5 w-full h-[734px] bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/aircraft-hangar.jpg"
          alt="Aircraft Hangar"
          width={1440}
          height={960}
          className="absolute top-[-226px] left-0 w-full h-[960px] object-cover"
        />
      </div>
      
      {/* Image Damper */}
      <div className="absolute inset-0 bg-black/75" />
      
      {/* Quote Form */}
      <div className="relative z-10 flex flex-col items-center gap-5 p-10 w-[600px] h-[640px] bg-[#444444] border border-[#676767] rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.5)]">
        <h2 className="text-3xl font-bold text-white">Quote Request</h2>
        
        <div className="flex flex-col gap-5 w-full">
          <div className="w-[520px] h-12 bg-[#F2F2F2] rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Name"
              className="w-full h-full px-4 bg-transparent text-[#999999] rounded-lg outline-none"
            />
          </div>
          
          <div className="w-[520px] h-12 bg-[#F2F2F2] rounded-lg flex items-center">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-full px-4 bg-transparent text-[#999999] rounded-lg outline-none"
            />
          </div>
          
          <div className="w-[520px] h-12 bg-[#F2F2F2] rounded-lg flex items-center">
            <input
              type="tel"
              placeholder="Phone"
              className="w-full h-full px-4 bg-transparent text-[#999999] rounded-lg outline-none"
            />
          </div>
          
          <div className="w-[520px] h-12 bg-[#F2F2F2] rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Company Name"
              className="w-full h-full px-4 bg-transparent text-[#999999] rounded-lg outline-none"
            />
          </div>
          
          <div className="w-[520px] h-12 bg-[#F2F2F2] rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Aircraft Part Number"
              className="w-full h-full px-4 bg-transparent text-[#999999] rounded-lg outline-none"
            />
          </div>
          
          {/* Captcha */}
          <div className="w-[300px] h-[74px]">
            <Image
              src="/assets/images/captcha.png"
              alt="Captcha"
              width={300}
              height={74}
              className="w-full h-full object-stretch"
            />
          </div>
          
          {/* Submit Button */}
          <button className="flex items-center justify-center gap-2.5 px-4 py-2.5 w-[204px] bg-[#2D9ACF] rounded-lg">
            <span className="text-xl font-medium text-white">Submit</span>
          </button>
        </div>
      </div>
    </section>
  )
}
