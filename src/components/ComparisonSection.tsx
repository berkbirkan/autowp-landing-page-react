import React from 'react';
import { Check, X } from 'lucide-react';

interface ComparisonFeature {
  feature: string;
  autowp: boolean;
  others: boolean;
  description?: string;
}

const comparisonFeatures: ComparisonFeature[] = [
  {
    feature: "24/7 Automated Content Generation",
    autowp: true,
    others: false,
    description: "Set up once and let AutoWP generate content continuously, even while you sleep"
  },
  {
    feature: "AI-Powered Content Optimization",
    autowp: true,
    others: false,
    description: "Advanced AI models ensure high-quality, natural-sounding content every time"
  },
  {
    feature: "Multiple Content Sources",
    autowp: true,
    others: true,
    description: "WordPress, RSS feeds, Google News, and more - all in one plugin"
  },
  {
    feature: "Automatic Thumbnail Generation",
    autowp: true,
    others: false,
    description: "AI-generated images or smart web scraping for authentic visuals"
  },
  {
    feature: "Custom Content Planning",
    autowp: true,
    others: false,
    description: "Full control over HTML structure and dynamic content generation"
  },
  {
    feature: "Spam Detection",
    autowp: true,
    others: false,
    description: "Advanced AI ensures 100% unique, spam-free content"
  }
];

export function ComparisonSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Why Choose AutoWP?
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          See how AutoWP compares to regular WordPress content plugins
        </p>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-[#00749c] text-white p-6">
            <div className="col-span-1">
              <h3 className="font-semibold">Feature</h3>
            </div>
            <div className="text-center">
              <h3 className="font-semibold">AutoWP</h3>
            </div>
            <div className="text-center">
              <h3 className="font-semibold">Other Plugins</h3>
            </div>
          </div>

          {/* Features */}
          <div className="divide-y divide-gray-100">
            {comparisonFeatures.map((item, index) => (
              <div key={index} className="grid grid-cols-3 p-6 hover:bg-gray-50 transition-colors">
                <div className="col-span-1">
                  <h4 className="font-medium text-gray-900">{item.feature}</h4>
                  <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                </div>
                <div className="flex justify-center items-center">
                  <Check className="w-6 h-6 text-emerald-500" />
                </div>
                <div className="flex justify-center items-center">
                  {item.others ? (
                    <Check className="w-6 h-6 text-gray-400" />
                  ) : (
                    <X className="w-6 h-6 text-gray-300" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Example Content */}
          <div className="p-6 bg-gradient-to-r from-[#00749c]/10 to-transparent border-t border-gray-100">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="text-[#00749c] font-semibold mb-2">Live Example: AI-Generated Content</h3>
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <p className="text-gray-700">
                    Bitcoin made a historic jump on October 29, 2024, with its price surging to around XXX dollars.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}