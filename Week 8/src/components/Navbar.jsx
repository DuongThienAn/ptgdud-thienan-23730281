import React from 'react';
import { Search } from 'lucide-react';

const Navbar = ({ onLogin }) => {
  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center">
             <img src="/img/Group 9.png" alt="Chefify Logo" className="w-full" />
          </div>
          <span className="text-2xl font-bold text-primary">Chefify</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8 relative">
          <input
            type="text"
            placeholder="What would you like to cook?"
            className="w-full bg-gray-light border-none rounded-lg py-2 pl-10 pr-4 focus:ring-2 focus:ring-primary outline-none text-sm"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-primary transition-colors">What to cook</a>
          <a href="#" className="hover:text-primary transition-colors">Recipes</a>
          <a href="#" className="hover:text-primary transition-colors">Ingredients</a>
          <a href="#" className="hover:text-primary transition-colors">Occasions</a>
          <a href="#" className="hover:text-primary transition-colors">About Us</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 ml-6">
          <button 
            onClick={onLogin}
            className="text-primary font-medium hover:bg-pink-50 px-4 py-2 rounded-lg transition-colors border-none"
          >
            Login
          </button>
          <button className="btn-primary">Subscribe</button>
          <img src="/img/avatar.png" alt="Profile" className="w-10 h-10 rounded-full cursor-pointer border-2 border-transparent hover:border-primary transition-all" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
