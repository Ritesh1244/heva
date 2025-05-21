import React from 'react';
import Action1 from "../images/action1.avif";
import Action2 from "../images/action2.avif";
import Lighting from '../images/lighing.png'

export default function InteractiveAPP() {
  return (
    <div className="min-h-screen bg-[#0e0e1a] text-white font-sans p-6 flex flex-col md:flex-row items-center justify-center gap-10 relative overflow-hidden">
      
      {/* Left Text Panel */}
      <div className="max-w-sm z-10">
        <div >
            <img 
            src={Lighting}
            alt="Lightning Logo"
            className='w-10 h-10'
            />
        </div>
        <h1 className="text-3xl font-bold leading-tight">
          <span className="block">Interactive apps</span>
          <span className="block">and reporting</span>
        </h1>
        <p className="mt-4 text-pink-400">
          Publish your work into beautiful reports, data apps, and dashboards with a drag-and-drop UI builder.
        </p>
        <button className="mt-4 px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded text-white font-semibold shadow">
          Explore App Builder
        </button>
      </div>

      {/* Right Dashboard Panel */}
      <div className="relative w-full md:w-[800px] bg-[#151520] p-6 rounded-lg shadow-lg border border-gray-700 z-10">
        <h2 className="text-white text-xl font-bold mb-4">Vantage Cohort Definitions</h2>

        <div className="grid grid-cols-2 gap-4 text-sm text-white">
          <div>dimensions: <span className="bg-gray-700 rounded px-1 py-0.5">WORKSPACE_SEGMENT</span> <span className="bg-gray-700 rounded px-1 py-0.5">EMAIL_DOMAIN_TYPE</span></div>
          <div>last_x_months: <span className="bg-gray-700 rounded px-1 py-0.5">Company</span> <span className="bg-gray-700 rounded px-1 py-0.5">Education</span></div>
          <div>company_segment: <span className="bg-gray-700 rounded px-1 py-0.5">All</span></div>
          <div>sales_type: <span className="bg-gray-700 rounded px-1 py-0.5">Self serve</span></div>
        </div>

        <h3 className="text-white font-semibold mt-6 mb-2">ARR and Workspaces Churned by Month</h3>

        <div className="relative mt-4 h-[200px] bg-gray-800 rounded-md flex items-center justify-center text-gray-400">
          Adding chart...
        </div>

        {/* Floating Images (Charts) */}
        <img
          src={Action1}
          alt="Chart 1"
          className="animate-floating-diagonal-slow absolute bottom-[-40px] left-[-80px] w-[250px] shadow-lg rounded"
        />
        <img
          src={Action2}
          alt="Chart 2"
          className="animate-floating-diagonal-fast absolute bottom-[-60px] right-[-40px] w-[250px] shadow-lg rounded"
        />
      </div>

      {/* Custom animations */}
      <style>
        {`
          @keyframes floating-diagonal-slow {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(6px, -6px); }
          }

          @keyframes floating-diagonal-fast {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(-6px, 6px); }
          }

          .animate-floating-diagonal-slow {
            animation: floating-diagonal-slow 4s ease-in-out infinite;
          }

          .animate-floating-diagonal-fast {
            animation: floating-diagonal-fast 3.5s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}
