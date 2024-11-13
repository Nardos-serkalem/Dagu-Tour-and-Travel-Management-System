import { useState, useEffect } from 'react';
import type { Package } from '../../types/packages';

interface PackageFiltersProps {
  packages: Package[];
  onFilter: (filtered: Package[]) => void;
}

export default function PackageFilters({ packages, onFilter }: PackageFiltersProps) {
  const [filters, setFilters] = useState({
    priceRange: [0, 5000],
    duration: '',
    difficulty: '',
    category: '',
  });

  useEffect(() => {
    const filtered = packages.filter((pkg) => {
      const matchesPrice = pkg.price >= filters.priceRange[0] && pkg.price <= filters.priceRange[1];
      const matchesDuration = !filters.duration || pkg.duration.includes(filters.duration);
      const matchesDifficulty = !filters.difficulty || pkg.difficulty === filters.difficulty;
      const matchesCategory = !filters.category || pkg.category === filters.category;

      return matchesPrice && matchesDuration && matchesDifficulty && matchesCategory;
    });

    onFilter(filtered);
  }, [filters, packages, onFilter]);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range (${filters.priceRange[0]} - ${filters.priceRange[1]})
            </label>
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={filters.priceRange[1]}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  priceRange: [filters.priceRange[0], parseInt(e.target.value)],
                })
              }
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duration
            </label>
            <select
              value={filters.duration}
              onChange={(e) => setFilters({ ...filters, duration: e.target.value })}
              className="input"
            >
              <option value="">Any Duration</option>
              <option value="7 days">7 Days</option>
              <option value="10 days">10 Days</option>
              <option value="12 days">12 Days</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Difficulty
            </label>
            <select
              value={filters.difficulty}
              onChange={(e) => setFilters({ ...filters, difficulty: e.target.value })}
              className="input"
            >
              <option value="Any Difficulty">Any Difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Challenging">Challenging</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="input"
            >
              <option value="Any Category">Any Category</option>
              <option value="Adventure">Adventure</option>
              <option value="Cultural">Cultural</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>
        </div>
      </div>

      <button
        onClick={() =>
          setFilters({
            priceRange: [0, 5000],
            duration: '',
            difficulty: '',
            category: '',
          })
        }
        className="w-full btn btn-secondary"
      >
        Reset Filters
      </button>
    </div>
  );
}