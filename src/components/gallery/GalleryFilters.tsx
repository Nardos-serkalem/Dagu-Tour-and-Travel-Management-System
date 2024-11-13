import { useState, useEffect } from 'react';
import type { GalleryImage } from '../../types/gallery';

interface GalleryFiltersProps {
  images: GalleryImage[];
  onFilter: (filtered: GalleryImage[]) => void;
}

export default function GalleryFilters({ images, onFilter }: GalleryFiltersProps) {
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    tag: ''
  });

  const categories = Array.from(new Set(images.map(img => img.category)));
  const locations = Array.from(new Set(images.map(img => img.location)));
  const tags = Array.from(new Set(images.flatMap(img => img.tags)));
  useEffect(() => {
    const filtered = images.filter((img) => {
      const matchesCategory = !filters.category || img.category === filters.category;
      const matchesLocation = !filters.location || img.location === filters.location;
      const matchesTag = !filters.tag || img.tags.includes(filters.tag);

      return matchesCategory && matchesLocation && matchesTag;
    });

    onFilter(filtered);
  }, [filters, images, onFilter]);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="input"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <select
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className="input"
            >
              <option value="">All Locations</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tag
            </label>
            <select
              value={filters.tag}
              onChange={(e) => setFilters({ ...filters, tag: e.target.value })}
              className="input"
            >
              <option value="">All Tags</option>
              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  #{tag}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <button
        onClick={() =>
          setFilters({
            category: '',
            location: '',
            tag: ''
          })
        }
        className="w-full btn btn-secondary"
      >
        Reset Filters
      </button>
    </div>
  );
}