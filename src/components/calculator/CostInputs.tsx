import type { CostInputData } from '../../types/calculator';
import { useState } from 'react';

interface CostInputsProps {
  costs: CostInputData;
  onChange: (costs: CostInputData) => void;
}

export default function CostInputs({ costs, onChange }: CostInputsProps) {
  const [inputValues, setInputValues] = useState<Partial<Record<keyof CostInputData, string>>>({});

  const handleChange = (key: keyof CostInputData, value: string) => {
    setInputValues(prev => ({
      ...prev,
      [key]: value
    }));

    onChange({
      ...costs,
      [key]: value === '' ? 0 : parseInt(value) || 0
    });
  };

  const getDisplayValue = (key: keyof CostInputData) => {
    return inputValues[key] !== undefined ? inputValues[key] : costs[key] || '';
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">
          Number of Customer Service Staff
        </label>
        <input
          type="number"
          min="0"
          value={getDisplayValue('customerServiceStaff')}
          onChange={(e) => handleChange('customerServiceStaff', e.target.value)}
          className="w-full px-4 py-2 bg-black/30 rounded-lg border border-[#0AE697]/20 
                   focus:border-[#0AE697] focus:ring-1 focus:ring-[#0AE697] outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Average Annual Salary per Staff ($)
        </label>
        <input
          type="number"
          min="0"
          value={getDisplayValue('avgSalary')}
          onChange={(e) => handleChange('avgSalary', e.target.value)}
          className="w-full px-4 py-2 bg-black/30 rounded-lg border border-[#0AE697]/20 
                   focus:border-[#0AE697] focus:ring-1 focus:ring-[#0AE697] outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Monthly Customer Interactions
        </label>
        <input
          type="number"
          min="0"
          value={getDisplayValue('monthlyCustomers')}
          onChange={(e) => handleChange('monthlyCustomers', e.target.value)}
          className="w-full px-4 py-2 bg-black/30 rounded-lg border border-[#0AE697]/20 
                   focus:border-[#0AE697] focus:ring-1 focus:ring-[#0AE697] outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Average Response Time (minutes)
        </label>
        <input
          type="number"
          min="0"
          value={getDisplayValue('avgResponseTime')}
          onChange={(e) => handleChange('avgResponseTime', e.target.value)}
          className="w-full px-4 py-2 bg-black/30 rounded-lg border border-[#0AE697]/20 
                   focus:border-[#0AE697] focus:ring-1 focus:ring-[#0AE697] outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Monthly Missed Lead Opportunities
        </label>
        <input
          type="number"
          min="0"
          value={getDisplayValue('missedLeads')}
          onChange={(e) => handleChange('missedLeads', e.target.value)}
          className="w-full px-4 py-2 bg-black/30 rounded-lg border border-[#0AE697]/20 
                   focus:border-[#0AE697] focus:ring-1 focus:ring-[#0AE697] outline-none"
        />
      </div>
    </div>
  );
}