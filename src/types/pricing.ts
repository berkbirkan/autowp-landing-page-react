export interface Package {
  id: number;
  name: string;
  package_price: number;
  is_annual: boolean;
  max_ai_generated_post_per_month: number;
  max_ai_generated_image_per_month: number;
  auto_image_editing: boolean;
}

export interface PaymentFormData {
  email: string;
  apiKey: string;
}

export interface ApiResponse {
  message?: string;
  error?: string;
}

export interface UserResponse {
  user_id: number;
  user_email: string;
  user_domainname: string;
  isPremium: boolean | null;
  [key: string]: any;
}