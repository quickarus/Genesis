'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Plane, Settings, Package, DollarSign, Users, Wrench, FileText, Truck, Building } from 'lucide-react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  iconColor: string
  delay: number
}

function ServiceCard({ icon, title, iconColor, delay }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-4 w-[474px] h-[110px]"
    >
      <div className="flex items-center gap-2.5 p-2.5 bg-white/60 backdrop-blur border border-primary/50 rounded-lg">
        <div className={`w-8 h-8 flex items-center justify-center ${iconColor}`}>
          {icon}
        </div>
      </div>
      <div className="bg-white/60 backdrop-blur border border-primary/50 rounded-3xl px-5 py-3 w-full h-12 flex items-center justify-center gap-2.5">
        <span className="text-lg font-bold text-white">{title}</span>
        <ChevronDown className="w-6 h-6 text-white" />
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const services = [
    { icon: <Plane className="w-6 h-6" />, title: 'Purchasing', iconColor: 'text-blue-500', delay: 0 },
    { icon: <Truck className="w-6 h-6" />, title: 'Leases', iconColor: 'text-green-500', delay: 0.1 },
    { icon: <Settings className="w-6 h-6" />, title: 'Component Sales', iconColor: 'text-purple-500', delay: 0.2 },
    { icon: <Package className="w-6 h-6" />, title: 'Supply Chain Management', iconColor: 'text-orange-500', delay: 0.3 },
    
    { icon: <DollarSign className="w-6 h-6" />, title: 'Exchanges', iconColor: 'text-teal-500', delay: 0.4 },
    { icon: <Users className="w-6 h-6" />, title: 'APU Sales', iconColor: 'text-pink-500', delay: 0.5 },
    { icon: <Wrench className="w-6 h-6" />, title: 'Repair Management', iconColor: 'text-red-500', delay: 0.6 },
    { icon: <Building className="w-6 h-6" />, title: 'APU Fleet Management', iconColor: 'text-indigo-500', delay: 0.7 },
    
    { icon: <FileText className="w-6 h-6" />, title: 'Consulting', iconColor: 'text-yellow-500', delay: 0.8 },
  ]

  return (
    <section className="relative w-full py-20 px-15 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://placekitten.com/1440/960)',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-secondary text-center mb-5"
        >
          Our Products & Services
        </motion.h2>

        <div className="bg-dark/80 backdrop-blur rounded-lg p-5 flex justify-center">
          <div className="flex flex-col items-center gap-7.5">
            <div className="flex gap-7.5">
              {/* Left Column */}
              <div className="flex flex-col gap-7.5 w-[474px]">
                {services.slice(0, 4).map((service, index) => (
                  <ServiceCard
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    iconColor={service.iconColor}
                    delay={service.delay}
                  />
                ))}
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-7.5 w-[474px]">
                {services.slice(4, 8).map((service, index) => (
                  <ServiceCard
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    iconColor={service.iconColor}
                    delay={service.delay}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Center */}
            <div className="w-[474px]">
              <ServiceCard
                icon={services[8].icon}
                title={services[8].title}
                iconColor={services[8].iconColor}
                delay={services[8].delay}
              />
            </div>

            {/* AeroXchange Logo */}
            <div className="w-[225px] h-16 bg-gray-300 rounded flex items-center justify-center">
              <span className="text-black font-bold text-sm">AEROXCHANGE LOGO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
