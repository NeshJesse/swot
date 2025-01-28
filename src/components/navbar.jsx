import React from 'react';


const Navbar = () => (
  <nav className="bg-white shadow-sm">
    <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-pink-600">💕 BaeSWOT</span>
      </div>
      <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors">
        Try Now
      </button>
    </div>
  </nav>
);

export default Navbar;