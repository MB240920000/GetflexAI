import { useState } from 'react';
import Card from '../ui/Card';

export default function ROICalculator() {
  const [monthlyCustomers, setMonthlyCustomers] = useState(100);
  const [avgTicketValue, setAvgTicketValue] = useState(50);

  const potentialSavings = monthlyCustomers * avgTicketValue * 0.2; // 20% efficiency gain

  return (
    <section className="py-20 bg-black/30">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Calculate Your <span className="text-[#0AE697]">ROI</span>
        </h2>
        
        <Card>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Monthly Customers
              </label>
              <input
                type="number"
                value={monthlyCustomers}
                onChange={(e) => setMonthlyCustomers(Number(e.target.value))}
                className="w-full px-4 py-2 bg-black/50 border border-[#0AE697]/20 rounded-lg focus:border-[#0AE697] focus:ring-1 focus:ring-[#0AE697] outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                Average Ticket Value ($)
              </label>
              <input
                type="number"
                value={avgTicketValue}
                onChange={(e) => setAvgTicketValue(Number(e.target.value))}
                className="w-full px-4 py-2 bg-black/50 border border-[#0AE697]/20 rounded-lg focus:border-[#0AE697] focus:ring-1 focus:ring-[#0AE697] outline-none"
              />
            </div>
            
            <div className="pt-6 border-t border-gray-800">
              <h3 className="text-xl font-semibold mb-2">Potential Monthly Savings</h3>
              <p className="text-3xl font-bold text-[#0AE697]">
                ${potentialSavings.toLocaleString()}
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Based on average efficiency gains from our AI implementation
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}