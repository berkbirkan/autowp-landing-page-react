import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Package, PaymentFormData } from '../types/pricing';
import { PaymentForm } from './PaymentForm';
import { getUserByDomain, requestApiKey } from '../api/auth';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: Package;
}

export function PaymentModal({ isOpen, onClose, selectedPackage }: PaymentModalProps) {
  const [formData, setFormData] = useState<PaymentFormData>({ email: '', apiKey: '' });
  const [loading, setLoading] = useState(false);
  const [requestingApiKey, setRequestingApiKey] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleRequestApiKey = async () => {
    if (!formData.email) return;
    
    setRequestingApiKey(true);
    setError(null);
    setMessage(null);
    
    try {
      await requestApiKey(formData.email);
      setMessage('API key has been sent to your email address.');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to request API key');
    } finally {
      setRequestingApiKey(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const userData = await getUserByDomain(formData.email, formData.apiKey);
      
      if (!userData.user_id) {
        throw new Error('Invalid user credentials');
      }

      const subscribeUrl = `https://api.autowp.app/v2/subscribe?package_id=${selectedPackage.id}&user_id=${userData.user_id}`;
      window.location.href = subscribeUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed');
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-bold mb-6">Complete Your Purchase</h3>
        
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold mb-2">{selectedPackage.name}</h4>
          <p className="text-gray-600">
            ${selectedPackage.package_price}/{selectedPackage.is_annual ? 'year' : 'month'}
          </p>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {message && (
          <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-lg">
            {message}
          </div>
        )}

        <PaymentForm
          formData={formData}
          onChange={setFormData}
          onSubmit={handleSubmit}
          onRequestApiKey={handleRequestApiKey}
          loading={loading}
          requestingApiKey={requestingApiKey}
        />
      </div>
    </div>
  );
}