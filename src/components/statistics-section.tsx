'use client'

import { motion } from 'framer-motion'

interface StatCardProps {
  number: string
  label: string
  delay: number
}

function StatCard({ number, label, delay }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-dark border border-primary rounded-2xl p-10 w-[300px] h-20 flex flex-col justify-center items-center"
    >
      <h3 className="text-4xl font-bold text-secondary mb-2">{number}</h3>
      <p className="text-lg font-bold text-white text-center">{label}</p>
    </motion.div>
  )
}

export default function StatisticsSection() {
  const stats = [
    { number: '500+', label: "APU's Processed" },
    { number: '2,000+', label: 'Aircraft Supported' },
    { number: '50+', label: 'Years Combined Experience' },
    { number: '24/7', label: 'AOG Support' },
  ]

  return (
    <section className="w-full py-10 px-15 bg-black">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center gap-10 px-15">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              number={stat.number}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
