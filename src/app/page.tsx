import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import StatisticsSection from '@/components/statistics-section'
import AboutSection from '@/components/about-section'
import TeamSection from '@/components/team-section'
import ProductsServicesSection from '@/components/products-services-section'
import ApuSection from '@/components/apu-section'
import QuoteFormSection from '@/components/quote-form-section'
import FooterSection from '@/components/footer-section'

export default function Home() {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <main className="relative bg-black text-white">
        <HeroSection />
        <StatisticsSection />
        <ApuSection />
        <AboutSection />
        <ProductsServicesSection />
        <TeamSection />
        <QuoteFormSection />
        <FooterSection />
      </main>
    </div>
  );
}