import { ApiResponse, UserResponse } from '../types/pricing';

export async function getUserByDomain(email: string, apiKey: string): Promise<UserResponse> {
  const response = await fetch('https://api.autowp.app/getUserByDomain', {
    method: 'GET',
    headers: {
      'api_email': email,
      'api_key': apiKey
    }
  });
  
  if (!response.ok) {
    throw new Error('Failed to authenticate user');
  }

  const data = await response.json();
  
  if (!data.user_id) {
    throw new Error('Invalid user credentials');
  }
  
  return data;
}

export async function requestApiKey(email: string): Promise<ApiResponse> {
  const response = await fetch('https://api.autowp.app/register_email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_email: email })
  });
  
  if (!response.ok) {
    throw new Error('Failed to request API key');
  }

  const data = await response.json();
  
  if (data.error) {
    throw new Error(data.error);
  }
  
  return data;
}