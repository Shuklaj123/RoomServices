import React from "react";
import feature from "../assets/feature.jpg"; 

const Features = () => {
  console.log(feature); 

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="lg:w-1/2 bg-white p-10 rounded-xl shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Explore Our Featured Properties and Projects
            </h2>
            <p className="text-gray-700 mb-8">
              Discover The Properties And Projects That Showcase Samadhaan Foundation’s
              Commitment To Excellence. From Luxurious Residential Homes To Thriving Commercial
              Spaces, And Even Custom Civil Construction Projects, We Help Clients Achieve Their
              Dreams With Unmatched Dedication And Expertise.
            </p>
          </div>
          <button className="bg-[#001F3F] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#001933] transition w-fit">
            Get In Touch &rarr;
          </button>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 relative h-64 lg:h-auto">
          <img
            src={feature}  
            alt="Property"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
          <div className="absolute bottom-4 left-4 text-white bg-black/40 p-4 rounded-md">
            <h3 className="font-semibold text-lg">Green Valey</h3>
            <p className="text-sm">Austin, Texas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
