import Image from 'next/image'

export default function Header() {
  return (
    <div className="bg-black/10 backdrop-blur-sm">
      <div className="flex items-center justify-center px-5 py-5 max-w-screen-xl mx-auto">
        <nav className="flex items-center gap-5">
          <button className="px-4 py-2 rounded-lg text-white font-medium text-lg hover:bg-white/10 transition-colors">
            Services
          </button>
          <button className="px-4 py-2 rounded-lg text-white font-medium text-lg hover:bg-white/10 transition-colors">
            About
          </button>
          <button className="px-4 py-2 rounded-lg bg-[#2D9ACF] text-white font-medium text-lg hover:bg-[#2D9ACF]/90 transition-colors">
            Get Quote
          </button>
        </nav>
      </div>
    </div>
  )
}