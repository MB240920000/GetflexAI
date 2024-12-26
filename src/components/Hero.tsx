import { Bot, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Gradient Ring Effect */}
      <div className="absolute w-[800px] h-[800px] border-[40px] border-[#0AE697] rounded-full opacity-10 blur-xl animate-spin-slow"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <Bot className="w-16 h-16 text-[#0AE697] mx-auto mb-8" />
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          AI Solutions Tailored for Health & Wellness
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Transforming the way businesses interact, engage, and operate with AI automation.
        </p>
        <button className="bg-[#0AE697] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all flex items-center gap-2 mx-auto">
          Explore Our Solutions
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}