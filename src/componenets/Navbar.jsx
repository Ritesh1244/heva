import React from "react";
import hexLogo from "../images/hex.webp";
import { FiBox, FiGrid, FiMapPin, FiTriangle, FiAlignJustify } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="px-15 py-12  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-pink-200 font-medium">
        
        {/* Left Items */}
        <nav>
          <ul className="flex items-center space-x-6">
            <li className="flex items-center space-x-1">
              <FiBox size={16} />
              <a href="#" className="hover:text-white">Product</a>
              
            </li>
            <li className="flex items-center space-x-1">
              <FiGrid size={16} />
              <a href="#" className="hover:text-white">Use cases</a>

            </li>
            <li className="flex items-center space-x-1">
              <FiMapPin size={16} />
              <a href="#" className="hover:text-white">Enterprise</a>
            </li>
          </ul>
        </nav>

        {/* Logo */}
        <div className="text-2xl font-extrabold text-pink-300 tracking-widest">
          HEX
        </div>

        {/* Right Items */}
        <nav>
          <ul className="flex items-center space-x-6">
            <li className="flex items-center space-x-1">
              <FiTriangle size={16} />
              <a href="#" className="hover:text-white">Resources</a>
              
            </li>
            <li className="flex items-center space-x-1">
              <FiAlignJustify size={16} />
              <a href="#" className="hover:text-white">Pricing</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Log In</a>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <a href="#" className="ml-6 border border-pink-200 text-pink-200 hover:bg-pink-200 hover:text-black px-4 py-2 rounded-md transition">
          Get started
        </a>
      </div>
    </header>
  );
}
