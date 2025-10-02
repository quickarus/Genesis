import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'

export default function ProductsServicesSection() {
  const services = [
    {
      icon: getAssetPath("/icons/apu-fleet.svg"),
      title: "Purchasing",
      id: "purchasing"
    },
    {
      icon: getAssetPath("/icons/supply-chain.svg"), 
      title: "Leases",
      id: "leases"
    },
    {
      icon: getAssetPath("/icons/component-sales.svg"),
      title: "Component Sales", 
      id: "component-sales"
    },
    {
      icon: getAssetPath("/icons/inventory.svg"),
      title: "Supply Chain Management",
      id: "supply-chain"
    },
    {
      icon: getAssetPath("/icons/exchanges.svg"),
      title: "Exchanges",
      id: "exchanges"
    },
    {
      icon: getAssetPath("/icons/leasing.svg"),
      title: "APU Sales",
      id: "apu-sales"
    },
    {
      icon: getAssetPath("/icons/repair.svg"),
      title: "Repair Management",
      id: "repair-management"
    },
    {
      icon: getAssetPath("/icons/consulting.svg"),
      title: "APU Fleet Management",
      id: "apu-fleet"
    },
    {
      icon: getAssetPath("/icons/consignment.svg"),
      title: "Consulting",
      id: "consulting"
    }
  ]

  return (
    <section id="services" className="relative flex flex-col items-center justify-center gap-6 sm:gap-10 px-4 sm:px-8 lg:px-15 py-12 sm:py-20 w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getAssetPath("/assets/images/iStock-621838358.jpg")}
          alt="iStock Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content Container with Background */}
      <div className="relative z-10 w-full max-w-[1200px] bg-[#666666]/60 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-10 mx-4">
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#10BEF2] text-center">
            Our Products & Services
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
            {services.slice(0, 8).map((service, index) => (
              <div key={service.id} className="flex flex-col gap-2 items-center">
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
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-white">
                    {service.title}
                  </span>
                  <div className="w-7 h-7">
                    <Image
                      src={getAssetPath("/icons/component-sales.svg")}
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
          <div className="flex flex-col gap-2 w-full max-w-[474px] items-center mx-auto">
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
              <span className="text-sm sm:text-base lg:text-lg font-bold text-white">
                {services[8].title}
              </span>
              <div className="w-7 h-7">
                <Image
                  src={getAssetPath("/icons/component-sales.svg")}
                  alt="Chevron"
                  width={30}
                  height={30}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* AeroXchange Logo */}
          <div className="w-[150px] sm:w-[180px] lg:w-[211px] h-auto mt-4">
            <Image
              src={getAssetPath("/assets/images/Aeroxchange422x292_2 1.png")}
              alt="AeroXchange"
              width={211}
              height={146}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}