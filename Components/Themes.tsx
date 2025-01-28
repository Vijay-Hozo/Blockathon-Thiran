"use client";
import React from "react";
import { Shield, Leaf, Bot, Cpu } from "lucide-react";

const Themes = () => {
  const themes = [
    {
      icon: <Shield className="w-12 h-12 mx-auto text-blue-400" />, 
      label: "Blockchain and Cybersecurity",
      description: "Explore innovative solutions to secure and transform digital networks. Build the future of blockchain and cybersecurity.",
    },
    {
      icon: <Leaf className="w-12 h-12 mx-auto text-green-400" />, 
      label: "Agriculture Technology",
      description: "Revolutionize farming practices with modern technological solutions. Develop sustainable agriculture for the future.",
    },
    {
      icon: <Bot className="w-12 h-12 mx-auto text-red-400" />, 
      label: "Robotics and Drones",
      description: "Build cutting-edge robots and aerial drones to automate the future. Create intelligent machines for a smarter world.",
    },
    {
      icon: <Cpu className="w-12 h-12 mx-auto text-yellow-400" />, 
      label: "AI & ML in Hardware",
      description: "Integrate intelligent algorithms with advanced hardware design. Develop AI and ML solutions for the next generation of devices.",
    },
  ];

  return (
    <div className="bg-black text-white py-16 overflow-x-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-500">Themes</h2>
        <p className="text-base sm:text-lg mt-4 text-gray-300">
          Dive into cutting-edge themes that push the boundaries of technology. Choose your challenge and innovate for the future!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {themes.map((theme, index) => (
            <div
              key={index}
              className="relative group bg-gray-800 flex flex-col justify-center items-center w-full h-[200px] sm:h-[250px] rounded-lg p-6 shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-300 overflow-hidden"
            >
              <div className="text-center">
                {theme.icon}
                <p className="mt-4 text-base sm:text-lg font-semibold">{theme.label}</p>
              </div>

              <div
                className="absolute bottom-0 left-0 w-full h-full bg-gray-700/90 p-4 text-center text-gray-200 translate-y-full 
                           group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
              >
                <h1 className="text-sm sm:text-base md:text-lg">{theme.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Themes;