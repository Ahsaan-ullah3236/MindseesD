// components/DropdownMultiSelect.tsx
import { useState, useRef, useEffect } from 'react';

type Option = {
  id: string;
  label: string;
  checked: boolean;
};

type DropdownMultiSelectProps = {
  options: Option[];
  onChange: (selectedOptions: Option[]) => void;
  placeholder?: string;
};

export default function DropdownMultiSelect({
  options: initialOptions,
  
  onChange,
  placeholder = 'Select options...',
}: DropdownMultiSelectProps) {
  const [options, setOptions] = useState<Option[]>(initialOptions);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCount = options.filter((opt) => opt.checked).length;
//   const selectedLabels = options.filter((opt) => opt.checked).map((opt) => opt.label);

  const handleCheckboxChange = (id: string) => {
    const updatedOptions = options.map((option) =>
      option.id === id ? { ...option, checked: !option.checked } : option
    );
    setOptions(updatedOptions);
    onChange(updatedOptions.filter((opt) => opt.checked));
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

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
        <span className=" text-gray-500 text-sm">
          {selectedCount > 0 ? `${selectedCount} options selected` : placeholder}
         
        </span>
        <svg
            className={`w-5 h-5 ml-1 transition-transform bg-gray-40 duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
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
          <div className="space-y-2 p-2">
            {options.map((option) => (
              <label
                key={option.id}
                className="flex items-center px-3 py-1 hover:bg-gray-100 rounded cursor-pointer"
              >
                <input
                  type="checkbox"
                  required
                  checked={option.checked}
                  onChange={() => handleCheckboxChange(option.id)}
                  className="h-3 w-4 rounded border-gray-300 text-[#ffffff] accent-[#818087] focus:ring-[#818087]"
                />
                <span className="ml-3 text-sm text-gray-900">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}