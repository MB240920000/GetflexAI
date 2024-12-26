import Navigation from '../components/layout/Navigation';
import Footer from '../components/footer/Footer';
import FeatureHero from '../components/features/FeatureHero';
import FeatureGrid from '../components/features/FeatureGrid';
import FeatureComparison from '../components/features/FeatureComparison';

export default function Features() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-20">
        <FeatureHero />
        <FeatureGrid />
        <FeatureComparison />
      </main>
      <Footer />
    </div>
  );
}