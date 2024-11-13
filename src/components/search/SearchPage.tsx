import { useState } from 'react';
import { Search as SearchIcon, MapPin, Calendar, Users, Filter, SlidersHorizontal } from 'lucide-react';
import type { SearchFilters, Tour } from '../../types';

const mockTours: Tour[] = [
  {
    id: '1',
    title: 'erta ale Volcano',
    description: 'Discover the world low level area',
    duration: '7 days',
    price: 2000,
    image: 'Travel pictures/pictures/erta-ale-volcano-is-a.jpg',
    rating: 4.8,
    location: 'Afar, Ethiopia',
    groupSize: { min: 4, max: 12 },
    startDates: ['2024-11-15', '2024-11-01', '2024-11-15'],
  },
  // Add more mock tours...
];

export default function SearchPage() {
  const [filters, setFilters] = useState<SearchFilters>({
    priceRange: [0, 5000],
    sortBy: 'rating',
  });
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Search Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search destinations, tours, activities..."
                  className="w-full pl-10 input"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select className="w-full pl-10 input appearance-none">
                  <option>Any Location</option>
                  <option>Northern Ethiopa</option>
                  <option>Eastern Ethiopia</option>
                  <option>Western Ethiopia</option>
                  <option>Southern Ethiopia</option>
                </select>
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input type="date" className="w-full pl-10 input" />
              </div>
              <div className="relative col-span-2 md:col-span-1">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select className="w-full pl-10 input appearance-none">
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn btn-secondary flex items-center justify-center gap-2"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    value={filters.priceRange?.[1]}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        priceRange: [filters.priceRange![0], parseInt(e.target.value)],
                      })
                    }
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${filters.priceRange?.[0]}</span>
                    <span>${filters.priceRange?.[1]}</span>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                <select className="input">
                  <option>Any Duration</option>
                  <option>1-3 Days</option>
                  <option>4-7 Days</option>
                  <option>7+ Days</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tour Type</label>
                <select className="input">
                  <option>Any Type</option>
                  <option>Adventure</option>
                  <option>Cultural</option>
                  <option>Relaxation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as any })}
                  className="input"
                >
                  <option value="price">Price: Low to High</option>
                  <option value="rating">Rating</option>
                  <option value="duration">Duration</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Search Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">24 tours found</h2>
          <button className="btn btn-secondary flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4" />
            View: Grid
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
              <div className="relative h-48">
                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold text-teal-600">
                  ${tour.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{tour.title}</h3>
                <p className="mt-2 text-gray-600 line-clamp-2">{tour.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    {tour.groupSize.min}-{tour.groupSize.max} people
                  </div>
                </div>
                <button className="mt-4 w-full btn btn-primary">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}