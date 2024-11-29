import React from 'react';
import { PaymentFormData } from '../types/pricing';

interface PaymentFormProps {
  formData: PaymentFormData;
  onChange: (data: PaymentFormData) => void;
  onSubmit: (e: React.FormEvent) => void;
  onRequestApiKey: () => void;
  loading: boolean;
  requestingApiKey: boolean;
}

export function PaymentForm({ 
  formData, 
  onChange, 
  onSubmit, 
  onRequestApiKey,
  loading,
  requestingApiKey 
}: PaymentFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <div className="flex gap-2">
          <input
            type="email"
            value={formData.email}
            onChange={(e) => onChange({ ...formData, email: e.target.value })}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2"
            required
          />
          <button
            type="button"
            onClick={onRequestApiKey}
            disabled={!formData.email || requestingApiKey}
            className="px-4 py-2 bg-[#00749c] text-white rounded-lg hover:bg-[#005d7d] disabled:opacity-50 whitespace-nowrap"
          >
            {requestingApiKey ? 'Sending...' : 'Get API Key'}
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          API Key
        </label>
        <input
          type="text"
          value={formData.apiKey}
          onChange={(e) => onChange({ ...formData, apiKey: e.target.value })}
          className="w-full rounded-lg border border-gray-300 px-4 py-2"
          required
          placeholder="Enter the API key sent to your email"
        />
      </div>

      <button
        type="submit"
        disabled={!formData.email || !formData.apiKey || loading}
        className="w-full py-3 px-6 bg-gradient-to-r from-[#00749c] to-[#005d7d] text-white rounded-lg hover:from-[#005d7d] hover:to-[#004a63] transition-all disabled:opacity-50"
      >
        {loading ? 'Processing...' : 'Continue to Payment'}
      </button>
    </form>
  );
}