import { Star, Clock, Users, MapPin } from 'lucide-react';
import type { Package } from '../../types/packages';

interface PackageCardProps {
  package: Package;
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-teal-600">
          ${pkg.price}
        </div>
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-medium">
          {pkg.category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-1" />
            {pkg.location}
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{pkg.rating}</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-2">{pkg.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{pkg.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {pkg.duration}
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {pkg.groupSize.min}-{pkg.groupSize.max} people
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <p className="text-sm font-medium text-gray-700">Includes:</p>
          <ul className="text-sm text-gray-600 grid grid-cols-2 gap-1">
            {pkg.included.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1 h-1 bg-teal-500 rounded-full mr-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <button className="w-full btn btn-primary">View Details</button>
      </div>
    </div>
  );
}