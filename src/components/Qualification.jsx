import React from 'react';
import { GraduationCap, Briefcase, BookOpen } from 'lucide-react';

const qualifications = [
  {
    title: "Bachelor of Technology (CSE)",
    place: "XYZ University",
    date: "2020 - 2024",
    icon: <GraduationCap size={24} className="text-green-400" />,
  },
  {
    title: "Frontend Internship",
    place: "ABC Tech Solutions",
    date: "Summer 2023",
    icon: <Briefcase size={24} className="text-blue-400" />,
  },
  {
    title: "Full Stack Bootcamp",
    place: "Online",
    date: "2022",
    icon: <BookOpen size={24} className="text-yellow-400" />,
  },
];

const Qualification = () => {
  return (
    <section className="min-h-screen w-full bg-[#333138] text-[#FFFFFA] px-6 md:px-16 py-20 flex flex-col items-center">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold uppercase relative inline-block mb-2">
          Qualification
          <span className="block w-16 h-1 bg-gradient-to-r from-[#FF312E] to-[#515052] mx-auto mt-2 rounded" />
        </h2>
        <p className="text-lg text-[#FFFFFA]/80">My Academic & Professional Journey</p>
      </div>

      <div className="flex flex-col gap-10 w-full max-w-3xl">
        {qualifications.map((item, idx) => (
          <div
            key={idx}
            className="relative border-l-4 border-[#FF312E] pl-6 py-6 bg-[#515052]/30 rounded-lg shadow-lg backdrop-blur-md hover:shadow-[#FF312E]/20 hover:bg-[#515052]/50 transition-all duration-300"
          >
            <div className="absolute -left-4 top-6 bg-[#FF312E] p-2 rounded-full shadow-lg">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-1 text-[#FFFFFA]">{item.title}</h3>
            <p className="text-[#FFFFFA]/80">{item.place}</p>
            <p className="text-sm text-[#FFFFFA]/60 italic">{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualification;