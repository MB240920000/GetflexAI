import Navigation from '../components/layout/Navigation';
import Footer from '../components/footer/Footer';
import HowItWorksHero from '../components/how-it-works/HowItWorksHero';
import HowItWorksSteps from '../components/how-it-works/HowItWorksSteps';
import VideoSection from '../components/video/VideoSection';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-20">
        <HowItWorksHero />
        <HowItWorksSteps />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
}