import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Axum, Mekelle',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    tours: 8
  },
  {
    id: 2,
    name: 'Lalibela Rock-Hewn Churches,Amhara',
    image: 'Travel pictures/pictures/lalibela-rock-churches-ethiopia.jpg',
    tours: 12
  },
  {
    id: 3,
    name: 'Afar volcano, Afar',
    image: 'Travel pictures/pictures/erta-ale-volcano-is-a.jpg',
    tours: 10
  },
  {
    id: 4,
    name: 'Bale Mountains , Southern Ethiopia',
    image: 'Travel pictures/pictures/bale-mountains-ethiopian-wolf-in.jpg',
    tours: 6
  },
  {
    id: 5,
    name: 'Ertalle, Afar',
    image: 'Travel pictures/pictures/visit-ethiopia.jpg',
    tours: '7'
  }, 
  {
    id: 5,
    name: 'danakil depression, Afar',
    image: 'Travel pictures/pictures/danakil-depression.jpg',
    tours: '3'
  }, 
  {
    id: 5,
    name: 'Entoto Park,Addis Ababa',
    image:'Travel pictures/pictures/visit-ethiopia.jpg',
    tours: '5'
  }, 
  {
    id: 5,
    name: 'Gambella buffalos, Gambella',
    image: 'Travel pictures/pictures/Gambella-buffalos.jpg',
    tours: '5'
  }, 
];
export default function Destinations() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Popular Destinations</h2>
            <p className="mt-4 text-xl text-gray-600">Explore our most sought-after locations</p>
          </div>
          <button className="hidden md:flex items-center text-teal-600 hover:text-teal-700">
            View All
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative h-72 rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white">{destination.name}</h3>
                <p className="mt-2 text-sm text-gray-300">{destination.tours} tours available</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}