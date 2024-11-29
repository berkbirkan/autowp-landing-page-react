import React from 'react';
import { Rss, Pencil, Shield, Settings, Star, ArrowRight } from 'lucide-react';
import { AutoWPLogo, WordPressLogo, GoogleNewsLogo } from './components/Logo';
import { ThumbnailIcon, AutomationIcon } from './components/Icons';
import { FeatureCard } from './components/FeatureCard';
import { ComparisonSection } from './components/ComparisonSection';
import { PricingSection } from './components/PricingSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FAQSection } from './components/FAQSection';
import { Navigation } from './components/Navigation';
import { ContentPlannerShowcase } from './components/ContentPlannerShowcase';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="w-48">
            <AutoWPLogo />
          </div>
          <Navigation />
        </nav>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transform Your WordPress Content with AI-Powered Automation
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            AutoWP uses advanced AI to automatically generate, rewrite, and optimize your WordPress content, delivering 100% SEO-optimized results that drive traffic and engagement.
          </p>
          <button className="px-8 py-4 bg-[#00749c] text-white rounded-lg text-lg font-medium hover:bg-[#005d7d] transition-colors inline-flex items-center gap-2">
            Start Creating Content <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Features Grid */}
      <section id="features" className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">Powerful Features for Content Creation</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<WordPressLogo />}
            title="AI-Rewrite from WordPress"
            description="Automatically fetch and rewrite existing WordPress posts with AI for fresh, unique content that maintains context and improves SEO."
          />
          <FeatureCard
            icon={<Rss className="w-8 h-8 text-[#00749c]" />}
            title="RSS Feed Integration"
            description="Transform RSS feed content into original articles using advanced AI technology, keeping your site updated automatically."
          />
          <FeatureCard
            icon={<Pencil className="w-8 h-8 text-[#00749c]" />}
            title="AI Content Generation"
            description="Create completely new, original content from scratch with AI assistance, tailored to your site's voice and style."
          />
          <FeatureCard
            icon={<GoogleNewsLogo />}
            title="AI-Rewrite from Google News"
            description="Transform trending news articles into unique, engaging content while maintaining journalistic integrity and SEO optimization."
          />
          <FeatureCard
            icon={<ThumbnailIcon />}
            title="Automatic Thumbnail Generation"
            description="Create stunning thumbnails automatically using Flux and Stable Diffusion, or find real images via DuckDuckGo image search for authentic visuals."
          />
          <FeatureCard
            icon={<AutomationIcon />}
            title="WP-Cron Automation"
            description="Set it and forget it! Schedule content generation hourly, daily, or weekly. Let AutoWP create content even while you sleep."
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8 text-[#00749c]" />}
            title="Spam Detection"
            description="100% protection against spam and duplicate content with advanced AI detection systems."
          />
          <FeatureCard
            icon={<Settings className="w-8 h-8 text-[#00749c]" />}
            title="Custom Content Planning"
            description="Build content piece by piece with customizable HTML elements and dynamic prompts."
          />
        </div>
      </section>

      {/* Content Planner Showcase */}
      <ContentPlannerShowcase />

      {/* How it Works Section */}
      <section id="how-it-works">
        <HowItWorksSection />
      </section>

      {/* Comparison Section */}
      <section id="comparison">
        <ComparisonSection />
      </section>

      {/* SEO Section */}
      <section className="bg-[#00749c] text-white py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">100% SEO Optimized Content</h2>
              <p className="text-lg mb-8">
                Every piece of content generated by AutoWP is fully optimized for search engines, achieving an average RankMath score of 80+. Our AI ensures your content ranks higher and drives more organic traffic to your site.
              </p>
              <div className="flex items-center gap-4">
                <Star className="w-8 h-8 text-yellow-400" />
                <span className="text-2xl font-bold">80+ Average RankMath Score</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/rankmath-screenshot.png"
                alt="RankMath SEO Score"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <PricingSection />
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQSection />
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Content Creation?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of WordPress users who are saving time and creating better content with AutoWP.
        </p>
        <button className="px-8 py-4 bg-[#00749c] text-white rounded-lg text-lg font-medium hover:bg-[#005d7d] transition-colors inline-flex items-center gap-2">
          Get Started Now <ArrowRight className="w-5 h-5" />
        </button>
      </section>
    </div>
  );
}

export default App;