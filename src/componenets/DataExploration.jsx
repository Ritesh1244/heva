
import React from "react";
import { useEffect, useRef, useState }  from 'react'
import cell_chart from '../images/cell-chart-1@2x.avif'

const slides = [
  cell_chart,
  cell_chart
];
export default function DataExploration() {
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      containerRef.current.scrollTo({
        top: (current + 1) % slides.length * 350, // Assuming 350px height/image
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="w-full h-screen bg-[#0E0C14] text-white flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col md:flex-row px-4 md:px-10 gap-10">
        {/* Left Text Section */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Data exploration <br /> superpowers
          </h1>
          <p className="text-lg text-pink-200 mb-6">
            SQL, Python, R, pivots, spreadsheets, charts, all together, all in a modular, notebook-based canvas.
          </p>
          <button className="w-fit px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition">
            Explore Notebooks
          </button>
        </div>

        {/* Right Auto-Scroll Image Showcase */}
        <div className="md:w-1/2 h-[350px] overflow-hidden">
          <div
            ref={containerRef}
            className="h-full transition-all duration-500 ease-in-out"
            style={{ overflowY: "hidden", scrollBehavior: "smooth" }}
          >
            {slides.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`slide-${idx}`}
                className="w-full h-[350px] object-contain mb-4"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}