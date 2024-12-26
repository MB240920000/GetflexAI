import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "How does the AI customer support work?",
    answer: "Our AI customer support system uses advanced natural language processing to understand and respond to customer inquiries 24/7. It learns from interactions to provide increasingly accurate and helpful responses.",
    tags: ["ai", "support", "customer service", "automation"]
  },
  {
    question: "What kind of businesses can benefit from GetFlexAI?",
    answer: "GetFlexAI is designed for health and wellness businesses of all sizes, including gyms, fitness studios, wellness centers, and health clinics. Our solutions are customizable to meet your specific needs.",
    tags: ["business", "fitness", "wellness", "customization"]
  },
  {
    question: "How secure is my business data?",
    answer: "We implement enterprise-grade security measures, including end-to-end encryption and regular security audits. Your data is stored in secure, compliant facilities with strict access controls.",
    tags: ["security", "data", "privacy", "encryption"]
  },
  {
    question: "Can I integrate GetFlexAI with my existing systems?",
    answer: "Yes, GetFlexAI offers seamless integration with popular business management software, scheduling systems, and CRM platforms. Our team can help you set up custom integrations as needed.",
    tags: ["integration", "software", "crm", "customization"]
  },
  {
    question: "How long does it take to implement GetFlexAI?",
    answer: "Implementation typically takes 1-2 weeks, including setup, customization, and team training. Our dedicated onboarding specialists ensure a smooth transition with minimal disruption to your operations.",
    tags: ["implementation", "setup", "training", "onboarding"]
  },
  {
    question: "What kind of ROI can I expect?",
    answer: "Most businesses see a 30-40% reduction in operational costs within the first 3 months, along with a 50% increase in customer engagement. The AI handles routine tasks 24/7, allowing your team to focus on high-value activities.",
    tags: ["roi", "costs", "efficiency", "benefits"]
  },
  {
    question: "How does the AI handle multiple languages?",
    answer: "Our AI system supports multiple languages and can automatically detect and respond in the customer's preferred language. This helps you serve a diverse client base effectively.",
    tags: ["languages", "international", "support", "communication"]
  },
  {
    question: "What happens if the AI can't handle a request?",
    answer: "The AI is designed to recognize when a human touch is needed and will smoothly transfer the conversation to your staff. It maintains context and history for seamless handoffs.",
    tags: ["handoff", "support", "escalation", "human"]
  },
  {
    question: "How customizable is the AI's personality?",
    answer: "Highly customizable! You can adjust the AI's tone, language style, and responses to match your brand voice. We help you configure these settings during implementation.",
    tags: ["customization", "branding", "personality", "configuration"]
  },
  {
    question: "What kind of analytics and reporting is available?",
    answer: "Our comprehensive analytics dashboard provides insights into customer interactions, response times, satisfaction rates, and business metrics. You can track performance and identify areas for improvement.",
    tags: ["analytics", "reporting", "metrics", "insights"]
  },
  {
    question: "How does the AI handle appointment scheduling?",
    answer: "The AI manages your entire scheduling system, handling bookings, cancellations, and rescheduling. It considers your business rules, staff availability, and resource constraints automatically.",
    tags: ["scheduling", "appointments", "automation", "booking"]
  },
  {
    question: "What support do you provide after implementation?",
    answer: "We offer 24/7 technical support, regular system updates, and ongoing optimization assistance. Our team is always available to help you maximize the value of your AI implementation.",
    tags: ["support", "maintenance", "updates", "assistance"]
  }
];

interface FAQProps {
  searchQuery?: string;
}

export default function FAQ({ searchQuery = '' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Filter FAQs based on search query
  const filteredFaqs = faqs.filter(faq => {
    const searchLower = searchQuery.toLowerCase();
    return (
      faq.question.toLowerCase().includes(searchLower) ||
      faq.answer.toLowerCase().includes(searchLower) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  });

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
          {searchQuery && (
            <span className="block text-lg text-gray-400 mt-2">
              {filteredFaqs.length} results for "{searchQuery}"
            </span>
          )}
        </h2>
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#0AE697]/20 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-[#0AE697]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#0AE697]" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-gray-400">
                  {faq.answer}
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {faq.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-[#0AE697]/10 text-[#0AE697] rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          {filteredFaqs.length === 0 && (
            <div className="text-center text-gray-400 py-8">
              No results found for "{searchQuery}". Try different keywords or contact our support team.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}