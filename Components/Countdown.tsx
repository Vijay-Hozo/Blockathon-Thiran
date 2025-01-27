"use client";
import React, { useState, useEffect } from "react";

// Define the structure of the timeLeft object
interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const Countdown = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date("2025-01-31T00:00:00").getTime(); // Convert to timestamp
    const currentDate = new Date().getTime(); // Convert to timestamp
    const difference = targetDate - currentDate; // Perform subtraction

    let timeLeft: TimeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-lg uppercase text-indigo-400 tracking-wide">
          Countdown
        </h2>
        <p className="text-xl mt-2">
          Countdown Until the Event. Register Now
        </p>
        <p className="text-lg mt-2 font-semibold">
          Last Date to Register:{" "}
          <span className="text-indigo-400">January 31, 2025</span>
        </p>
        <div className="flex justify-center gap-4 mt-6">
          {/* Map through keys of timeLeft */}
          {Object.keys(timeLeft).map((interval) => (
            <div
              key={interval}
              className="bg-gray-800 text-white rounded-lg p-4 shadow-md w-20 text-center"
            >
              <p className="text-3xl font-bold">
                {timeLeft[interval as keyof TimeLeft] || "00"}
              </p>
              <p className="text-sm uppercase mt-1">{interval}</p>
            </div>
          ))}
        </div>
        <button className="mt-8 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Countdown;
