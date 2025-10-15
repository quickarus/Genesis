'use client'

import { useState, useEffect, useRef } from 'react'

interface CountUpNumberProps {
  end: number
  suffix: string
  hasComma: boolean
  duration?: number
}

function CountUpNumber({ end, suffix, hasComma, duration = 2000 }: CountUpNumberProps) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    const startTime = Date.now()
    const endTime = startTime + duration

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      
      // Easing function for gradual slowdown - easeOutCubic for smoother deceleration
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(easeOutCubic * end)
      
      setCount(currentCount)

      if (now < endTime) {
        requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(updateCount)
  }, [hasStarted, end, duration])

  const formatNumber = (num: number) => {
    if (hasComma) {
      return num.toLocaleString()
    }
    return num.toString()
  }

  return (
    <div ref={elementRef} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#10BEF2]">
      {formatNumber(count)}{suffix}
    </div>
  )
}

export default function StatisticsSection() {
  const stats = [
    {
      number: "500+",
      label: "APU's Processed",
      value: 500,
      suffix: "+",
      hasComma: false
    },
    {
      number: "50+",
      label: "Years Combined Experience",
      value: 50,
      suffix: "+",
      hasComma: false
    },
    {
      number: "375+",
      label: "Global Partners",
      value: 375,
      suffix: "+",
      hasComma: false
    }
  ]

  return (
    <section className="px-4 sm:px-8 lg:px-15 py-5 bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 px-4 sm:px-8 lg:px-15 py-10 max-w-screen-xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 p-4 sm:p-2.5 w-full max-w-[300px] mx-auto h-20 sm:h-20 bg-[#444444] border border-[#2D9ACF] rounded-[15px]"
          >
            <CountUpNumber 
              end={stat.value} 
              suffix={stat.suffix}
              hasComma={stat.hasComma}
            />
            <div className="text-sm sm:text-base lg:text-lg font-bold text-white text-center">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
