import { DollarSign, Clock, Users } from 'lucide-react';
import Card from '../ui/Card';
import type { SavingsData } from '../../types/calculator';

interface SavingsResultsProps {
  savings: SavingsData;
}

export default function SavingsResults({ savings }: SavingsResultsProps) {
  return (
    <div className="space-y-6">
      <Card className="text-center">
        <DollarSign className="w-12 h-12 text-[#0AE697] mx-auto mb-4" />
        <div className="text-4xl font-bold text-[#0AE697] mb-2">
          ${savings.annualSavings.toLocaleString()}
        </div>
        <div className="text-xl mb-4">Potential Annual Savings</div>
        <p className="text-gray-400">
          By implementing our AI solutions, you could save significantly on operational costs
          while improving service quality.
        </p>
      </Card>

      <div className="grid grid-cols-2 gap-6">
        <Card className="text-center">
          <Clock className="w-8 h-8 text-[#0AE697] mx-auto mb-4" />
          <div className="text-2xl font-bold text-[#0AE697] mb-2">
            {savings.responseTimeImprovement}%
          </div>
          <div className="text-sm text-gray-400">
            Response Time Improvement
          </div>
        </Card>

        <Card className="text-center">
          <Users className="w-8 h-8 text-[#0AE697] mx-auto mb-4" />
          <div className="text-2xl font-bold text-[#0AE697] mb-2">
            {savings.leadCapture}%
          </div>
          <div className="text-sm text-gray-400">
            Lead Capture Improvement
          </div>
        </Card>
      </div>
    </div>
  );
}