"use client";
import React, { useState, useEffect } from "react";

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const Countdown = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date("2025-02-02T00:00:00").getTime();
    const currentDate = new Date().getTime();
    const difference = targetDate - currentDate;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});

  useEffect(() => {
    setTimeLeft(calculateTimeLeft()); 

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  const navigate = () => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSdrhMF_WjKVls4MZdKsgV7Fm2qamQjJ2XOkkP1R1vBYmZpi3Q/viewform";
  };

  return (
    <section id="countdown" 
    className="bg-black text-white py-10 overflow-x-hidden">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-blue-500 tracking-wide">
          Countdown
        </h2>
        <p className="text-base md:text-xl mt-2">Countdown Until the Event</p>
        <p className="text-sm md:text-lg mt-2 font-semibold">
          Last Date to Register: <span className="text-indigo-400">February 2, 2025</span>
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {Object.keys(timeLeft).map((interval) => (
            <div
              key={interval}
              className="bg-gray-800 flex flex-col justify-center items-center text-white rounded-lg p-4 shadow-md w-[100px] h-[100px] md:w-[200px] md:h-[200px] text-center transform transition-transform"
            >
              <p className="text-3xl md:text-6xl font-bold">
                {timeLeft[interval as keyof TimeLeft]?.toString().padStart(2, "0") || "00"}
              </p>
              <p className="text-xs md:text-sm uppercase mt-1">{interval}</p>
            </div>
          ))}
        </div>
        <button
          onClick={navigate}
          className="mt-8 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
        >
          Register Now
        </button>
      </div>
    </section>
  );
};

export default Countdown;
