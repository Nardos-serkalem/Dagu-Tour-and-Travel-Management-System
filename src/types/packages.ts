export interface Package {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  image: string;
  location: string;
  rating: number;
  included: string[];
  groupSize: {
    min: number;
    max: number;
  };
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  category: 'Adventure' | 'Cultural' | 'Luxury';
}