import React from 'react';
import { Palette, Video } from 'lucide-react';

const skills = [
  {
    icon: <Palette className="text-green-400 w-6 h-10" />,
    title: 'Designer',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Canva']
  },
  {
    icon: <Video className="text-green-400 w-6 h-10" />,
    title: 'Editor',
    description: 'Robust server-side development with APIs and databases.',
    tools: ['Premiere Pro', 'After Effects', 'First Cut Pro', 'Davinci']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#333138] text-[#FFFFFA] justify-center w-full min-h-[calc(100vh-64px)] p-6 md:p-16 flex flex-col gap-10">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">My Skills</h2>
        <p className="text-[#FFFFFA]/80 max-w-xl mx-auto text-2xl">
          Here are some of the skills I bring to the table in frontend and backend development.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-[#515052] rounded-xl p-5 shadow-lg hover:shadow-xl hover:bg-[#FF312E] transition-all duration-300 border border-[#515052]/30"
          >
            <div className="flex items-start justify-center gap-4">
              {skill.icon}
              <div>
                <h3 className="text-3xl font-semibold">{skill.title}</h3>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-y-2 text-[#FFFFFA]">
              {skill.tools.map((tool, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FFFFFA] rounded-full" />
                  {tool}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;