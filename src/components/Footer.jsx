import React from "react";
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Pizzaria. All rights reserved.</p>
          <p className="mt-2">Follow us on:
            <a href="#" className="text-red-600 hover:text-red-500 ml-2">Instagram</a>
            <a href="#" className="text-red-600 hover:text-red-500 ml-2">Facebook</a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;