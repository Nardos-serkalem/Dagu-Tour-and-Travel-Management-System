import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Dagu</h3>
            <p className="text-gray-400">
              Crafting unforgettable travel experiences and adventures around the world.
            </p>
            <div className="mt-4 flex space-x-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-teal-500" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-teal-500" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-teal-500" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-teal-500" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-teal-500">About Us</a></li>
              <li><a href="#tours" className="hover:text-teal-500">Tours</a></li>
              <li><a href="#destinations" className="hover:text-teal-500">Destinations</a></li>
              <li><a href="#contact" className="hover:text-teal-500">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                DaguTourAndTravel@gmail.com
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                +251 991329456
                +251 973094578
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Addis Ababa, Ethiopia
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for travel tips and exclusive offers.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <button className="w-full btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dagu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}