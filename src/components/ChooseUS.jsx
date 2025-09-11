import React from "react";

const ChooseUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <h2 className="text-5xl font-black text-center mb-12">
  Why Choose Us?
</h2>

      {/* Grid: md => 3 cols and 2 rows so row-span/col-span works predictably */}
      <div className="grid gap-6 md:grid-cols-3 md:grid-rows-2 items-stretch">
        {/* Top-left */}
        <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition h-full">
          <div className="text-3xl mb-4">📈</div>
          <h3 className="text-xl font-semibold mb-2">Market Expertise</h3>
          <p className="text-gray-600 text-sm">
            Unmatched Market Expertise in real estate and construction, backed by
            years of experience and deep industry knowledge to guide you every
            step of the way.
          </p>
        </div>

        {/* Top-middle */}
        <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition h-full">
          <div className="text-3xl mb-4">💡</div>
          <h3 className="text-xl font-semibold mb-2">Customized Approach</h3>
          <p className="text-gray-600 text-sm">
            Tailored Solutions Designed for You – we understand your unique
            needs and provide personalized real estate and construction services
            to match your goals.
          </p>
        </div>

        {/* Right (dark) - span 2 rows */}
        <div className="bg-[#00142E] text-white p-6 rounded-xl shadow-lg md:row-span-2 flex flex-col justify-between h-full">
          <div>
            <div className="text-3xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold mb-2">Strong Network</h3>
            <p className="text-gray-300 text-sm">
              A Strong Network of industry professionals, ensuring access to the
              best opportunities, resources, and partnerships for your real
              estate and construction projects.
            </p>
          </div>

          <button className="mt-6 bg-white text-black font-medium px-5 py-2 rounded-full hover:bg-gray-200 transition self-start">
            Get in touch
          </button>
        </div>

        {/* Bottom large card spanning first two columns */}
        <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition md:col-span-2 h-full">
          <div className="text-3xl mb-4">🌞</div>
          <h3 className="text-xl font-semibold mb-2">Commitment to Excellence</h3>
          <p className="text-gray-600 text-sm">
            Committed to Excellence in Every Project – Trust Samadhaan Foundation
            for reliable, transparent, and result-driven real estate and
            construction solutions. Contact us today to start your journey!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
