import React from 'react';
import { Plus, ChevronDown, X } from 'lucide-react';

export function ContentPlannerShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Content Planner</h2>
          <p className="text-xl text-gray-600">Build your content piece by piece with our powerful Content Planner</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#00749c] text-white p-6">
            <h3 className="text-xl font-semibold">Content Structure Builder</h3>
          </div>

          {/* Content Area */}
          <div className="p-6 space-y-6">
            {/* Template Selection */}
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Introduction Template
              </button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add FAQ Template
              </button>
            </div>

            {/* Dynamic Elements */}
            <div className="space-y-4">
              {/* Element Type Selector */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <label className="font-medium text-gray-700">HTML Tag Type</label>
                  <select className="border border-gray-300 rounded-md px-3 py-1.5">
                    <option>Paragraph (&lt;p&gt;)</option>
                    <option>Heading 1 (&lt;h1&gt;)</option>
                    <option>Heading 2 (&lt;h2&gt;)</option>
                  </select>
                </div>

                {/* Prompt Builder */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Post Title</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Focus Keyword</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Original Content</span>
                    <button className="px-3 py-1 bg-[#00749c]/10 text-[#00749c] rounded-full text-sm hover:bg-[#00749c]/20 transition-colors">
                      + Add Variable
                    </button>
                  </div>
                  <textarea 
                    className="w-full h-24 border border-gray-200 rounded-lg p-3 resize-none"
                    placeholder="Write your prompt here..."
                  ></textarea>
                </div>
              </div>

              {/* Preview */}
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-700">Preview</span>
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-600">Generated content will appear here...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}