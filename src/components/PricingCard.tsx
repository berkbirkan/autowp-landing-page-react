import React from 'react';
import { Check, ShoppingCart } from 'lucide-react';
import { Package } from '../types/pricing';
import { PaymentModal } from './PaymentModal';

interface PricingCardProps {
  pkg: Package;
  isPopular?: boolean;
  onSelectPackage: (pkg: Package) => void;
}

export function PricingCard({ pkg, isPopular, onSelectPackage }: PricingCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(price);
  };

  const features = [
    `${pkg.max_ai_generated_post_per_month} AI Content Generation`,
    `${pkg.max_ai_generated_image_per_month} AI Image Generation`,
    pkg.auto_image_editing ? 'Automatic Image Editing' : 'Basic Image Tools',
  ];

  return (
    <div 
      className={`bg-white rounded-xl shadow-lg p-8 relative transition-all duration-300 hover:scale-105 ${
        isPopular ? 'border-2 border-[#00749c]' : ''
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00749c] text-white px-4 py-1 rounded-full text-sm">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
      <p className="text-gray-500 mb-6">Perfect for growing businesses</p>
      
      <div className="mb-8">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-[#00749c]">
            {formatPrice(pkg.package_price)}
          </span>
          <span className="text-gray-500 ml-2">
            / {pkg.is_annual ? 'year' : 'month'}
          </span>
        </div>
        {pkg.is_annual && (
          <p className="text-sm text-green-600 mt-2">
            Save {formatPrice(pkg.package_price * 0.2)} per year
          </p>
        )}
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 text-emerald-500 mr-3" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onSelectPackage(pkg)}
        className="w-full py-3 px-6 bg-gradient-to-r from-[#00749c] to-[#005d7d] text-white rounded-lg hover:from-[#005d7d] hover:to-[#004a63] transition-all flex items-center justify-center gap-2"
      >
        <span>Get Started</span>
        <ShoppingCart className="w-5 h-5" />
      </button>
    </div>
  );
}