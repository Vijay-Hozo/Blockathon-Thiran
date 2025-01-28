"use client";
import React from "react";
import { Cross,Landmark,Coins,Container,Wifi ,Bitcoin} from "lucide-react";

const Themes = () => {
  const themes = [
    
    {
      icon: <Cross className="w-12 h-12 mx-auto text-blue-400" />, 
      label: "Health Care",
      description: "Discover cutting-edge technologies to enhance healthcare systems and improve patient outcomes. Leverage digital solutions to streamline medical processes and foster innovation in health services.",
    },
    {
      icon: <Landmark className="w-12 h-12 mx-auto text-blue-400" />, 
      label: "Banking and Finance",
      description: "Transform the financial industry with secure, efficient, and scalable digital solutions. Drive the future of banking by integrating blockchain, AI, and cybersecurity technologies to enhance financial services.",
    },
    {
      icon: <Coins className="w-12 h-12 mx-auto text-blue-400" />, 
      label: "Insurance",
      description: "Revolutionize the insurance industry with modern, secure, and efficient digital solutions. Innovate processes such as claims handling, underwriting, and customer service using blockchain and data-driven technologies.",
    },
    {
      icon: <Container className="w-12 h-12 mx-auto text-blue-400" />, 
      label: "Supply Chain Management",
      description: "Optimize and secure supply chain operations with blockchain and digital technologies. Improve transparency, reduce costs, and increase efficiency through smart contracts and secure network solutions.",
    },
    {
      icon: <Wifi className="w-12 h-12 mx-auto text-blue-400" />, 
      label: "Internet of Things",
      description: "Enable the future of interconnected devices with secure, scalable solutions. Harness IoT technologies to enhance automation, data collection, and real-time monitoring for various industries.",
    },
    {
      icon: <Bitcoin className="w-12 h-12 mx-auto text-blue-400" />, 
      label: "Crypto currency",
      description: "Empower financial transactions and digital assets with innovative cryptocurrency solutions. Secure, decentralized platforms that enable transparent, fast, and efficient blockchain-powered exchanges.",
    }    
  ];

  return (
    <section id="themes" className="bg-black text-white py-16 overflow-x-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-500">Themes</h2>
        <p className="text-base sm:text-lg mt-4 text-gray-300">
          Dive into cutting-edge themes that push the boundaries of technology. Choose your challenge and innovate for the future!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 flex-wrap gap-6 mt-10">
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
    </section>
  );
};

export default Themes;