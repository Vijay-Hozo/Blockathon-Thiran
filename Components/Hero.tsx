"use client";
import React from "react";
import { BackgroundLines } from "@/Components/ui/background-lines";

const data = [
  {
    title: "Date & Time",
    description: "20 February, 2025 & 9:00 AM",
  },
  {
    title: "Organized By",
    description: "Dept of IT",
  },
  {
    title: "Location",
    description: "Sri Eshwar College of Engineering, Coimbatore",
  },
];

const registration = () => {
  window.location.href =
    "https://docs.google.com/forms/d/e/1FAIpQLSdrhMF_WjKVls4MZdKsgV7Fm2qamQjJ2XOkkP1R1vBYmZpi3Q/viewform";
};

const Hero = () => (
  <BackgroundLines className="relative flex items-center justify-center min-h-screen bg-[#080D18] text-white overflow-x-hidden" >
    <div className=" inset-0"></div>
    <div className=" z-10 flex flex-col items-center text-center max-w-4xl px-4">
      <h1 className="text-[#f9faf8] p-5 text-5xl md:text-6xl font-bold">
        ⚡BLOCKATHON⚡
      </h1>

      <div className="flex flex-col items-center space-y-2 mt-4">
        <div className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full md:w-3/4 blur-sm" />
        <div className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full md:w-2/3" />
        <div className="bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-full md:w-1/3 blur-sm" />
        <div className="bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[10px] w-full md:w-1/4" />
      </div>

      <h2 className="text-2xl md:text-4xl font-medium mt-4">
        Create the secured society with <br /> Blockchain and Cybersecurity
      </h2>

      <p className="text-sm sm:text-lg md:text-xl my-6">
        An exciting hackathon for engineering students and tech enthusiasts to
        create innovative solutions for a smarter world.
      </p>

      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 md:p-8 rounded-lg hover:scale-105 transition duration-200 bg-[#1a1d2e] shadow-lg"
          >
            <h3 className="text-md md:text-lg font-bold">{item.title}</h3>
            <p className="text-sm md:text-base text-center">{item.description}</p>
          </div>
        ))}
      </div>

      <button
        onClick={registration}
        className="px-4 py-2 md:px-6 md:py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 mt-10"
      >
        Register Now 🚀
      </button>

      <p className="mt-4 text-sm md:text-lg">
        Participate Now and Get Amazing Perks! 🎉
      </p>
    </div>
  </BackgroundLines>
);

export default Hero;
