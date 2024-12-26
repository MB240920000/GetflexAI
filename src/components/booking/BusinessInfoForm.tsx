import { useState } from 'react';
import { Building2, Mail, Phone, Globe, Users } from 'lucide-react';
import Button from '../ui/Button';
import { saveBusinessInfo } from '../../services/businessInfo';
import type { BusinessInfo } from '../../types/forms';
import FormInput from './FormInput';
import Card from '../ui/Card';

const industries = [
  { value: 'gym', label: 'Gym & Fitness Center' },
  { value: 'yoga', label: 'Yoga Studio' },
  { value: 'wellness', label: 'Wellness Center' },
  { value: 'health', label: 'Health Club' },
  { value: 'personal', label: 'Personal Training' },
  { value: 'other', label: 'Other' }
];

const businessSizes = [
  { value: '1-10', label: '1-10 employees' },
  { value: '11-50', label: '11-50 employees' },
  { value: '51-200', label: '51-200 employees' },
  { value: '201+', label: '201+ employees' }
];

interface BusinessInfoFormProps {
  onNext: (data: any) => void;
}

export default function BusinessInfoForm({ onNext }: BusinessInfoFormProps) {
  const [formData, setFormData] = useState<Omit<BusinessInfo, 'createdAt'>>({
    businessName: '',
    industry: '',
    size: '',
    website: '',
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await saveBusinessInfo(formData);
      onNext({ businessInfo: formData });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Tell Us About Your Business</h2>
          <p className="text-gray-400">Help us understand your needs better</p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-2 border-b border-[#0AE697]/10">
            <Building2 className="w-5 h-5 text-[#0AE697]" />
            <h3 className="font-medium">Business Details</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FormInput
              label="Business Name"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
            />
            
            <FormInput
              label="Industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              options={industries}
              required
            />
            
            <FormInput
              label="Business Size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              options={businessSizes}
              required
            />
            
            <FormInput
              label="Website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              type="url"
              placeholder="https://"
              icon={Globe}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-2 border-b border-[#0AE697]/10">
            <Users className="w-5 h-5 text-[#0AE697]" />
            <h3 className="font-medium">Contact Information</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FormInput
              label="Contact Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            
            <FormInput
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              icon={Mail}
            />
            
            <FormInput
              label="Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              icon={Phone}
            />
          </div>
        </div>

        <div className="flex justify-end pt-6">
          <Button 
            type="submit" 
            variant="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : 'Next Step'}
          </Button>
        </div>
      </form>
    </Card>
  );
}