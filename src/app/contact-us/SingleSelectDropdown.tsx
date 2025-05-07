// components/SingleSelectDropdown.tsx
import { useState, useRef, useEffect } from 'react';

type Option = {
  id: string;
  label: string;
};

type SingleSelectDropdownProps = {
  options: Option[];
  selectedOption: Option | null;
  onChange: (selectedOption: Option | null) => void;
  placeholder?: string;
};

export default function SingleSelectDropdown({
  options,
  selectedOption,
  onChange,
  placeholder = 'Select an option...',
}: SingleSelectDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: Option) => {
    if (selectedOption?.id === option.id) {
      // Clicking the selected option again will unselect it
      onChange(null);
    } else {
      // Select a new option
      onChange(option);
    }
    setIsOpen(false); // Close dropdown after selection
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex justify-between items-center w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300"
      >
        <span className="truncate text-gray-500 text-sm">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`w-5 h-5 ml-1 transition-transform duration-200 bg-gray-40 ${isOpen ? 'transform rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none overflow-auto scrollbar-hide">
          <div className="space-y-1">
            {options.map((option) => (
              <div
                key={option.id}
                
                onClick={() => handleOptionClick(option)}
                className={`px-3 py-2 hover:bg-gray-100 rounded cursor-pointer flex items-center ${
                  selectedOption?.id === option.id ? '' : ''
                }`}
              >
                <div className="flex items-center">
                  <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${
                    selectedOption?.id === option.id 
                      ? 'border-gray-400 bg-gray-600' 
                      : 'border-gray-300'
                  }`}>
                    {selectedOption?.id === option.id && (
                      <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                    )}
                  </div>
                  <span className="ml-3 text-sm text-gray-900">{option.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}