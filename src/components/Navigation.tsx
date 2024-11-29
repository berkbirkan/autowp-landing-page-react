import React from 'react';

interface NavItem {
  label: string;
  target: string;
}

export function Navigation() {
  const navItems: NavItem[] = [
    { label: 'Features', target: 'features' },
    { label: 'How It Works', target: 'how-it-works' },
    { label: 'Comparison', target: 'comparison' },
    { label: 'Pricing', target: 'pricing' },
    { label: 'FAQ', target: 'faq' }
  ];

  const scrollToSection = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex gap-6">
      {navItems.map((item) => (
        <button
          key={item.label}
          onClick={() => scrollToSection(item.target)}
          className="px-6 py-2 text-[#00749c] font-medium hover:text-[#005d7d] transition-colors"
        >
          {item.label}
        </button>
      ))}
      <button className="px-6 py-2 bg-[#00749c] text-white rounded-lg hover:bg-[#005d7d] transition-colors">
        Get Started
      </button>
    </div>
  );
}