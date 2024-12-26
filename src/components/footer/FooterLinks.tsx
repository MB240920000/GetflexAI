import { Link } from 'react-router-dom';

interface FooterSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

const sections: FooterSection[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Benefits', href: '/benefits' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Case Study', href: '/case-study' }
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Support', href: '/support' },
      { label: 'How It Works', href: '/how-it-works' }
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' }
    ],
  }
];

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {sections.map((section) => (
        <div key={section.title}>
          <h4 className="text-white font-semibold mb-4">{section.title}</h4>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-gray-400 hover:text-[#0AE697] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}