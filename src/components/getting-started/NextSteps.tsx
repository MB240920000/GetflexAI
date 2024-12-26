import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

export default function NextSteps() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-black/30">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-gray-400 mb-8">
          Now that you're familiar with GetFlexAI, take the next step in transforming your business
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="primary"
            onClick={() => navigate('/book-demo')}
          >
            Book a Demo
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button 
            variant="secondary"
            onClick={() => navigate('/support')}
          >
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
}