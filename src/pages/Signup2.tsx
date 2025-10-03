import bgImage from "../assets/tractor.jpg";
import logo from "../assets/Logo white 1.svg";
import { Link } from "react-router-dom";

import React from "react";

const Signup2: React.FC = () => {
  return (
    <div
      className="instrument-sans relative h-screen w-full bg-cover bg-center overflow-hidden" 
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Top Navbar */}
      <header className="relative flex items-center justify-between px-6 md:px-12 py-4">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            className="w-[162.08px] h-[42.83px] object-contain"
            alt="Logo"
          />
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative flex flex-col justify-center items-center sm:items-start h-[calc(100vh-72px)] px-8 md:px-16 gap-12 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-instrument font-semibold text-white leading-snug tracking-tight">
          Fresh Food From <br /> Farmers
        </h1>

       <div className="flex flex-col sm:flex-row gap-6">
          < Link to='/createaccount'> <button className="bg-sec hover:bg-sec2 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition">
            Sign Up As Farmer
          </button>
          </Link>
        <Link to='/signup' >    <button className="bg-sec hover:bg-sec2 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition">
            Sign Up As Customer
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup2;

