import React, { useState } from 'react';
import { PricingCard } from './PricingCard';
import { PricingToggle } from './PricingToggle';
import { PaymentModal } from './PaymentModal';
import { usePricingPackages } from '../hooks/usePricingPackages';
import { Package } from '../types/pricing';

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const { monthlyPackages, annualPackages, loading, error } = usePricingPackages();

  const packages = isAnnual ? annualPackages : monthlyPackages;

  const handlePackageSelect = (pkg: Package) => {
    setSelectedPackage(pkg);
  };

  if (loading) {
    return (
      <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="text-red-500">
            Failed to load pricing information. Please try again later.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing</h2>
          <p className="text-xl text-gray-600">Choose the perfect plan for your content needs</p>
        </div>

        <PricingToggle isAnnual={isAnnual} onToggle={setIsAnnual} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <PricingCard
              key={pkg.id}
              pkg={pkg}
              isPopular={index === 1}
              onSelectPackage={handlePackageSelect}
            />
          ))}
        </div>

        <div className="mt-12 text-center text-gray-500">
          <p>All plans include 24/7 support and automatic updates</p>
        </div>

        {selectedPackage && (
          <PaymentModal
            isOpen={true}
            onClose={() => setSelectedPackage(null)}
            selectedPackage={selectedPackage}
          />
        )}
      </div>
    </section>
  );
}