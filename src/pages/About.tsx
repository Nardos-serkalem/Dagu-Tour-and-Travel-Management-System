import { Users, Award, Globe, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      <div className="relative py-16 bg-gradient-to-br from-teal-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">About Dagu Tour and Travel </h1>
          <p className="text-xl max-w-2xl mx-auto">
           Dagu Tour and Travel brings Ethiopia’s beauty and heritage to life with unforgettable, locally guided experiences. From majestic landscapes to rich cultural sites, we offer immersive journeys that capture the heart of Ethiopia. Join us to discover and share the wonders of this incredible country.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded with a passion for exploration and cultural exchange.</p>
            <p className="text-gray-600">
              Our mission is to create authentic, sustainable, and memorable travel experiences that benefit both our clients and the communities we visit.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Users className="w-8 h-8 text-teal-500 mb-4" />
              <h3 className="font-semibold mb-2">Expert Guides</h3>
              <p className="text-gray-600 text-sm">Professional local guides with deep knowledge</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Award className="w-8 h-8 text-teal-500 mb-4" />
              <h3 className="font-semibold mb-2">Quality Service</h3>
              <p className="text-gray-600 text-sm">Consistently rated 5 stars by our clients</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Globe className="w-8 h-8 text-teal-500 mb-4" />
              <h3 className="font-semibold mb-2">Local Reach</h3>
              <p className="text-gray-600 text-sm">Operating in over 50 regions in Ethiopia</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Shield className="w-8 h-8 text-teal-500 mb-4" />
              <h3 className="font-semibold mb-2">Safe Travel</h3>
              <p className="text-gray-600 text-sm">Your safety is our top priority</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-teal-500" />
              </div>
              <h3 className="font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Committed to eco-friendly practices and supporting local communities
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-teal-500" />
              </div>
              <h3 className="font-semibold mb-2">Cultural Exchange</h3>
              <p className="text-gray-600">
                Fostering meaningful connections between travelers and locals
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-teal-500" />
              </div>
              <h3 className="font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Delivering exceptional service and unforgettable experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}