import { Check, Star } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import FeatureTooltip from './FeatureTooltip';
import { PricingFeature } from '../../types/pricing';

interface PricingCardProps {
  name: string;
  price: { monthly: number; yearly: number };
  features: PricingFeature[];
  isPopular?: boolean;
  isYearly: boolean;
}

export default function PricingCard({
  name,
  price,
  features,
  isPopular,
  isYearly,
}: PricingCardProps) {
  const currentPrice = isYearly ? price.yearly : price.monthly;

  return (
    <Card
      className={`
        relative flex flex-col h-full transform transition-all duration-300
        hover:scale-105 hover:shadow-2xl
        ${isPopular ? 'border-[#0AE697] border-2' : ''}
      `}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-[#0AE697] text-black px-4 py-1 rounded-full">
          <Star className="w-4 h-4" />
          <span className="text-sm font-medium">Most Popular</span>
        </div>
      )}

      <div className="text-center p-6 border-b border-gray-800">
        <h3 className="text-xl font-bold mb-4">{name}</h3>
        <div className="flex justify-center items-baseline gap-1 mb-1">
          <span className="text-2xl">$</span>
          <span className="text-5xl font-bold">{currentPrice}</span>
          <span className="text-gray-400">/{isYearly ? 'year' : 'month'}</span>
        </div>
        {isYearly && (
          <div className="text-[#0AE697] text-sm mt-2">
            Save ${(price.monthly * 12 - price.yearly).toLocaleString()}
          </div>
        )}
      </div>

      <div className="flex-grow p-6">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className={`w-5 h-5 mt-0.5 ${feature.exclusive ? 'text-[#0AE697]' : 'text-gray-400'}`} />
              <span className="text-gray-300">
                {feature.name}
                {feature.tooltip && <FeatureTooltip text={feature.tooltip} />}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 pt-0">
        <Button
          variant={isPopular ? 'primary' : 'secondary'}
          className="w-full"
        >
          Get Started
        </Button>
        <div className="text-center text-sm text-gray-400 mt-4">
          30-day money-back guarantee
        </div>
      </div>
    </Card>
  );
}