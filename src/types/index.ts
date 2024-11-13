export interface Tour {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  image: string;
  rating: number;
  location: string;
  featured?: boolean;
  highlights?: string[];
  included?: string[];
  itinerary?: {
    day: number;
    title: string;
    description: string;
  }[];
  gallery?: string[];
  reviews?: Review[];
  amenities?: string[];
  groupSize: {
    min: number;
    max: number;
  };
  startDates: string[];
  weather?: {
    temp: number;
    condition: string;
    icon: string;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  preferences?: {
    language: string;
    currency: string;
    notifications: {
      email: boolean;
      push: boolean;
      sms: boolean;
    };
  };
  savedTours?: string[];
  bookingHistory?: Booking[];
  paymentMethods?: PaymentMethod[];
}

export interface Booking {
  id: string;
  tourId: string;
  userId: string;
  date: string;
  guests: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  totalPrice: number;
  specialRequests?: string;
  paymentStatus: 'pending' | 'paid' | 'refunded';
}

export interface Review {
  id: string;
  userId: string;
  tourId: string;
  rating: number;
  text: string;
  date: string;
  photos?: string[];
  categories: {
    value: number;
    guide: number;
    accommodation: number;
    transportation: number;
    activities: number;
  };
}

export interface PaymentMethod {
  id: string;
  type: 'card' | 'paypal';
  last4?: string;
  expiryDate?: string;
  isDefault: boolean;
}

export interface SearchFilters {
  location?: string;
  priceRange?: [number, number];
  duration?: string;
  sortBy?: 'price' | 'rating' | 'duration';
  dates?: {
    start: string;
    end: string;
  };
  groupSize?: number;
  amenities?: string[];
  rating?: number;
}