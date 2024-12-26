interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick 
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-all duration-300';
  const variants = {
    primary: 'bg-[#0AE697] text-black hover:bg-[#0AE697]/90',
    secondary: 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}