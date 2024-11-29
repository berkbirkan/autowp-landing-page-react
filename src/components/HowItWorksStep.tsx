import React from 'react';

interface HowItWorksStepProps {
  number: number;
  title: string;
  description: string;
  highlight?: string;
}

export function HowItWorksStep({ number, title, description, highlight }: HowItWorksStepProps) {
  const renderDescription = () => {
    if (!highlight) return description;
    
    const parts = description.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="bg-[#00749c] text-white px-2 py-1 rounded">
          {highlight}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="flex gap-6 items-start">
      <div className="w-12 h-12 flex-shrink-0 bg-[#00749c]/10 rounded-full flex items-center justify-center">
        <span className="text-[#00749c] text-xl font-bold">{number}</span>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{renderDescription()}</p>
      </div>
    </div>
  );
}