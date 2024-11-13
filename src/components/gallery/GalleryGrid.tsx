import { MapPin } from 'lucide-react';
import type { GalleryImage } from '../../types/gallery';

interface GalleryGridProps {
  images: GalleryImage[];
  layout: 'grid' | 'columns';
}

export default function GalleryGrid({ images, layout }: GalleryGridProps) {
  return (
    <div className={`grid gap-6 ${
      layout === 'grid' 
        ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
        : 'columns-1 md:columns-2 xl:columns-3'
    }`}>
      {images.map((image) => (
        <div
          key={image.id}
          className={`relative group ${
            layout === 'grid' 
              ? '' 
              : 'break-inside-avoid mb-6'
          }`}
        >
          <img
            src={image.image}
            alt={image.title}
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
            <div className="text-white text-center p-4">
              <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
              <div className="flex items-center justify-center text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                {image.location}
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {image.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-white/20 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}