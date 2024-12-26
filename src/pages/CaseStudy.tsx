import Navigation from '../components/layout/Navigation';
import Footer from '../components/footer/Footer';
import CaseStudyHero from '../components/case-study/CaseStudyHero';
import CaseStudyChallenge from '../components/case-study/CaseStudyChallenge';
import CaseStudySolutions from '../components/case-study/CaseStudySolutions';
import CaseStudyResults from '../components/case-study/CaseStudyResults';
import AIAgentDemo from '../components/case-study/AIAgentDemo';

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-20">
        <CaseStudyHero />
        <CaseStudyChallenge />
        <CaseStudySolutions />
        <CaseStudyResults />
        <AIAgentDemo />
      </main>
      <Footer />
    </div>
  );
}