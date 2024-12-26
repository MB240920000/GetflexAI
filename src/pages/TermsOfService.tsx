import Navigation from '../components/layout/Navigation';
import Footer from '../components/footer/Footer';
import TermsContent from '../components/legal/TermsContent';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-20">
        <TermsContent />
      </main>
      <Footer />
    </div>
  );
}