import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Card from '../ui/Card';

export default function CTA() {
  const navigate = useNavigate();
  
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4">
        <Card className="text-center" hover={false}>
          <h2 className="text-4xl font-bold text-white mb-8">
            Empower Your Business Today
          </h2>
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button 
              variant="primary"
              onClick={() => navigate('/book-demo')}
            >
              Request a Demo
            </Button>
            <Button 
              variant="secondary"
              onClick={() => navigate('/how-it-works')}
            >
              Learn More
            </Button>
          </div>
          
          <div className="mt-12">
            <div className="relative max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-4 rounded-full bg-black/30 text-white border border-[#0AE697]/20 focus:border-[#0AE697] focus:ring-1 focus:ring-[#0AE697] outline-none"
              />
              <Button 
                variant="primary"
                className="absolute right-2 top-2"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}