import { useState } from 'react';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/footer/Footer';
import BookingSteps from '../components/booking/BookingSteps';
import BusinessInfoForm from '../components/booking/BusinessInfoForm';
import RequirementsForm from '../components/booking/RequirementsForm';
import ScheduleDemo from '../components/booking/ScheduleDemo';

export default function BookDemo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessInfo: {},
    requirements: {}
  });

  const nextStep = (data: any) => {
    setFormData(prev => ({ ...prev, ...data }));
    setStep(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-20 pb-32">
        <div className="max-w-4xl mx-auto px-4">
          <BookingSteps currentStep={step} />
          
          {step === 1 && <BusinessInfoForm onNext={nextStep} />}
          {step === 2 && <RequirementsForm onNext={nextStep} />}
          {step === 3 && <ScheduleDemo />}
        </div>
      </main>
      <Footer />
    </div>
  );
}