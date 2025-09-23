import Image from 'next/image'

export default function FooterSection() {
  return (
    <footer className="flex items-start justify-between p-5 w-full min-h-[240px] bg-black">
      {/* Contact Info Section */}
      <div className="flex flex-col gap-2 p-2.5 w-[401px] h-auto">
        <div className="w-[196px] h-[59px]">
          <Image
            src="/assets/logos/FinalLogo_JPG.jpg"
            alt="Genesis Aircraft Parts"
            width={196}
            height={59}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex items-end justify-end gap-2.5">
          <div className="w-[176px] h-[67px]">
            <div className="text-sm text-white leading-[1.21]">4944 113th Avenue North</div>
            <div className="text-sm text-white leading-[1.21] mt-2">Clearwater, FL 33760 USA</div>
            <div className="text-sm text-white leading-[1.21] mt-2">(727) 202-6890</div>
          </div>
          
          <div className="w-[203px] h-[42px]">
            <div className="text-sm text-white leading-[1.21]">info@genesisaircraftparts.com</div>
            <div className="text-sm font-bold text-white leading-[1.21] mt-2">TAC-2000 Certified</div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="flex flex-col gap-2 p-2.5 w-[200px] h-auto">
        <div className="text-base font-bold text-[#10BEF2]">Navigation</div>
        <div className="text-base text-white">Home</div>
        <div className="text-base text-white">About</div>
        <div className="text-base text-white">Products & Services</div>
        <div className="text-base text-white">Contact</div>
        <div className="text-base text-white">Get Quote</div>
      </div>

      {/* Newsletter Section */}
      <div className="flex flex-col gap-3 p-2.5 w-80 h-auto">
        <div className="flex items-center gap-2 p-2.5 w-[280px] h-10">
          <div className="w-45 h-8 bg-white flex items-center">
            <div className="text-sm text-[#999999] px-4">Email</div>
          </div>
          <div className="w-23 h-8 bg-[#2D9ACF]"></div>
        </div>
        
        <div className="text-base text-white w-[290px]">✈ 📫 Sign up for our newsletter!</div>
        <div className="text-base text-white">©️ Genesis Aircraft Parts 2025</div>
        
        <div className="flex items-center justify-center gap-2.5">
          <div className="text-base text-white">Created by Menes</div>
          <div className="w-7 h-7">
            <Image
              src="/assets/logos/FinalLogo_JPG.jpg"
              alt="Menes Logo"
              width={30}
              height={30}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
