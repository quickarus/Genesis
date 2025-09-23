export default function StatisticsSection() {
  const stats = [
    {
      number: "500+",
      label: "APU's Processed"
    },
    {
      number: "2,000+", 
      label: "Aircraft Supported"
    },
    {
      number: "50+",
      label: "Years Combined Experience"
    },
    {
      number: "24/7",
      label: "AOG Support"
    }
  ]

  return (
    <section className="px-15 py-5 bg-black">
      <div className="flex items-center justify-between gap-10 px-15 py-10 max-w-screen-xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 p-2.5 w-[300px] h-20 bg-[#444444] border border-[#2D9ACF] rounded-[15px]"
          >
            <div className="text-4xl font-bold text-[#10BEF2]">
              {stat.number}
            </div>
            <div className="text-lg font-bold text-white text-center">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
