import { Shield, Clock, Award, Heart } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Safe & Reliable',
    description: 'Your safety is our top priority with comprehensive insurance coverage and vetted partners.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance ensures you are never alone during your journey.'
  },
  {
    icon: Award,
    title: 'Expert Guides',
    description: 'Professional, knowledgeable guides who bring destinations to life.'
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Tailored experiences that cater to your specific interests and needs.'
  }
];

export default function WhyChooseUs() {
  return (
    <div className="mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Why Choose Us</h2>
        <p className="mt-4 text-xl text-gray-600">
          Discover what makes our travel services stand out from the rest
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}