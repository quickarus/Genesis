import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import StatisticsSection from '@/components/statistics-section'
import AboutSection from '@/components/about-section'
import TeamSection from '@/components/team-section'
import ServicesSection from '@/components/services-section'
import QuoteSection from '@/components/quote-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <StatisticsSection />
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <QuoteSection />
      <Footer />
    </main>
  )
}
