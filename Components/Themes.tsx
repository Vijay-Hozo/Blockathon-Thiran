"use client";
import React from "react";
import { Shield, Leaf,Bot, Cpu } from "lucide-react";

const Themes = () => {
  const themes = [
    { icon: <Shield className="w-12 h-12 mx-auto" />, label: "Blockchain and Cybersecuity" },
    { icon: <Leaf className="w-12 h-12 mx-auto" />, label: "Agriculture Technology" },
    { icon: <Bot className="w-12 h-12 mx-auto" />, label: "Robotics and Drones" },
    { icon: <Cpu className="w-12 h-12 mx-auto" />, label: "AI & ML in Hardware" },
  ];

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-500">Themes</h2>
        <p className="text-lg mt-4 text-gray-300">
          Dive into cutting-edge themes that push the boundaries of technology. Choose your challenge and innovate for the future!
        </p>
        <div className="flex justify-center items-center w-[200px] md:grid-cols-4 gap-6 mt-10 ">
          {themes.map((theme, index) => (
            <div
              key={index}
              className="bg-gray-800 w-[300px] h-[200px] rounded-lg p-6 shadow-lg hover:scale-115 hover:shadow-blue-500/50 transition duration-300"
            >
              {theme.icon}
              <p className="mt-4 text-lg font-semibold">{theme.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Themes;
