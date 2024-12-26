import { Dumbbell } from 'lucide-react';

export default function CaseStudyHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,230,151,0.1)_0%,transparent_100%)]" />
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <Dumbbell className="w-16 h-16 text-[#0AE697] mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          How We Gave <span className="text-[#0AE697]">PeakFit Revolution</span> an AI Boost
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          We're super excited to show you what we did for PeakFit Revolution, a dynamic fitness 
          center that's now on the cutting edge, thanks to a smart AI system powered by GetFlexAI.
        </p>
      </div>
    </section>
  );
}