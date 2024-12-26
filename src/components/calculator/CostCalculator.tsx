import { useState } from 'react';
import { Calculator } from 'lucide-react';
import CostInputs from './CostInputs';
import SavingsResults from './SavingsResults';
import { calculateSavings } from '../../utils/calculatorUtils';
import type { CostInputData } from '../../types/calculator';

export default function CostCalculator() {
  const [costs, setCosts] = useState<CostInputData>({
    customerServiceStaff: 2,
    avgSalary: 35000,
    monthlyCustomers: 500,
    avgResponseTime: 30,
    missedLeads: 20
  });

  const savings = calculateSavings(costs);

  return (
    <section className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Calculator className="w-16 h-16 text-[#0AE697] mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">
            Calculate Your <span className="text-[#0AE697]">AI Savings</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how much you could save by implementing our AI solutions in your fitness business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <CostInputs costs={costs} onChange={setCosts} />
          <SavingsResults savings={savings} />
        </div>
      </div>
    </section>
  );
}