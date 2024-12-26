import { Info } from 'lucide-react';
import { useState } from 'react';

interface FeatureTooltipProps {
  text: string;
}

export default function FeatureTooltip({ text }: FeatureTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block ml-1">
      <Info
        className="w-4 h-4 text-gray-400 cursor-help inline-block"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      />
      {isVisible && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg w-48 shadow-xl z-10">
          {text}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800" />
        </div>
      )}
    </div>
  );
}