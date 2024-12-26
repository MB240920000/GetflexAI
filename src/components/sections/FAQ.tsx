import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What makes GetFlexAI different from other AI solutions?",
    answer: "GetFlexAI is specifically designed for health and wellness businesses, offering specialized features like AI-powered customer support, automated scheduling, and personalized client interactions. Our solution understands the unique challenges of the wellness industry and provides tailored automation that enhances both operational efficiency and client experience."
  },
  {
    question: "How quickly can I implement GetFlexAI in my business?",
    answer: "Implementation typically takes 1-2 weeks, including setup, customization, and team training. Our dedicated onboarding specialists ensure a smooth transition with minimal disruption to your operations. We handle all the technical aspects while you focus on your business."
  },
  {
    question: "What kind of ROI can I expect?",
    answer: "Our clients typically see a 30% reduction in operational costs within the first 3 months, along with a 40% increase in customer engagement. The AI automation handles routine tasks 24/7, allowing your team to focus on high-value activities while improving customer satisfaction."
  },
  {
    question: "Is GetFlexAI secure and compliant with privacy regulations?",
    answer: "Yes, GetFlexAI is built with enterprise-grade security and complies with HIPAA, GDPR, and other relevant privacy regulations. We use end-to-end encryption, regular security audits, and strict data access controls to ensure your business and customer data remains protected."
  },
  {
    question: "Can GetFlexAI integrate with my existing software?",
    answer: "Yes, GetFlexAI seamlessly integrates with popular business management software, scheduling systems, and CRM platforms. We support integration with tools like Mindbody, Zendesk, Salesforce, and many others. Custom integrations are also available for specific needs."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-black/30">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Frequently Asked <span className="text-[#0AE697]">Questions</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Get answers to common questions about how GetFlexAI can transform your health and wellness business
        </p>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#0AE697]/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#0AE697]/40"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-[#0AE697] flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-[#0AE697] flex-shrink-0" />
                )}
              </button>
              
              <div
                className={`
                  overflow-hidden transition-all duration-300
                  ${openIndex === index ? 'max-h-96' : 'max-h-0'}
                `}
              >
                <div className="p-6 pt-0 text-gray-400">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}