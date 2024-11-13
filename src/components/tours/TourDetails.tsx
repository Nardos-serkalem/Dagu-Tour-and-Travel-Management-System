import { useState } from 'react';
import { Clock, MapPin, Star, Check } from 'lucide-react';
import type { Tour } from '../../types';
import BookingModal from '../booking/BookingModal';

interface TourDetailsProps {
  tour: Tour;
}

export default function TourDetails({ tour }: TourDetailsProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="bg-white">
      <div className="relative h-96">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900">{tour.title}</h1>
            
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-1" />
                {tour.location}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                {tour.duration}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                {tour.rating}
              </div>
            </div>

            <p className="mt-6 text-gray-600">{tour.description}</p>

            {tour.highlights && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900">Tour Highlights</h2>
                <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tour.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-teal-500 mr-2" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {tour.itinerary && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900">Itinerary</h2>
                <div className="mt-4 space-y-6">
                  {tour.itinerary.map((day) => (
                    <div key={day.day} className="border-l-2 border-teal-500 pl-4">
                      <h3 className="font-semibold text-gray-900">Day {day.day}: {day.title}</h3>
                      <p className="mt-2 text-gray-600">{day.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="sticky top-24 bg-gray-50 rounded-xl p-6">
              <div className="text-center">
                <span className="text-3xl font-bold text-gray-900">${tour.price}</span>
                <span className="text-gray-600"> / person</span>
              </div>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="mt-6 w-full btn btn-primary"
              >
                Book Now
              </button>

              {tour.included && (
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-900">What's Included</h3>
                  <ul className="mt-4 space-y-2">
                    {tour.included.map((item, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 text-teal-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        tour={tour}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}