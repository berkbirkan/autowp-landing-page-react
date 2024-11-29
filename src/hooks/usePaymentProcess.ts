import { useState } from 'react';
import { Package, PaymentFormData, ApiResponse, UserResponse } from '../types/pricing';

export function usePaymentProcess(formData: PaymentFormData, selectedPackage: Package) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleGetApiKey = async (email: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.autowp.app/register_email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_email: email })
      });
      
      const data: ApiResponse = await response.json();
      
      if (data.error) {
        setError(data.error);
      } else {
        setMessage('API key has been sent to your email.');
      }
    } catch (err) {
      setError('Failed to request API key. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const userResponse = await fetch('https://api.autowp.app/getUserByDomain', {
        method: 'GET',
        headers: {
          'api_email': formData.email,
          'api_key': formData.apiKey
        }
      });

      const userData: UserResponse = await userResponse.json();

      if (!userData.user_id) {
        throw new Error('Invalid user credentials');
      }

      // Instead of fetching, directly redirect to the subscription URL
      const subscriptionUrl = `https://api.autowp.app/v2/subscribe?package_id=${selectedPackage.id}&user_id=${userData.user_id}`;
      window.location.replace(subscriptionUrl);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process payment');
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    message,
    handleGetApiKey,
    handleSubmit
  };
}