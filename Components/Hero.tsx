import React from 'react';
import {BackgroundLines} from "@/Components/ui/background-lines"

const data = [
  {
    title: 'Date & Time',
    description: '20 February, 2025 & 9:00 AM',
  },
  {
    title: 'Organized By',
    description: 'Dept of IT'
  },
  {
    title: 'Location',
    description: 'Sri Eshwar College of Engineering, Coimbatore'
  }
]
const Hero = () => (
<BackgroundLines
    // id="creatathon"
    className=" flex items-center justify-center h-screen bg-[#080D18] text-white"
  >
    <div className="absolute inset-0">
      {/* <img
        src="https://i.ytimg.com/vi/Gg_9Cc3NKK8/maxresdefault.jpg"
        // src="https://wallpaperaccess.com/full/9254940.png"
        alt="Earth background"
        layout="fill"
        className="w-full h-full object-cover opacity-40"
      /> */}
    </div>
    <div className="relative z-10 text-center max-w-4xl">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        <h1 className='text-[#f9faf8] p-5 mb-6 text-6xl'>⚡BLOCKATHON⚡</h1>
         <h1 className='text-4xl'>Building A Smarter World With Blockchain and Cybersecuity!</h1>
      </h1>
      <p className="text-base sm:text-xl mb-8">
        An exciting hackathon for engineering students and tech enthusiasts to create innovative solutions for a smarter world.
      </p>
      <div className="flex justify-between gap-10">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center  p-4 rounded-lg hover:scale-105 transition duration-200">
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-base">{item.description}</p>
          </div>
        ))}
      </div>
      <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 mt-10">
        Register Now 🚀
      </button>
      <p className="mt-4 text-lg">Participate Now and Get Amazing Perks!🎉</p>
    </div>
  </BackgroundLines>
);

export default Hero;
