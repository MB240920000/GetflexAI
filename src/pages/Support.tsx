import { useState } from 'react';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/footer/Footer';
import SupportHero from '../components/support/SupportHero';
import FAQ from '../components/support/FAQ';
import ContactOptions from '../components/support/ContactOptions';
import KnowledgeBase from '../components/support/KnowledgeBase';
import LiveChat from '../components/support/LiveChat';
import SupportTicket from '../components/support/SupportTicket';

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-20">
        <SupportHero onSearch={setSearchQuery} />
        <FAQ searchQuery={searchQuery} />
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Submit a Ticket</h2>
            <SupportTicket />
          </div>
        </section>
        <ContactOptions />
        <KnowledgeBase />
      </main>
      <LiveChat />
      <Footer />
    </div>
  );
}