import { useState } from 'react';
import { Filter } from 'lucide-react';
import PackageCard from '../components/packages/PackageCard';
import PackageFilters from '../components/packages/PackageFilters';
import type { Package } from '../types/packages';

const packages: Package[] = [
  {
    id: '1',
    title: 'Japan Cultural Explorer',
    description: 'Immerse yourself in Japanese culture, from ancient temples to modern cities.',
    duration: '12 days',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
    location: 'Japan',
    rating: 4.9,
    included: ['Accommodation', 'Local Transport', 'Selected Meals', 'Expert Guide'],
    groupSize: { min: 4, max: 12 },
    difficulty: 'Easy',
    category: 'Cultural'
  },
  {
    id: '2',
    title: 'Machu Picchu Trek',
    description: 'Challenge yourself with this iconic trek through the Andes to Machu Picchu.',
    duration: '7 days',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1',
    location: 'Peru',
    rating: 4.8,
    included: ['Camping Equipment', 'Meals', 'Permits', 'Expert Guides'],
    groupSize: { min: 6, max: 15 },
    difficulty: 'Challenging',
    category: 'Adventure'
  },
  {
    id: '3',
    title: 'Mediterranean Cruise',
    description: 'Explore the best of Mediterranean coastlines in luxury and style.',
    duration: '10 days',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff',
    location: 'Multiple',
    rating: 4.7,
    included: ['Cabin', 'All Meals', 'Entertainment', 'Port Excursions'],
    groupSize: { min: 2, max: 4 },
    difficulty: 'Easy',
    category: 'Luxury'
  }
];

export default function Packages() {
  const [showFilters, setShowFilters] = useState(false);
  const [filteredPackages, setFilteredPackages] = useState(packages);

  return (
    <div className="pt-16">
      <div className="relative py-16 bg-gradient-to-br from-teal-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Travel Packages</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Curated travel experiences for every type of adventurer
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold">Available Packages</h2>
            <p className="text-gray-600">Find your perfect travel package</p>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50"
          >
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {showFilters && (
            <div className="lg:col-span-1">
              <PackageFilters
                packages={packages}
                onFilter={setFilteredPackages}
              />
            </div>
          )}
          
          <div className={`${showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}`}>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPackages.map((pkg) => (
                <PackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}