import { PricingPlan } from '../types/pricing';

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    price: {
      monthly: 1500,
      yearly: 14400, // 20% discount
    },
    features: [
      {
        name: 'CRM Lead Capture Agent',
        tooltip: 'Automatically capture and organize customer information',
      },
      {
        name: 'Automated Appointment Agent',
        tooltip: 'Smart scheduling system with conflict resolution',
      },
      {
        name: 'Basic Customer Support Agent',
        tooltip: '24/7 automated response system',
      },
      { name: 'Basic Personalization' },
      { name: 'Interactive Dashboard' },
      { name: 'Email Support' },
    ],
  },
  {
    name: 'Growth',
    price: {
      monthly: 2100,
      yearly: 20160, // 20% discount
    },
    popular: true,
    features: [
      {
        name: 'Everything in Basic, plus:',
      },
      {
        name: 'Advanced Customer Support Agent',
        tooltip: 'Enhanced AI with natural language processing',
        exclusive: true,
      },
      {
        name: 'Advanced Personalization',
        tooltip: 'Dynamic content adaptation based on user behavior',
        exclusive: true,
      },
      {
        name: 'Data Analytics & Reporting',
        exclusive: true,
      },
      {
        name: 'Priority Support',
        exclusive: true,
      },
      {
        name: 'Custom Integrations',
        tooltip: 'Connect with your existing tools and systems',
        exclusive: true,
      },
    ],
  },
  {
    name: 'Premium',
    price: {
      monthly: 3100,
      yearly: 29760, // 20% discount
    },
    features: [
      {
        name: 'Everything in Growth, plus:',
      },
      {
        name: 'Custom AI Training',
        tooltip: 'AI models trained on your specific business data',
        exclusive: true,
      },
      {
        name: 'Advanced Analytics Suite',
        tooltip: 'Deep insights and predictive analytics',
        exclusive: true,
      },
      {
        name: 'Dedicated Account Manager',
        exclusive: true,
      },
      {
        name: 'Custom Feature Development',
        tooltip: 'Tailored solutions for your unique needs',
        exclusive: true,
      },
      {
        name: '24/7 Premium Support',
        exclusive: true,
      },
    ],
  },
];