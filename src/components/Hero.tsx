import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("Travel pictures/pictures/erta-ale-volcano-is-a.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-16 sm:pb-32 lg:pb-48 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white space-y-3">
              <span className="block">Discover the World's</span>
              <span className="block text-teal-400">Hidden Treasures</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl text-gray-200">
              Experience unforgettable adventures with our handcrafted tours and expert local guides.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <button className="bg-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-600 transition flex items-center gap-2">
                Explore Tours
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 transform translate-y-1/2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Where to?</label>
              <input
                type="text"
                placeholder="Destination"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">When?</label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <button className="bg-teal-500 text-white h-full px-8 rounded-lg font-semibold hover:bg-teal-600 transition mt-6 sm:mt-0">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}