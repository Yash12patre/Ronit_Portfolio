import React, { useState } from 'react';
import { BadgeCheck, Star, Sparkles, X } from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    title: 'Logo Designer',
    icon: <BadgeCheck size={32} className="text-blue-500" />,
    achievements: [
      'Designed 50+ brand logos',
      'Awarded "Best Logo" at Design Fest',
      'Clients from 10+ countries',
      'Minimalist to abstract logo styles',
      'Used in 100+ products worldwide',
    ],
  },
  {
    title: 'Banner Designer',
    icon: <Star size={32} className="text-yellow-400" />,
    achievements: [
      'Created banners for 30+ websites',
      'Featured on Behance 5 times',
      'Fast turnaround (under 24hrs)',
      'Social media optimized',
      'Collaborated with top influencers',
    ],
  },
  {
    title: 'Product Designer',
    icon: <Sparkles size={32} className="text-green-400" />,
    achievements: [
      'Designed UI/UX for 10+ startups',
      'Figma & Adobe XD expertise',
      'User-centered design process',
      'Integrated with dev teams',
      'Increased user engagement by 40%',
    ],
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="services" className="bg-[#000103] text-[#FFFFFA] min-h-[calc(100vh-64px)] w-full flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">SERVICES</h2>
        <p className="text-[#FF312E] text-lg">What I Offer</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#333138] p-6 rounded-xl shadow-lg hover:shadow-xl flex flex-col items-center justify-between gap-4 text-center border border-[#515052]/30 hover:border-[#515052] transition-all duration-300"
          >
            {service.icon}
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <Button onClick={() => setActiveIndex(index)} className="mt-2 bg-[#FF312E] hover:bg-[#333138] text-[#FFFFFA] transition-all duration-300">View More</Button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-[#000103]/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#333138] text-[#FFFFFA] p-6 rounded-lg shadow-xl w-[90%] max-w-md relative border border-[#515052]">
            <button onClick={() => setActiveIndex(null)} className="absolute top-2 right-2 text-[#FFFFFA] hover:text-[#FF312E] transition-colors duration-300">
              <X />
            </button>
            <h3 className="text-2xl font-bold mb-4">{services[activeIndex].title} Achievements</h3>
            <ul className="space-y-2 list-disc list-inside text-[#FFFFFA]/80">
              {services[activeIndex].achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;