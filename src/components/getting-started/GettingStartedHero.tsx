import { BookOpen } from 'lucide-react';

export default function GettingStartedHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,230,151,0.1)_0%,transparent_100%)]" />
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <BookOpen className="w-16 h-16 text-[#0AE697] mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Getting Started with <span className="text-[#0AE697]">GetFlexAI</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Your comprehensive guide to setting up and maximizing the potential of our AI-powered 
          solutions for your fitness business.
        </p>
      </div>
    </section>
  );
}