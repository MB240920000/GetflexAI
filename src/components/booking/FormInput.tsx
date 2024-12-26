import { Check } from 'lucide-react';

interface FormInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  options?: Array<{value: string; label: string}>;
}

export default function FormInput({
  label,
  name,
  value,
  onChange,
  type = 'text',
  required = false,
  placeholder,
  options
}: FormInputProps) {
  const baseInputStyles = `
    w-full px-4 py-3 bg-black/30 rounded-lg 
    border border-[#0AE697]/20 
    focus:border-[#0AE697] focus:ring-1 
    focus:ring-[#0AE697] outline-none
    transition-all duration-300
    hover:border-[#0AE697]/40
    placeholder:text-gray-500
  `;

  return (
    <div className="relative group">
      <label 
        htmlFor={name} 
        className="block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-[#0AE697] transition-colors"
      >
        {label} {required && <span className="text-[#0AE697]">*</span>}
      </label>
      
      {options ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={baseInputStyles}
        >
          <option value="">{placeholder || `Select ${label.toLowerCase()}`}</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={baseInputStyles}
        />
      )}

      {value && (
        <div className="absolute right-3 top-9 text-[#0AE697]">
          <Check className="w-4 h-4" />
        </div>
      )}
    </div>
  );
}