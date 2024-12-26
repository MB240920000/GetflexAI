import { useState } from 'react';
import { Shield, Zap, Crown, Check, Info } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const plans = [
  {
    name: "Basic",
    icon: Shield,
    description: "Perfect for businesses starting with AI automation",
    price: 1500,
    type: "One-Time Payment",
    features: [
      "CRM Lead Capture Agent",
      "Automated Appointment Agent",
      "Basic Customer Support Agent",
      "Basic Personalization",
      "Setup and Review Process"
    ],
    highlight: "Simple and effective for foundational automation",
    checkoutUrl: "https://buy.stripe.com/8wM2cb3kN04p4bS4gg"
  },
  {
    name: "Growth",
    icon: Zap,
    description: "Ideal for businesses ready to enhance customer engagement",
    price: 2100,
    setupFee: 3000,
    type: "/month",
    popular: true,
    features: [
      "Everything in Basic, plus:",
      "Trained Customer Support Agent",
      "Advanced Personalization",
      "Interactive Personal Dashboard",
      "Monthly System Monitoring",
      "Integration Capabilities"
    ],
    highlight: "Most popular choice for growing businesses",
    checkoutUrl: "https://buy.stripe.com/5kA3gfaNf3gBeQw8wx"
  },
  {
    name: "Premium",
    icon: Crown,
    description: "For businesses needing full-scale AI integration",
    price: 3100,
    setupFee: 5000,
    type: "/month",
    features: [
      "Everything in Growth, plus:",
      "Intelligent CRM Lead Capture",
      "Advanced Customer Service AI",
      "Full Branding Personalization",
      "Targeted Email Marketing",
      "Advanced Security & Audits"
    ],
    highlight: "Complete solution for maximum impact",
    checkoutUrl: "https://buy.stripe.com/4gw3gfg7z3gBfUA5km"
  }
];

export default function PricingSection() {
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const handleGetStarted = (checkoutUrl: string) => {
    window.location.href = checkoutUrl;
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,230,151,0.1)_0%,transparent_100%)]" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Pricing Plans for Every <span className="text-[#0AE697]">Business</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan to transform your business with AI-powered automation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`relative ${plan.popular ? 'border-[#0AE697] border-2' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0AE697] text-black px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <plan.icon className="w-12 h-12 text-[#0AE697] mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              <div className="text-center mb-6">
                <div className="text-4xl font-bold mb-2">
                  ${plan.price.toLocaleString()}
                </div>
                <div className="text-sm text-gray-400 mb-2">{plan.type}</div>
                {plan.setupFee && (
                  <div className="text-sm text-[#0AE697]">
                    + ${plan.setupFee.toLocaleString()} one-time build fee
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0AE697] mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="relative">
                <Button
                  variant={plan.popular ? 'primary' : 'secondary'}
                  className="w-full"
                  onClick={() => handleGetStarted(plan.checkoutUrl)}
                >
                  Get Started
                </Button>
                
                <div 
                  className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400"
                  onMouseEnter={() => setShowTooltip(plan.name)}
                  onMouseLeave={() => setShowTooltip(null)}
                >
                  <Info className="w-4 h-4" />
                  <span>{plan.highlight}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            All plans include 24/7 support and a 30-day satisfaction guarantee
          </p>
        </div>
      </div>
    </section>
  );
}