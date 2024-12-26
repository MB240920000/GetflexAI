import { Search } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery); // Real-time search as user types
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-8">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for help articles..."
          className="w-full px-6 py-4 bg-black/30 rounded-full border border-[#0AE697]/20 
                   focus:border-[#0AE697] focus:ring-1 focus:ring-[#0AE697] outline-none
                   text-white placeholder-gray-400 pr-12"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#0AE697] rounded-full
                   hover:bg-[#0AE697]/90 transition-colors"
        >
          <Search className="w-5 h-5 text-black" />
        </button>
      </div>
    </form>
  );
}