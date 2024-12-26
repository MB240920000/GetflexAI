import Navigation from '../components/layout/Navigation';
import Footer from '../components/footer/Footer';
import BestPracticesHero from '../components/best-practices/BestPracticesHero';
import BestPracticesContent from '../components/best-practices/BestPracticesContent';
import BestPracticesTips from '../components/best-practices/BestPracticesTips';
import CommonMistakes from '../components/best-practices/CommonMistakes';

export default function BestPractices() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-20">
        <BestPracticesHero />
        <BestPracticesContent />
        <BestPracticesTips />
        <CommonMistakes />
      </main>
      <Footer />
    </div>
  );
}