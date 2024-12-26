import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export default function FooterNewsletter() {
  const navigate = useNavigate();

  return (
    <div>
      <h4 className="text-2xl font-bold text-white mb-4">Empower Your Business Today</h4>
      <div className="space-y-4">
        <Button 
          variant="primary" 
          className="w-full md:w-auto"
          onClick={() => navigate('/book-demo')}
        >
          Request a Demo
          <ArrowRight className="w-5 h-5" />
        </Button>
        <Button 
          variant="secondary" 
          className="w-full md:w-auto"
          onClick={() => navigate('/about')}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}