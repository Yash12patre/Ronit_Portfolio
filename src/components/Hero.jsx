import React from 'react'
import { Instagram, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';
import ronit from "../assets/ronit.jpg"

const Hero = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 p-6 md:p-16 bg-gray-900 text-white min-h-[calc(100vh-64px)] w-full">

            <div className="flex flex-row md:flex-col gap-6 md:gap-8 text-2xl flex-shrink-0">
                <a href="https://www.instagram.com/ashron.art/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-blue-400 transition-colors">
                    <Instagram />
                </a>
                <a href="https://www.linkedin.com/in/ronit-s-28a86a114/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
                    <Linkedin />
                </a>
                <a href="https://www.instagram.com/prakhar_parsai/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-400 transition-colors">
                    <Github />
                </a>
            </div>

            <div className="flex justify-center flex-1 mb-6 md:mb-0">
                <img
                    src={ronit}
                    alt="Ronit S. portrait"
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 object-cover rounded-full shadow-lg border-4 border-blue-600"
                />
            </div>

            <div className="flex flex-col items-center  md:items-start gap-4 md:gap-8 flex-1 text-center md:text-left">

                <span className="text-3xl sm:text-4xl md:text-6xl font-bold">RONIT SHARMA</span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-300">Visual Designer</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-md">
                    I am a creative designer based in New York and I am very passionate and dedicated to my work.
                </p>
                <Button className="mt-2 w-fit mx-auto md:mx-0">Say Hello!</Button>
            </div>

        </section>
    )
}

export default Hero