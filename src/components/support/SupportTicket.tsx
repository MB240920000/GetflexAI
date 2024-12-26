import { useState } from 'react';
import Button from '../ui/Button';
import { saveSupportTicket } from '../../services/supportTickets';
import FormInput from '../booking/FormInput';
import type { SupportTicket } from '../../types/forms';

export default function SupportTicket() {
  const [form, setForm] = useState<Omit<SupportTicket, 'status' | 'createdAt'>>({
    name: '',
    email: '',
    subject: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await saveSupportTicket(form);
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', description: '' });
    } catch (error) {
      console.error('Error submitting ticket:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitted) {
    return (
      <div className="text-center p-6 bg-[#0AE697]/10 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Ticket Submitted Successfully!</h3>
        <p className="text-gray-400 mb-4">We'll get back to you as soon as possible.</p>
        <Button variant="secondary" onClick={() => setSubmitted(false)}>
          Submit Another Ticket
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <FormInput
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <FormInput
        label="Subject"
        name="subject"
        value={form.subject}
        onChange={handleChange}
        required
      />

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-2">
          Description <span className="text-[#0AE697]">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={6}
          required
          className="w-full px-4 py-2 bg-black/30 rounded-lg border border-[#0AE697]/20 
                   focus:border-[#0AE697] focus:ring-1 focus:ring-[#0AE697] outline-none"
          placeholder="Please describe your issue in detail..."
        />
      </div>

      <div className="flex justify-end">
        <Button 
          type="submit" 
          variant="primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Ticket'}
        </Button>
      </div>
    </form>
  );
}