import { Bot } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-[#0AE697]/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="w-8 h-8 text-[#0AE697]" />
          <span className="text-xl font-bold text-white">GetFlexAI</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-300 hover:text-[#0AE697] transition-colors">Features</a>
          <a href="#benefits" className="text-gray-300 hover:text-[#0AE697] transition-colors">Benefits</a>
          <a href="#testimonials" className="text-gray-300 hover:text-[#0AE697] transition-colors">Testimonials</a>
          <button className="bg-[#0AE697]/10 text-[#0AE697] px-4 py-2 rounded-lg border border-[#0AE697]/20 hover:bg-[#0AE697]/20 transition-all">
            Book Demo
          </button>
        </nav>
      </div>
    </header>
  );
}