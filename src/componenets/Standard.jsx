import React from 'react';
import Standard2 from '../images/standard.webp';

const companies = [
  {
    name: 'Substack',
    title: 'Rapid exploration on-demand',
    description:
      'Substack realigned its analytics stack with Hex for speed and quality.',
  },
  {
    name: 'ClickUp',
    title: 'Operationalized data science',
    description:
      'ClickUp used Hex to turn a data science churn project into a cross-functional, customer-saving program.',
  },
  {
    name: 'Notion',
    title: 'One place for insights',
    description:
      'Notion made Hex the one place for everyone, from data science to CX and sales, to make decisions with data.',
  },
  {
    name: 'Modern Treasury',
    title: 'Empowering exploration',
    description:
      'Modern Treasury uses Hex to enable Engineering, Product, and Design teams to explore on their own.',
  },
];

export default function Standard() {
  return (
    <div className="bg-[#0F0F1C] text-white px-6 py-12 space-y-16">
      
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          A new <span className="text-pink-300">standard</span> <br /> for data work
        </h1>
        <p className="text-gray-400">Hex helps 1,000s of teams do more with their data.</p>
      </div>

      {/* Company Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {companies.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#1A1A2E] p-6 rounded-md border border-[#2C2C3E] hover:border-pink-300 transition"
          >
            <div className="text-sm text-purple-300 font-semibold mb-2">{item.name}</div>
            <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Single Image Showcase */}
      <div className="flex flex-col md:flex-row bg-[#0F0F10] px-8 py-10 rounded-xl space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={Standard2}
            alt="Top 100 2020"
            className="w-1/2 h-full rounded-xl shadow-lg object-contain"
          />
        </div>
      </div>

      {/* Testimonial Section - 50/50 split */}
      <div className="flex flex-col md:flex-row items-center bg-[#1A1A2E] p-6 rounded-md border border-[#2C2C3E] w-full">
        {/* Image Half */}
        <div className="w-1/2 md:w-1/2 flex justify-center items-center p-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
            alt="Notion Logo"
            className="h-24 object-contain"
          />
        </div>
        
        {/* Testimonial Half */}
        <div className="w-1/2 md:w-1/2 p-4">
          <p className="text-sm text-white italic mb-2">
            "Our vision for Notion's data team is that anyone, regardless of technical proficiency,
            is comfortable using data to answer their own questions — and Hex enables that."
          </p>
          <p className="text-xs text-gray-400">
            <span className="font-semibold text-white">Abhishek Nadi</span> - Software Engineer at Notion
          </p>
        </div>
      </div>
      
    </div>
  );
}