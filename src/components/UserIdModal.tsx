import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Package } from '../types/pricing';

interface UserIdModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: Package;
}

export function UserIdModal({ isOpen, onClose, selectedPackage }: UserIdModalProps) {
  const [userId, setUserId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subscribeUrl = `https://api.autowp.app/v2/subscribe?package_id=${selectedPackage.id}&user_id=${userId}`;
    window.location.href = subscribeUrl;
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

        <h3 className="text-2xl font-bold mb-6">Enter Your User ID</h3>
        
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold mb-2">{selectedPackage.name}</h4>
          <p className="text-gray-600">
            ${selectedPackage.package_price}/{selectedPackage.is_annual ? 'year' : 'month'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              User ID
            </label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
              required
              placeholder="Enter your user ID"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-[#00749c] to-[#005d7d] text-white rounded-lg hover:from-[#005d7d] hover:to-[#004a63] transition-all"
          >
            Continue to Payment
          </button>
        </form>
      </div>
    </div>
  );
}