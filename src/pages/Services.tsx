import { Compass, Camera, Utensils, Bed, Map, Users, Plane, Shield } from 'lucide-react';
import ServiceCard from '../components/services/ServiceCard';
import WhyChooseUs from '../components/services/WhyChooseUs';

const services = [
  {
    icon: Compass,
    title: 'Adventure Tours',
    description: 'Experience thrilling adventures with our expert guides in the most breathtaking locations.',
    features: ['Professional Guides', 'Safety Equipment', 'Flexible Itineraries']
  },
  {
    icon: Camera,
    title: 'Photography Tours',
    description: 'Capture stunning moments with photography-focused tours led by professional photographers.',
    features: ['Expert Photography Tips', 'Prime Locations', 'Small Groups']
  },
  {
    icon: Utensils,
    title: 'Culinary Experiences',
    description: 'Discover local cuisines and cooking traditions with our food-focused cultural tours.',
    features: ['Cooking Classes', 'Food Markets', 'Wine Tasting']
  },
  {
    icon: Bed,
    title: 'Luxury Stays',
    description: 'Indulge in premium accommodations carefully selected for comfort and authenticity.',
    features: ['5-Star Hotels', 'Boutique Resorts', 'Exclusive Access']
  },
  {
    icon: Map,
    title: 'Cultural Tours',
    description: 'Immerse yourself in local traditions and heritage with our cultural exploration tours.',
    features: ['Local Guides', 'Historical Sites', 'Traditional Events']
  },
  {
    icon: Users,
    title: 'Group Tours',
    description: 'Join like-minded travelers on carefully crafted group adventures around the world.',
    features: ['Social Experience', 'Shared Costs', 'Made Friends']
  },
  {
    icon: Plane,
    title: 'Custom Tours',
    description: 'Create your perfect journey with our personalized tour planning services.',
    features: ['Tailored Itinerary', 'Flexible Dates', 'Personal Guide']
  },
  {
    icon: Shield,
    title: 'Travel Insurance',
    description: 'Travel with peace of mind knowing you are protected with comprehensive coverage.' ,
    features: ['Medical Coverage', 'Trip Cancellation', '24/7 Support']
  }
];

export default function Services() {
  return (
    <div className="pt-16">
      <div className="relative py-16 bg-gradient-to-br from-teal-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive travel services designed to create unforgettable experiences
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <WhyChooseUs />
      </div>
    </div>
  );
}