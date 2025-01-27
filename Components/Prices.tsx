import React from "react";

const Prizes = () => {
  return (
    <div className="bg-black text-white text-center py-10">
      <h1 className="text-4xl font-bold text-blue-400 mb-10">Prizes</h1>
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
      <h2 className="text-2xl font-bold text-yellow-400 mt-10">Total Prize Pool: ₹45,000</h2>
    </div>
  );
};

export default Prizes;
