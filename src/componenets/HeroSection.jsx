import React, { useState } from 'react';
import HexVideo from '../images/hex-demo.mp4';

export default function HeroSection() {
  const [showFullVideo, setShowFullVideo] = useState(false);

  return (
    <section className="bg-[#0E0C14] text-white py-24 px-4 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-4 z-10">
          <h1 className="text-[60px] leading-[1.1] font-extrabold text-left tracking-tight">
            <div className="text-[#f5e1e7]">Bring</div>
            <div className="text-[#f5e1e7]">everyone</div>
            <div className="text-[#f5e1e7]">together</div>
            <div className="text-[#f5e1e7]">with data</div>
          </h1>
        </div>

        {/* Right Content */}
        <div className="text-left space-y-6 z-10">
          <p className="text-lg text-[#f5d8e1]">
            Go end-to-end from quick queries to deep-dive analyses to beautiful interactive data apps – all in one collaborative, AI-powered workspace.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <a
              href="#"
              className="bg-[#281828] border border-[#f5d8e1] text-[#f5d8e1] px-6 py-3 rounded-md font-medium hover:bg-[#3a2a3a] transition"
            >
              Get started for free
            </a>
            <a
              href="#"
              className="border border-[#f5d8e1] text-[#f5d8e1] px-6 py-3 rounded-md font-medium hover:bg-[#1e1b26] transition"
            >
              Request a demo
            </a>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative flex justify-center mt-16">
        {/* Video Background */}
        <video
          src={HexVideo}
          className="w-full max-w-5xl rounded-lg shadow-lg"
          muted={!showFullVideo}
          autoPlay
          loop={!showFullVideo}
          controls={showFullVideo}
        />

        {/* Overlay Button */}
        {!showFullVideo && (
          <button
            onClick={() => setShowFullVideo(true)}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <div className="bg-[#1b1b22]/80 border border-[#6f5a77] px-6 py-3 rounded-full flex items-center shadow-xl backdrop-blur-md hover:bg-[#292933] transition">
              <span className="text-pink-300 text-lg mr-2">▶</span>
              <span className="font-medium text-white">Watch a full demo</span>
              <span className="ml-2 text-sm text-gray-400">5 min</span>
            </div>
          </button>
        )}
      </div>
    </section>
  );
}
