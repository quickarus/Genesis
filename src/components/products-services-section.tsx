import Image from 'next/image'

export default function ProductsServicesSection() {
  const services = [
    {
      icon: "/Genesis Aircraft Parts/icons/apu-fleet.svg",
      title: "Purchasing",
      id: "purchasing"
    },
    {
      icon: "/Genesis Aircraft Parts/icons/supply-chain.svg", 
      title: "Leases",
      id: "leases"
    },
    {
      icon: "/Genesis Aircraft Parts/icons/repair.svg",
      title: "Component Sales", 
      id: "component-sales"
    },
    {
      icon: "/Genesis Aircraft Parts/icons/inventory.svg",
      title: "Supply Chain Management",
      id: "supply-chain"
    },
    {
      icon: "/Genesis Aircraft Parts/icons/exchanges.svg",
      title: "Exchanges",
      id: "exchanges"
    },
    {
      icon: "/Genesis Aircraft Parts/icons/leasing.svg",
      title: "APU Sales",
      id: "apu-sales"
    },
    {
      icon: "/Genesis Aircraft Parts/icons/financing.svg",
      title: "Repair Management",
      id: "repair-management"
    },
    {
      icon: "/Genesis Aircraft Parts/icons/consulting.svg",
      title: "APU Fleet Management",
      id: "apu-fleet"
    },
    {
      icon: "/Genesis Aircraft Parts/icons/consignment.svg",
      title: "Consulting",
      id: "consulting"
    }
  ]

  return (
    <section className="relative flex flex-col items-center justify-center gap-10 px-15 py-20 w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/Engine Design with Cyan Details 1.jpg"
          alt="Engine Design Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container with Background */}
      <div className="relative z-10 w-full max-w-[1200px] bg-[#444444]/80 rounded-lg p-10">
        <div className="flex flex-col items-center gap-10 w-full">
          <h2 className="text-3xl font-bold text-[#10BEF2] text-center">
            Our Products & Services
          </h2>
          
          <div className="grid grid-cols-2 gap-8 w-full">
            {services.slice(0, 8).map((service, index) => (
              <div key={service.id} className="flex flex-col gap-2">
                <div className="flex items-center gap-2.5 p-2.5 w-fit bg-black/60 border-[0.5px] border-[#2D9ACF] backdrop-blur-[4px] rounded-lg">
                  <div className="w-7 h-7">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={30}
                      height={30}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 w-full bg-black/60 border-[0.5px] border-[#2D9ACF] backdrop-blur-[4px] rounded-[20px]">
                  <span className="text-lg font-bold text-white">
                    {service.title}
                  </span>
                  <div className="w-7 h-7">
                    <Image
                      src="/Genesis Aircraft Parts/icons/component-sales.svg"
                      alt="Chevron"
                      width={30}
                      height={30}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Consulting (9th item) */}
          <div className="flex flex-col gap-2 w-[474px]">
            <div className="flex items-center gap-2.5 p-2.5 w-fit bg-black/60 border-[0.5px] border-[#2D9ACF] backdrop-blur-[4px] rounded-lg">
              <div className="w-7 h-7">
                <Image
                  src={services[8].icon}
                  alt={services[8].title}
                  width={30}
                  height={30}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex items-center justify-between p-3 w-full bg-black/60 border-[0.5px] border-[#2D9ACF] backdrop-blur-[4px] rounded-[20px]">
              <span className="text-lg font-bold text-white">
                {services[8].title}
              </span>
              <div className="w-7 h-7">
                <Image
                  src="/Genesis Aircraft Parts/icons/component-sales.svg"
                  alt="Chevron"
                  width={30}
                  height={30}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* AeroXchange Logo */}
          <div className="w-[211px] h-[146px] mt-4">
            <Image
              src="/assets/images/Aeroxchange422x292_2 1.png"
              alt="AeroXchange"
              width={211}
              height={146}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}