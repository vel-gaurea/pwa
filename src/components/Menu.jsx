import React from "react";
import margherita from '../assets/margherita.jpg'; // Import images
import pepperoni from '../assets/pepperoni.jpg';
import vegetarian from '../assets/vegetarian.jpg';

const Menu = () => {
  const pizzas = [
    {
      name: 'Margherita',
      price: '$10',
      description: 'Tomato sauce, mozzarella, and basil.',
      image: margherita, // Add image path
    },
    {
      name: 'Pepperoni',
      price: '$12',
      description: 'Tomato sauce, mozzarella, and pepperoni.',
      image: pepperoni, // Add image path
    },
    {
      name: 'Vegetarian',
      price: '$11',
      description: 'Tomato sauce, mozzarella, and vegetables.',
      image: vegetarian, // Add image path
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pizzas.map((pizza, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden group relative"
          >
            {/* Background Image */}
            <div
              className="h-64 bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              style={{ backgroundImage: `url(${pizza.image})` }}
            ></div>

            {/* Pizza Details */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{pizza.name}</h3>
              <p className="text-gray-600 mb-4">{pizza.description}</p>
              <p className="text-red-600 font-bold">{pizza.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;