import Navigation from '../components/layout/Navigation';
import Footer from '../components/footer/Footer';
import BenefitsHero from '../components/benefits/BenefitsHero';
import BenefitsList from '../components/benefits/BenefitsList';
import ROICalculator from '../components/benefits/ROICalculator';

export default function Benefits() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-20">
        <BenefitsHero />
        <BenefitsList />
        <ROICalculator />
      </main>
      <Footer />
    </div>
  );
}