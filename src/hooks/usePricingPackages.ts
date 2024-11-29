import { useState, useEffect } from 'react';
import { Package } from '../types/pricing';

const FREE_PACKAGE: Package = {
  id: 0,
  name: 'Free',
  package_price: 0,
  is_annual: false,
  max_ai_generated_post_per_month: 5,
  max_ai_generated_image_per_month: 5,
  auto_image_editing: false
};

export function usePricingPackages() {
  const [packages, setPackages] = useState<Package[]>([FREE_PACKAGE]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPackages() {
      try {
        const response = await fetch('https://api.autowp.app/getPackages');
        
        // Check if response is OK
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Check content type
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Invalid response format. Expected JSON.');
        }

        // Parse JSON safely
        let data;
        try {
          data = await response.json();
        } catch (parseError) {
          console.error('JSON Parse Error:', parseError);
          throw new Error('Failed to parse response data');
        }

        // Validate data structure
        if (!Array.isArray(data)) {
          throw new Error('Invalid data format. Expected an array.');
        }

        // Process packages
        const processedPackages = data.map((pkg: Package) => ({
          ...pkg,
          name: pkg.name.charAt(0).toUpperCase() + pkg.name.slice(1)
        }));

        // Add free package and sort
        setPackages([FREE_PACKAGE, ...processedPackages]);
      } catch (err) {
        console.error('Fetch Error:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch packages');
        // Ensure we at least show the free package
        setPackages([FREE_PACKAGE]);
      } finally {
        setLoading(false);
      }
    }

    fetchPackages();
  }, []);

  const monthlyPackages = packages.filter(pkg => !pkg.is_annual);
  const annualPackages = packages.filter(pkg => pkg.is_annual);

  return { packages, monthlyPackages, annualPackages, loading, error };
}