import { ArrowRight, Play } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import HeroAnimation from '../hero/HeroAnimation';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] pt-20">
      <HeroAnimation />
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0AE697]/10 text-[#0AE697] px-4 py-2 rounded-full text-sm mb-6">
              <span>AI-Powered Automation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Revolutionize Your Business with
              <span className="text-[#0AE697] block">AI-Powered Solutions</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              From gyms to wellness centers, we automate customer interactions, 
              streamline operations, and enhance engagement—24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" onClick={() => navigate('/book-demo')}>
                Book a Free Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Link to="/how-it-works">
                <Button variant="secondary">
                  Learn How It Works
                  <Play className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-[#0AE697]/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none" />
    </section>
  );
}