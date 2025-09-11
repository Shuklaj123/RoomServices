import React from "react";

const BuyerSellers = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top small heading */}
        <p className="text-blue-600 text-sm font-semibold text-center mb-2">
          Your Satisfaction is Our Priority – Build, Buy, Sell, Rent, or Partner with Confidence
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
          Comprehensive Real Estate and Construction Solutions for All
        </h2>

        <div className="space-y-16"> {/* Increased spacing between rows */}
          {/* Buyers Row */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-10"> {/* More gap */}
            {/* Left Title */}
            <h3 className="text-xl font-bold w-full md:w-1/4 mb-4 md:mb-0">FOR BUYERS</h3>
            {/* Right Content */}
            <div className="w-full md:w-3/4">
              <p className="text-gray-700 mb-6">
                Looking to buy your dream home or invest in a commercial property?
                Samadhaan Foundation offers expert guidance and a wide range of
                residential and commercial properties to match your needs. Let us
                help you find the perfect space.
              </p>
              <button className="bg-[#001F3F] text-white px-12 py-2 rounded-full font-semibold hover:bg-[#001933] transition">
                Buy a Property
              </button>
            </div>
          </div>

          {/* Sellers Row */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-10"> {/* More gap */}
            {/* Left Title */}
            <h3 className="text-xl font-bold w-full md:w-1/4 mb-4 md:mb-0">FOR SELLERS</h3>
            {/* Right Content */}
            <div className="w-full md:w-3/4">
              <p className="text-gray-700 mb-6">
                Ready to sell your property? We provide expert strategies and
                leverage our social media marketing partnerships to maximize your
                property’s value. Sell with ease and confidence with Samadhaan
                Foundation.
              </p>
              <button className="bg-[#001F3F] text-white px-12 py-2 rounded-full font-semibold hover:bg-[#001933] transition">
                Sell a Property
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyerSellers;
