interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`
      bg-black/50 backdrop-blur-lg
      border border-[#0AE697]/10
      rounded-xl p-6
      ${hover ? 'hover-card' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
}