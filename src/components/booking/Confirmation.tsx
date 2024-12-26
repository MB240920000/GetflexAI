import { Calendar, Check } from 'lucide-react';
import Button from '../ui/Button';

interface ConfirmationProps {
  data: any;
}

export default function Confirmation({ data }: ConfirmationProps) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="w-20 h-20 bg-[#0AE697]/20 rounded-full flex items-center justify-center mx-auto mb-8">
        <Check className="w-10 h-10 text-[#0AE697]" />
      </div>
      
      <h2 className="text-3xl font-bold mb-4">Demo Scheduled!</h2>
      <p className="text-gray-400 mb-8">
        We're excited to show you how GetFlexAI can transform your business.
      </p>

      <div className="bg-[#0AE697]/10 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-center gap-3 text-[#0AE697] mb-4">
          <Calendar className="w-6 h-6" />
          <span className="font-semibold">
            {new Date(data.schedule.date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
          <span className="font-semibold">
            {data.schedule.time} {data.schedule.timezone}
          </span>
        </div>
        <p className="text-sm text-gray-400">
          A calendar invitation has been sent to {data.businessInfo.email}
        </p>
      </div>

      <div className="space-y-4">
        <Button variant="primary" onClick={() => window.location.href = '/'}>
          Return to Homepage
        </Button>
        <p className="text-sm text-gray-400">
          Need to reschedule? <a href="/support" className="text-[#0AE697] hover:underline">Contact support</a>
        </p>
      </div>
    </div>
  );
}