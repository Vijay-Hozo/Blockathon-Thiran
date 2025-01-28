import React from "react";
import Cup from "@/public/Images/Cup.png";
import Image from "next/image";
const Prizes = () => {
  return (
    <div className="bg-black text-white text-center py-10">
      <h1 className="text-6xl font-bold text-blue-500 mb-10">Prizes</h1>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-gray-800 rounded-xl p-6 w-64 text-center shadow-lg">
          <div className="text-yellow-400 text-4xl mb-4">🏅</div>
          <h3 className="text-2xl font-semibold mb-2">₹20,000</h3>
          <p className="mb-2">Cash prize of ₹20,000</p>
          <p>Industry Internship Opportunities</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 w-64 text-center shadow-lg">
          <div className="text-gray-400 text-4xl mb-4">🥈</div>
          <h3 className="text-2xl font-semibold mb-2">₹15,000</h3>
          <p className="mb-2">Cash prize of ₹15,000</p>
          <p>Industry Internship Opportunities</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 w-64 text-center shadow-lg">
          <div className="text-orange-600 text-4xl mb-4">🥉</div>
          <h3 className="text-2xl font-semibold mb-2">₹10,000</h3>
          <p className="mb-2">Cash prize of ₹10,000</p>
          <p>Industry Internship Opportunities</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 w-64 text-center shadow-lg">
          <div className="text-yellow-500 text-4xl mb-4">✨</div>
          <p className="mb-2">Certificates</p>
          <p>Special Awards for the best innovative solutions</p>
        </div>
      </div>
      <div className="flex justify-evenly items-center w-full p-8 rounded-2xl shadow-2xl mt-10">
        <div className="flex-shrink-0">
          <Image
            src={Cup}
            alt="Cup"
            width={150}
            height={150}
            className="rounded-full border-4 border-yellow-400 shadow-lg"
          />
        </div>
        <div className="text-center ml-6">
          <h2 className="text-4xl font-bold text-yellow-400 tracking-wider">
            Total Prize Pool: ₹45,000
          </h2>
          <p className="text-lg mt-4 text-white font-medium">
            Exciting{" "}
            <span className="text-blue-400">
              Industry Internship Opportunities
            </span>
          </p>
          <p className="text-sm text-gray-300 mt-2">
            Don’t miss out on a chance to win rewards and gain industry
            exposure!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
