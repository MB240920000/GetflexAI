import Navigation from '../components/layout/Navigation';
import HeroSection from '../components/sections/HeroSection';
import Features from '../components/sections/Features';
import Stats from '../components/sections/Stats';
import DynamicTestimonials from '../components/testimonials/DynamicTestimonials';
import CostCalculator from '../components/calculator/CostCalculator';
import FAQ from '../components/sections/FAQ';
import PricingSection from '../components/sections/PricingSection';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <Features />
      <Stats />
      <DynamicTestimonials />
      <CostCalculator />
      <FAQ />
      <PricingSection />
      <Footer />
    </div>
  );
}