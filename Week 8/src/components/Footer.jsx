import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white py-12 px-6">
      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About Us */}
        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>
          <div className="flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white text-black px-4 py-2 rounded-lg text-sm w-full outline-none"
            />
            <button className="bg-primary px-6 py-2 rounded-lg font-medium hover:bg-secondary transition-colors">Send</button>
          </div>
          <div className="mt-8 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
               <span className="text-white font-bold italic">C</span>
            </div>
            <span className="text-xl font-bold">Chefify</span>
            <span className="text-xs text-gray-500 ml-4">© 2023 Chefify Company</span>
          </div>
        </div>

        {/* Learn More */}
        <div>
          <h3 className="text-xl font-bold mb-4">Learn More</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Our Cooks</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">See Our Features</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
          </ul>
          <h3 className="text-xl font-bold mt-8 mb-4">Shop</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Gift Subscription</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Send Us Feedback</a></li>
          </ul>
        </div>

        {/* Recipes */}
        <div>
          <h3 className="text-xl font-bold mb-4">Recipes</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">What to Cook This Week</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Pasta</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Dinner</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Healthy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Vegetarian</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Vegan</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Christmas</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
