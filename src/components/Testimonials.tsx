import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Nardos Serkalem',
    image: 'Travel pictures/pictures/photo_2024-04-25_00-28-16.jpg',
    text: 'Our trip to Gonder was absolutely incredible. The attention to detail and local expertise made all the difference.',
    rating: 5,
    tour: 'Gonder castel'
  },
  {
    id: 2,
    name: 'Markos Assefa',
    image: 'Travel pictures/pictures/The Rift Valley and the Cultural Mosaic of the South Route - Visit Ethiopia_files/image.png',
    text: 'The Afar Ertalle exceeded all expectations. Our guide was knowledgeable and we saw amazing low level area.',
    rating: 5,
    tour: 'afar Ertalle'
  },
  {
    id: 3,
    name: 'Haset Henok',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    text: 'bale mountain was breathtaking. The tour was well-organized and our guide made the history come alive.',
    rating: 5,
    tour: 'bale mounatin'
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">What Our Travelers Say</h2>
          <p className="mt-4 text-xl text-gray-600">Real experiences from real adventurers</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.tour}</p>
                </div>
              </div>
              <div className="mt-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}