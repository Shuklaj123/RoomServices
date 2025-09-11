import React from "react";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.jpg";
import card5 from "../assets/card5.jpg";
import card6 from "../assets/card6.jpg";

const properties = [
  {
    id: 1,
    title: "SHUKLA House Ploy2",
    address: "Lucknow",
    sqft: 1200,
    price: 500,
    status: "AVAILABLE FOR RENT",
    location: "Lko",
    owner: "PRAPTI",
    image: card1,
  },
  {
    id: 2,
    title: "TATA House For PRAPTI",
    address: "B12 A, L Road, Mahanagar, Lucknow, Uttar Pradesh 226006",
    sqft: 1000,
    price: 2000,
    status: "AVAILABLE FOR SALE",
    location: "Lucknow",
    owner: "PRAPTI",
    image: card2,
  },
  {
    id: 3,
    title: "Dream House",
    address: "Sitapur Road",
    sqft: 600,
    price: 4500,
    status: "AVAILABLE FOR SALE",
    location: "Lucknow",
    owner: "PRAPTI",
    image: card3,
  },
  {
    id: 4,
    title: "Modern Villa",
    address: "Gomti Nagar",
    sqft: 1800,
    price: 7500,
    status: "AVAILABLE FOR RENT",
    location: "Lucknow",
    owner: "PRAPTI",
    image: card4,
  },
  {
    id: 5,
    title: "Luxury Apartment",
    address: "Hazratganj",
    sqft: 900,
    price: 5500,
    status: "AVAILABLE FOR SALE",
    location: "Lucknow",
    owner: "PRAPTI",
    image: card5,
  },
  {
    id: 6,
    title: "Office Space",
    address: "Aliganj",
    sqft: 1500,
    price: 10000,
    status: "AVAILABLE FOR RENT",
    location: "Lucknow",
    owner: "PRAPTI",
    image: card6,
  },
];

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transform transition duration-300">
      {/* Image with Hover Zoom */}
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-48 w-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
        {/* Status Badge */}
        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
          {property.status}
        </span>
        {/* Location Badge */}
        <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
          {property.location}
        </span>
      </div>

      {/* Details */}
      <div className="p-4">
        <p className="text-sm text-pink-500">📍 {property.address}</p>
        <h2 className="text-lg font-semibold">{property.title}</h2>
        <p className="text-gray-600">🏠 Sqft: {property.sqft}</p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm font-medium">👤 {property.owner}</span>
          <span className="text-lg font-bold text-gray-800">
            ₹ {property.price}
          </span>
        </div>
      </div>
    </div>
  );
};

const Recommended = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h3 className="text-blue-600 text-sm font-semibold text-center">
        Featured Properties
      </h3>
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
        Recommended For You
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default Recommended;
