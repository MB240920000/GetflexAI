import { Lightbulb } from 'lucide-react';

export default function BestPracticesHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,230,151,0.1)_0%,transparent_100%)]" />
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <Lightbulb className="w-16 h-16 text-[#0AE697] mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Best Practices for <span className="text-[#0AE697]">GetFlexAI</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Maximize the potential of your AI assistant with our comprehensive guide to best practices
          and optimization strategies.
        </p>
      </div>
    </section>
  );
}