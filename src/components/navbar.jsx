import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img
          src="/jkuat-logo.png"
          alt="School Logo"
          className="h-10 w-auto"
        />
        <span className="text-xl font-semibold text-blue-600">
          JKUAT Clubs & Socities Platform
        </span>
      </div>
      <ul className="flex gap-6 text-gray-700">
        <li><a href="/" className="hover:text-blue-500">Home</a></li>
        <li><a href="#features" className="hover:text-blue-500">Features</a></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;