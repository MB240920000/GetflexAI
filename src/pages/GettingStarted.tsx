import Navigation from '../components/layout/Navigation';
import Footer from '../components/footer/Footer';
import GettingStartedHero from '../components/getting-started/GettingStartedHero';
import SetupSteps from '../components/getting-started/SetupSteps';
import KeyFeatures from '../components/getting-started/KeyFeatures';
import BestPractices from '../components/getting-started/BestPractices';
import NextSteps from '../components/getting-started/NextSteps';

export default function GettingStarted() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-20">
        <GettingStartedHero />
        <SetupSteps />
        <KeyFeatures />
        <BestPractices />
        <NextSteps />
      </main>
      <Footer />
    </div>
  );
}