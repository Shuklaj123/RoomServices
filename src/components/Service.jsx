import React, { useState, useEffect } from "react";
import home1 from "../assets/home1.webp";
import home2 from "../assets/home2.jpeg";
import home3 from "../assets/home3.jpg";
import home4 from "../assets/home4.jpg";

const Service = () => {
  const images = [home1, home2, home3,home4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 sec me image change hogi
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative h-screen bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div> {/* overlay */}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col justify-center h-full">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Where Every <span className="text-gray-200">Homes</span> <br />
          Feels like <span className="text-white">Home</span>
        </h1>

        <div className="flex gap-4 mt-8 flex-wrap">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700">
            For Rent
          </button>
          <button className="border border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600">
            For Construction
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700">
            For Buy
          </button>
          <button className="border border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600">
            For Sell
          </button>
        </div>
      </div>
    </section>
  );
};

export default Service;
