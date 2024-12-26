import { Mail, Phone } from 'lucide-react';
import Card from '../ui/Card';

const contactOptions = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email within 24 hours",
    action: "Send Email",
    link: "mailto:teamflexai@gmail.com"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Available Mon-Fri, 9am-5pm EST",
    action: "Call Us",
    link: "tel:+33680558560",
    isPhone: true
  }
];

export default function ContactOptions() {
  const handleOptionClick = (option: typeof contactOptions[0]) => {
    if ('link' in option) {
      window.location.href = option.link;
    }
  };

  return (
    <section className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {contactOptions.map((option, index) => (
            <Card key={index}>
              <option.icon className="w-12 h-12 text-[#0AE697] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p className="text-gray-400 mb-6">{option.description}</p>
              {option.action && (
                <button
                  onClick={() => handleOptionClick(option)}
                  className="inline-flex items-center gap-2 text-[#0AE697] hover:underline"
                >
                  {option.action}
                </button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}