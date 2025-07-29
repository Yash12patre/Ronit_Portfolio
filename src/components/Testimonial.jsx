"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Amazing service! Exceeded my expectations.",
    name: "John Doe",
    designation: "CEO, XYZ Company",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    text: "Professional and timely delivery. Highly recommended!",
    name: "Jane Smith",
    designation: "Marketing Head, ABC Corp",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    text: "Loved the creativity and design approach!",
    name: "Alex Johnson",
    designation: "Founder, Creative Labs",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    text: "Reliable and friendly to work with.",
    name: "Emily Brown",
    designation: "Freelancer",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    text: "Definitely hiring again for future projects!",
    name: "Michael Clark",
    designation: "CTO, Techverse",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    text: "Very satisfied with the results.",
    name: "Sara Lee",
    designation: "Designer, Artworks",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const Testimonial = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 2,
      spacing: 20,
    },
  });

  return (
    <div className="bg-[#01200F] text-[#9EC5AB] py-16 px-4 md:px-12 relative">
      <h1 className="text-4xl font-bold text-center mb-2">Testimonials</h1>
      <p className="text-center text-[#9EC5AB]/80 mb-10">My clients are saying</p>

      <div className="relative">
        {/* Arrows */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 z-10 bg-[#32746D] hover:bg-[#104F55] text-[#9EC5AB] p-2 rounded-full shadow-lg transition-all duration-300"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-[-2rem] top-1/2 transform -translate-y-1/2 z-10 bg-[#32746D] hover:bg-[#104F55] text-[#9EC5AB] p-2 rounded-full shadow-lg transition-all duration-300"
        >
          <ChevronRight />
        </button>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="keen-slider__slide bg-[#104F55] rounded-xl p-6 shadow-lg hover:shadow-xl flex flex-col items-center text-center border border-[#32746D]/30 hover:border-[#32746D] transition-all duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 border-2 border-[#32746D] shadow-lg"
              />
              <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
              <h3 className="font-bold text-[#9EC5AB]">{testimonial.name}</h3>
              <p className="text-[#9EC5AB]/70">{testimonial.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;