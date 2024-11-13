import { Star, Clock, MapPin } from 'lucide-react';
import type { Tour } from '../types';

const featuredTours: Tour[] = [
  {
    id: '1',
    title: 'Ertalle',
    description: 'Discover the world low level area',
    duration: '7 days',
    price: 1299,
    image: 'Travel pictures/pictures/danakil-depression.jpg',
    rating: 4.5,
    location: 'Afar',
    featured: true,
  },
  {
    id: '2',
    title: 'Lalibela Rock-Hewn Churches',
    description: 'rock-hewn church of lalibela around Lasta ',
    duration: '10 days',
    price: 2499,
    image: 'Travel pictures/pictures/lalibela-rock-churches-ethiopia.jpg',
    rating: 4.9,
    location: 'Amhara, Ethiopia',
    featured: true,
  },
  {
    id: '3',
    title: 'Gondor Castel',
    description: 'old king palac',
    duration: '5 days',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
    rating: 4.7,
    location: 'Amhara, Etiopia',
    featured: true,
  },
];

export default function FeaturedTours() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Featured Tours</h2>
          <p className="mt-4 text-xl text-gray-600">Handpicked experiences for unforgettable adventures</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredTours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold text-teal-600">
                  ${tour.price}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-teal-600">{tour.location}</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{tour.rating}</span>
                  </div>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">{tour.title}</h3>
                <p className="mt-2 text-gray-600">{tour.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    {tour.location}
                  </div>
                </div>
                <button className="mt-4 w-full btn btn-primary">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}