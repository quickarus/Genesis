import Image from 'next/image'

export default function ApuSection() {
  return (
    <section className="relative flex items-center justify-center px-15 py-20 w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/Frame 19.jpg"
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
      <div className="relative z-10 flex items-center justify-center gap-2.5 p-8 bg-[#444444]/70 border border-[#2D9ACF] backdrop-blur-[10px] rounded-[15px] max-w-4xl">
        <div className="text-lg font-medium text-white leading-[1.33] text-center">
          At Genesis Aircraft Parts, we specialize in the purchase, sale, lease, and teardown of Auxiliary Power Units (APUs). Whether you're looking to sell surplus APUs, acquire high-quality units, secure lease options, or source teardown components, our team delivers reliable, cost-effective solutions tailored to your operational needs. Backed by a commitment to quality, integrity, and industry expertise, Genesis is your go-to partner for all things APU.
        </div>
      </div>
    </section>
  )
}
