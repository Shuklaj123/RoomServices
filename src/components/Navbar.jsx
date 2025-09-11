import React from 'react'
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
     <nav className="bg-[#011627] text-white shadow-md">

      <div className=" mx-auto flex items-center justify-between h-22">
        
       <img src={logo} alt="logo" className="h-20 w-auto object-contain"/>

        {/* Menu Links */}
       <div className=" hidden md:flex gap-6 pr-110 font-bold text-lg">
          <a href="#home" className="hover:text-green-400 transition">Home</a>
          <a href="#about" className="hover:text-green-400 transition">About Us</a>
          <a href="#buy" className="hover:text-green-400 transition">Buy</a>
          <a href="#rent" className="hover:text-green-400 transition">Rent</a>
          <a href="#contact" className="hover:text-green-400 transition">Contact Us</a>
        </div>
        
      </div>

    </nav>
    
  )
}

export default Navbar
