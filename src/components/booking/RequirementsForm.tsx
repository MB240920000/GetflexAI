import { useState } from 'react';
import Button from '../ui/Button';
import { saveRequirements } from '../../services/requirements';
import type { Requirements } from '../../types/forms';

interface RequirementsFormProps {
  onNext: (data: any) => void;
}

const features = [
  "24/7 AI Customer Support",
  "Automated Appointment Scheduling",
  "Lead Generation & Capture",
  "Personalized Customer Interactions",
  "Analytics & Reporting",
  "Multi-language Support",
  "Integration with Existing Systems",
  "Custom AI Training"
];

export default function RequirementsForm({ onNext }: RequirementsFormProps) {
  const [formData, setFormData] = useState<Omit<Requirements, 'createdAt'>>({
    features: [],
    challenges: '',
    expectedOutcome: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await saveRequirements(formData);
      onNext({ requirements: formData });
    } catch (error) {
      console.error('Error submitting requirements:', error);
    }
  };

  const toggleFeature = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Select Features of Interest</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {features.map(feature => (
            <label
              key={feature}
              className="flex items-center gap-3 p-4 rounded-lg border border-[#0AE697]/20 
                       cursor-pointer hover:bg-[#0AE697]/5"
            >
              <input
                type="checkbox"
                checked={formData.features.includes(feature)}
                onChange={() => toggleFeature(feature)}
                className="w-4 h-4 rounded border-[#0AE697]/20 text-[#0AE697]"
              />
              <span>{feature}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Current Business Challenges
        </label>
        <textarea
          value={formData.challenges}
          onChange={e => setFormData(prev => ({ ...prev, challenges: e.target.value }))}
          rows={4}
          className="w-full px-4 py-2 bg-black/30 rounded-lg border border-[#0AE697]/20 
                   focus:border-[#0AE697] focus:ring-1 focus:ring-[#0AE697] outline-none"
          placeholder="Describe the challenges you're looking to solve..."
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Expected Outcomes
        </label>
        <textarea
          value={formData.expectedOutcome}
          onChange={e => setFormData(prev => ({ ...prev, expectedOutcome: e.target.value }))}
          rows={4}
          className="w-full px-4 py-2 bg-black/30 rounded-lg border border-[#0AE697]/20 
                   focus:border-[#0AE697] focus:ring-1 focus:ring-[#0AE697] outline-none"
          placeholder="What results are you hoping to achieve?"
          required
        />
      </div>

      <div className="flex justify-end pt-6">
        <Button type="submit" variant="primary">
          Next Step
        </Button>
      </div>
    </form>
  );
}