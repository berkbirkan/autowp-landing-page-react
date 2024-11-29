import React from 'react';

interface PricingToggleProps {
  isAnnual: boolean;
  onToggle: (value: boolean) => void;
}

export function PricingToggle({ isAnnual, onToggle }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      <span className={`text-lg ${!isAnnual ? 'text-[#00749c] font-semibold' : 'text-gray-500'}`}>
        Monthly
      </span>
      <button
        onClick={() => onToggle(!isAnnual)}
        className="relative w-16 h-8 bg-[#00749c] rounded-full p-1 transition-colors focus:outline-none"
      >
        <div
          className={`absolute w-6 h-6 bg-white rounded-full transition-transform ${
            isAnnual ? 'translate-x-8' : 'translate-x-0'
          }`}
        />
      </button>
      <div className="flex items-center gap-2">
        <span className={`text-lg ${isAnnual ? 'text-[#00749c] font-semibold' : 'text-gray-500'}`}>
          Annual
        </span>
        <span className="px-2 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
          Save 20%
        </span>
      </div>
    </div>
  );
}