import Navigation from '../components/layout/Navigation';
import Footer from '../components/footer/Footer';
import AboutHero from '../components/about/AboutHero';
import Mission from '../components/about/Mission';
import Values from '../components/about/Values';
import Team from '../components/about/Team';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-20">
        <AboutHero />
        <Mission />
        <Values />
        <Team />
      </main>
      <Footer />
    </div>
  );
}