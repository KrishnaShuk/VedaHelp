import React from 'react';
import { CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    "Easy to use interface",
    "Powerful analytics",
    "24/7 customer support",
    "Seamless integration"
  ];

  return (
    <section id="features" className="py-20 h-screen w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="text-green-500 mr-4" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;