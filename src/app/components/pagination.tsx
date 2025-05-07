// components/Pagination.tsx
import React from 'react';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onBack: () => void;
}
const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onNext,onBack  }) => {
    console.log("currentPage", currentPage)
    console.log("totalPages", totalPages )
  return (
    <div className="flex items-center justify-between px-8 py-4 mt-10">
         <div className="flex-1">
        {currentPage > 1 && (
            <button onClick={onBack} className="flex items-center gap-2 text-[#00D280] pl-3 pr-3 border-2 rounded-lg border-[#00D280] cursor-pointer transition-colors">
            <ArrowLeftIcon className="w-6 h-6 text-bold font-bold " />
           </button>
        
        )}
      </div>
      {currentPage !== totalPages && (
  <button
    onClick={onNext}
    className="bg-[#00D280] cursor-pointer text-white font-bold py-3 px-6 rounded-lg mx-auto block"
  >
    Next Page
  </button>
)}
     
      <div className="flex-1 text-right text-gray-700 pr-2">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};

export default Pagination;
