import { Check } from 'lucide-react';

interface BookingStepsProps {
  currentStep: number;
}

const steps = [
  'Business Info',
  'Requirements',
  'Schedule Demo'
];

export default function BookingSteps({ currentStep }: BookingStepsProps) {
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 relative">
              <div className="flex flex-col items-center">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${index + 1 < currentStep ? 'bg-[#0AE697]' : 
                    index + 1 === currentStep ? 'bg-[#0AE697]/20 border-2 border-[#0AE697]' : 
                    'bg-gray-800'}
                `}>
                  {index + 1 < currentStep ? (
                    <Check className="w-6 h-6 text-black" />
                  ) : (
                    <span className={index + 1 === currentStep ? 'text-[#0AE697]' : 'text-gray-400'}>
                      {index + 1}
                    </span>
                  )}
                </div>
                <span className={`
                  mt-2 text-sm
                  ${index + 1 === currentStep ? 'text-[#0AE697]' : 'text-gray-400'}
                `}>
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`
                  absolute top-5 left-1/2 w-full h-[2px]
                  ${index + 1 < currentStep ? 'bg-[#0AE697]' : 'bg-gray-800'}
                `} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}