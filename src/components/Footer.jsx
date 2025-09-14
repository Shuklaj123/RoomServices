import React from "react";
import logo from "../assets/logo.png";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#021224] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">
        
        {/* Logo and Company Info */}
        <div>
          <img src={logo} alt="logo" className="w-80 " />
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <p className="flex items-center gap-2">
            <MapPin size={18} className="text-green-500" />
            LMC 3, Sector C Aliganj Lucknow
          </p>
          <p className="flex items-center gap-2">
            <Phone size={18} className="text-green-500" />
            +91 955-462-2666
          </p>
          <p className="flex items-center gap-2">
            <Mail size={18} className="text-green-500" />
            samadhaangroups@gmail.com
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-green-500 transition">
                For Rent
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition">
                For Buy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
        ©2024 Samadhaan Foundation. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
