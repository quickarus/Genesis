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
    <section className="px-4 sm:px-8 lg:px-15 py-5 bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 px-4 sm:px-8 lg:px-15 py-10 max-w-screen-xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 p-4 sm:p-2.5 w-full max-w-[300px] mx-auto h-20 sm:h-20 bg-[#444444] border border-[#2D9ACF] rounded-[15px]"
          >
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#10BEF2]">
              {stat.number}
            </div>
            <div className="text-sm sm:text-base lg:text-lg font-bold text-white text-center">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
