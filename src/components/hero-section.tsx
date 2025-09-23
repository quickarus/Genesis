import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center bg-black overflow-hidden">
      {/* World Map Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-[100px] left-[-100px] w-[2500px] h-[857px]">
          <Image
            src="/assets/images/world.svg"
            alt="World Map"
            width={2500}
            height={857}
            className="w-full h-full object-cover opacity-90"
            priority
          />
        </div>
      </div>
      
      {/* Image Damper Overlay */}
      <div className="absolute inset-0 bg-black/75 z-[1]" />
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-5 p-2.5 w-[800px] max-w-[90vw] h-[300px] bg-[#444444]/70 backdrop-blur-[10px] border border-[#2D9ACF] rounded-[15px]">
        <div className="w-[500px] max-w-full h-[200px] flex items-center justify-center">
          <Image
            src="/assets/logos/white-logo-rec (1).png"
            alt="Genesis Aircraft Parts"
            width={400}
            height={120}
            className="object-contain max-w-full max-h-full"
            priority
          />
        </div>
      </div>
    </section>
  )
}