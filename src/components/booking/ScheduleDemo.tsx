import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../ui/Card';
import Button from '../ui/Button';

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function ScheduleDemo() {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="overflow-hidden">
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/teamflexai/30min"
          style={{ 
            minWidth: '320px',
            height: '700px',
            border: 'none'
          }}
        />
      </Card>

      <div className="text-center">
        <Button 
          variant="secondary" 
          onClick={() => navigate('/')}
        >
          Return to Homepage
        </Button>
      </div>
    </div>
  );
}