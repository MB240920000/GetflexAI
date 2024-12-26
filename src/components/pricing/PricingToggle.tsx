import { useState } from 'react';

interface PricingToggleProps {
  onChange: (isYearly: boolean) => void;
}

export default function PricingToggle({ onChange }: PricingToggleProps) {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
    onChange(!isYearly);
  };

  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      <span className={`text-sm ${!isYearly ? 'text-[#0AE697]' : 'text-gray-400'}`}>Monthly</span>
      <button
        onClick={handleToggle}
        className="relative w-14 h-7 bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none"
      >
        <div
          className={`w-5 h-5 bg-[#0AE697] rounded-full transition-transform duration-300 ${
            isYearly ? 'translate-x-7' : 'translate-x-0'
          }`}
        />
      </button>
      <div className="flex items-center gap-2">
        <span className={`text-sm ${isYearly ? 'text-[#0AE697]' : 'text-gray-400'}`}>Yearly</span>
        <span className="bg-[#0AE697]/10 text-[#0AE697] text-xs px-2 py-1 rounded-full">
          Save 20%
        </span>
      </div>
    </div>
  );
}