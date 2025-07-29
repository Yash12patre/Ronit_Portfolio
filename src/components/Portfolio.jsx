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
    <section id="portfolio" className="min-h-screen w-full bg-[#000103] text-[#FFFFFA] px-6 md:px-16 py-20 flex flex-col items-center">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-2">Portfolio</h2>
        <p className="text-2xl md:text-3xl font-semibold mb-6">Recently I Made</p>
        <div className="flex flex-wrap gap-4 justify-center">
          {Object.keys(portfolioData).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === category
                  ? "bg-[#FF312E] text-[#FFFFFA] border-[#FF312E]"
                  : "border-[#FF312E] text-[#FF312E]"
              } transition duration-300 hover:bg-[#FF312E] hover:text-[#FFFFFA]`}
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
            className="bg-[#333138]/50 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-[#FF312E]/20 transition-all duration-300 border border-[#515052]/30 hover:border-[#515052]"
          >
            <img
              src={`https://source.unsplash.com/500x300/?design,${selectedCategory},${idx}`}
              alt={item.title}
              className="rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#FFFFFA]">{item.title}</h3>
            <p className="text-sm text-[#FFFFFA]/80 mb-4">View a live preview of this work</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF312E] text-[#FFFFFA] px-4 py-2 rounded-full font-medium hover:bg-[#333138] transition-all duration-300 shadow-lg"
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
