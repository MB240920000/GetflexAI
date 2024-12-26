import { useEffect, useRef } from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ children, className = '' }: SectionWrapperProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const particles = particlesRef.current;
    if (!section || !particles) return;

    // Create floating particles
    const createParticles = () => {
      particles.innerHTML = '';
      const count = 20;
      for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        particles.appendChild(particle);
      }
    };

    // Track mouse movement for gradient effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      section.style.setProperty('--mouse-x', `${x}%`);
      section.style.setProperty('--mouse-y', `${y}%`);
    };

    createParticles();
    section.addEventListener('mousemove', handleMouseMove);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`section-transition relative ${className}`}
    >
      <div ref={particlesRef} className="floating-particles" />
      <div className="bg-animate" />
      <div className="wave-divider" />
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}