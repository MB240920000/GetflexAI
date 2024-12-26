import Navigation from '../components/layout/Navigation';
import Footer from '../components/footer/Footer';
import PrivacyContent from '../components/legal/PrivacyContent';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-20">
        <PrivacyContent />
      </main>
      <Footer />
    </div>
  );
}