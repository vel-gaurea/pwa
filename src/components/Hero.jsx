import React from "react";
import pizzahero from '../assets/pizza-hero.jpg'; // Import the image

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${pizzahero})` }} // Use inline styles
      className="bg-cover bg-center h-screen flex items-center"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Pizzeria</h1>
        <p className="text-xl md:text-2xl text-white mb-8">The best pizza in town!</p>
        <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Hero;