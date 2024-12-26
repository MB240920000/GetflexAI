import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`
      fixed top-0 w-full z-50 transition-all duration-300
      ${isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'}
    `}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://i.ibb.co/60nLH4X/Brown-White-Modern-Company-Logo.png" 
              alt="GetFlexAI" 
              className="w-16 h-16" // Increased from w-8 h-8
            />
            <span className="text-xl font-bold text-white">GetFlexAI</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
            <Button variant="primary" onClick={() => navigate('/book-demo')}>
              Book Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6">
            <NavLinks mobile />
            <Button 
              variant="primary" 
              className="w-full mt-4"
              onClick={() => {
                navigate('/book-demo');
                setIsMenuOpen(false);
              }}
            >
              Book Demo
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const links = [
    { href: '/features', label: 'Features' },
    { href: '/benefits', label: 'Benefits' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/support', label: 'Support' }
  ];

  return (
    <div className={`${mobile ? 'flex flex-col gap-4' : 'flex items-center gap-8'}`}>
      {links.map(link => (
        <Link
          key={link.href}
          to={link.href}
          className="text-gray-300 hover:text-[#0AE697] transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}