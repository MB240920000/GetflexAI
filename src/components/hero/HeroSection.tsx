import { Bot, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import HeroAnimation from './HeroAnimation';

export default function HeroSection() {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen pt-20 flex items-center">
      <HeroAnimation />
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#0AE697]/10 text-[#0AE697] px-4 py-2 rounded-full text-sm mb-6">
            <Bot className="w-4 h-4" />
            <span>AI-Powered Automation for Health & Wellness</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Fitness Business with
            <span className="text-[#0AE697] block mt-2">Smart AI Solutions</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Automate customer interactions, streamline operations, and enhance member 
            engagement with our intelligent AI platform designed specifically for 
            gyms and wellness centers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="primary"
              onClick={() => navigate('/book-demo')}
            >
              Book a Free Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="secondary"
              onClick={() => navigate('/case-study')}
            >
              View Success Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}