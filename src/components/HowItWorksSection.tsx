import React from 'react';
import { HowItWorksStep } from './HowItWorksStep';

export function HowItWorksSection() {
  const steps = [
    {
      title: "Choose Your Content Source",
      description: "Select from multiple sources: RSS feeds, Google News, WordPress sites, or AI Agent for completely original content.",
    },
    {
      title: "Configure Keywords",
      description: "Add relevant keywords for your niche. AutoWP uses these to find and generate targeted content.",
    },
    {
      title: "AI Processing",
      description: "Our advanced AI analyzes the sources, filters spam, and ensures uniqueness of every piece of content.",
    },
    {
      title: "Content Generation",
      description: "AutoWP creates fresh, SEO-optimized content from scratch using the gathered information.",
    },
    {
      title: "Automated Publishing",
      description: "Set your preferred schedule (hourly, daily, or weekly) and let AutoWP handle the rest automatically.",
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">How it Works</h2>
        <p className="text-xl text-gray-600 text-center mb-16">Simple steps to automate your content creation</p>
        
        <div className="max-w-3xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <HowItWorksStep
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}