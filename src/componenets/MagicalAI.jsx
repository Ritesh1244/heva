import React from 'react'
import Image2 from '../images/image2.png'
import logo from '../images/logo.png'


export default function MagicalAI() {
 return (
  <div className='bg-[#0E0C14]'>
    <section className="w-full bg-[#0E0C14] text-white py-20 relative overflow-hidden font-sans">
      {/* Background Mesh Pattern */}
      <div className="absolute inset-0 bg-[url('/mesh-bg.svg')] bg-cover opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center px-4 flex flex-col items-center">
        {/* Logo above heading */}
        <img src={logo} alt="AI Logo" className="w-10 h-10 mb-4" />

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Magical AI, built right in
        </h1>

        {/* Description */}
        <p className="text-[18px] md:text-[20px] text-pink-200 max-w-2xl mb-12 leading-relaxed">
          Generate queries, write code, create visualizations, fix bugs, and kickstart whole analyses – all from a prompt.
        </p>

        {/* Chart Section */}
        <div className="bg-[#1E1F2A] rounded-lg overflow-hidden max-w-3xl w-full shadow-lg mb-8">
          <img
            src={Image2}
            alt="AI Chart"
            className="w-full object-contain"
          />
        </div>

        {/* CTA Button */}
        <button className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition rounded-sm font-medium">
          Explore AI tools
        </button>
      </div>
    </section>
    </div>
  )
}