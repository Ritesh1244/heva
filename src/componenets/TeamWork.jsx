import React from 'react';
import TeamWorkLogo from '../images/team-work@2x.avif';

export default function Teamwork() {
  return (
    <div className="bg-[#0E0C14] text-white py-12 px-6 flex flex-col lg:flex-row items-center lg:items-start gap-10 max-w-7xl mx-auto  ">
      {/* Left side image */}
      <div className="w-full lg:w-1/2 flex justify-center pl-45 ">
        <img
          src={TeamWorkLogo}
          alt="Teamwork analytics"
          className="rounded-xl shadow-xl w-full max-w-[500px] h-auto object-contain"
        />
      </div>

      {/* Right side content */}
      <div className="w-full lg:w-1/2 max-w-lg text-center lg:text-left mt-50">
        <h2 className="text-3xl font-bold mb-4">Teamwork, that works for teams</h2>

        <p className="text-gray-400 mb-6">
          Get feedback from peers, align with stakeholders, review diff views, endorse trusted data, and build from reusable components — all in the same place.
        </p>

        <button className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-300 transition">
          Explore collaboration
        </button>
      </div>
    </div>
  );
}