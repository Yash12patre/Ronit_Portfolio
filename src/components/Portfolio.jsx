import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const portfolioData = {
  Logo: [
    {
      title: "Logo Project 1",
      url: "https://www.google.com",
    },
    {
      title: "Logo Project 2",
      url: "https://www.google.com",
    },
  ],
  Banner: [
    {
      title: "Banner Project 1",
      url: "https://www.google.com",
    },
    {
      title: "Banner Project 2",
      url: "https://www.google.com",
    },
  ],
  Designs: [
    {
      title: "Design Project 1",
      url: "https://www.google.com",
    },
    {
      title: "Design Project 2",
      url: "https://www.google.com",
    },
  ],
};

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("Logo");

  return (
    <section className="min-h-screen w-full bg-green-950 text-white px-6 md:px-16 py-20 flex flex-col items-center">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-2">Portfolio</h2>
        <p className="text-2xl md:text-3xl font-semibold mb-6">Recently I Made</p>
        <div className="flex flex-wrap gap-4 justify-center">
          {Object.keys(portfolioData).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === category
                  ? "bg-green-500 text-white"
                  : "border-green-500 text-green-400"
              } transition duration-300 hover:bg-green-400 hover:text-black`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 w-full max-w-5xl">
        {portfolioData[selectedCategory].map((item, idx) => (
          <div
            key={idx}
            className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-green-500/20 transition border border-green-500"
          >
            <img
              src={`https://source.unsplash.com/500x300/?design,${selectedCategory},${idx}`}
              alt={item.title}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-green-200">{item.title}</h3>
            <p className="text-sm text-gray-300 mb-4">View a live preview of this work</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-black px-4 py-2 rounded-full font-medium hover:bg-green-400 transition"
            >
              Show Demo <ExternalLink size={16} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
