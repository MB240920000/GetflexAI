import { Youtube, Twitter, Linkedin } from 'lucide-react';

const socialLinks = [
  { 
    icon: Twitter, 
    href: 'https://x.com/GetflexAi', 
    label: 'X (Twitter)' 
  },
  { 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/in/getflex-ai-36035b325/', 
    label: 'LinkedIn' 
  },
  { 
    icon: Youtube, 
    href: 'https://www.youtube.com/@FlexAI-i1c', 
    label: 'YouTube' 
  }
];

export default function FooterSocial() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#0AE697] transition-colors"
          aria-label={link.label}
        >
          <link.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}