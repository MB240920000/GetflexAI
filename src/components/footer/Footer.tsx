import { Link } from 'react-router-dom';
import FooterLinks from './FooterLinks';
import FooterNewsletter from './FooterNewsletter';
import FooterSocial from './FooterSocial';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Link to="/" className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img 
                src="https://i.ibb.co/60nLH4X/Brown-White-Modern-Company-Logo.png" 
                alt="GetFlexAI" 
                className="w-12 h-12" // Increased from w-8 h-8
              />
              <span className="text-xl font-bold text-white">GetFlexAI</span>
            </Link>
            <p className="text-gray-400 max-w-md">
              Revolutionizing business operations with AI-powered automation. 
              Streamline your workflow and enhance customer engagement.
            </p>
            <FooterSocial />
          </div>
          <FooterNewsletter />
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <FooterLinks />
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} GetFlexAI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}