import React from 'react';
import { Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Navbar = ({ onLogin, user, onLogout }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // For the purpose of matching the mockup exactly, we'll assume a logged-in state or provide the Recipe Box link
  const currentUser = user || { name: 'Emma Gonzalez', avatar: '/img/avatar.png' };

  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container-custom py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer shrink-0" onClick={() => window.location.href = '/'}>
          <img src="/img/Group 9.png" alt="Chefify Logo" className="h-8" />
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl relative">
          <input
            type="text"
            placeholder="What would you like to cook?"
            defaultValue="cakescascsa"
            className="w-full bg-[#F1F1F1] border-none rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/10 outline-none text-sm placeholder:text-gray-400 font-medium"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                window.location.href = `/search?q=${e.target.value}`;
              }
            }}
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
        </div>

        {/* Links */}
        <div className="hidden xl:flex items-center gap-8 text-sm font-semibold text-gray-500">
          <a href="#" className="hover:text-primary transition-colors">What to cook</a>
          <a href="#" className="hover:text-primary transition-colors">Recipes</a>
          <a href="#" className="hover:text-primary transition-colors">Ingredients</a>
          <a href="#" className="hover:text-primary transition-colors">Occasions</a>
          <a href="#" className="hover:text-primary transition-colors">About Us</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6 ml-6 shrink-0">
          {isHomePage ? (
            <>
              <button 
                onClick={onLogin}
                className="text-gray-600 font-bold hover:text-primary transition-colors border-none bg-transparent cursor-pointer text-sm"
              >
                Login
              </button>
              <button className="btn-primary py-2.5 px-6 rounded-xl text-sm font-bold">
                Subscribe
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => window.location.href = '/recipe-box'}
                className="bg-[#FDE7F3] text-primary font-bold px-6 py-2.5 rounded-xl flex items-center gap-2 hover:bg-[#FBCFE8] transition-colors border-none cursor-pointer text-sm"
              >
                <img src="/img/archive_check.png" className="w-5 h-5 opacity-80" alt="" /> Your Recipe Box
              </button>

              <div className="relative group">
                <img
                  src={currentUser.avatar}
                  alt="Profile"
                  className="w-10 h-10 rounded-full cursor-pointer border-2 border-transparent hover:border-primary transition-all p-0.5 bg-gray-50"
                />
                {/* Simple logout tooltip on hover */}
                <div className="absolute top-full right-0 mt-3 hidden group-hover:block bg-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-2xl p-2 min-w-[150px] border border-gray-100 z-50">
                  <button
                    onClick={onLogout}
                    className="w-full text-left px-4 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-50 rounded-xl transition-all"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
