import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#171923] text-white py-16 px-6 font-poppins">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* About Us & Newsletter */}
          <div className="lg:col-span-5">
            <h3 className="text-xl font-bold mb-6">About Us</h3>
            <p className="text-white text-sm leading-relaxed mb-10 max-w-sm">
              Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-black px-5 py-3 rounded-lg text-sm flex-1 outline-none font-medium placeholder:text-gray-400"
              />
              <button className="bg-primary px-8 py-3 rounded-lg font-bold hover:bg-secondary transition-all shadow-lg shadow-primary/20">
                Send
              </button>
            </div>
          </div>

          <div className="lg:col-span-1"></div>

          {/* Learn More */}
          <div className="lg:col-span-3 flex flex-col gap-10">
            <div>
              <h3 className="text-lg font-bold mb-6">Learn More</h3>
              <ul className="space-y-4 text-white text-sm font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">Our Cooks</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">See Our Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Shop</h3>
              <ul className="space-y-4 text-white text-sm font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">Gift Subscription</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Send Us Feedback</a></li>
              </ul>
            </div>
          </div>

          {/* Recipes */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6">Recipes</h3>
            <ul className="space-y-4 text-white text-sm font-medium">
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

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="/img/Group 9.png" alt="Chefify" className="h-6 brightness-0 invert" />
              <span className="text-xl font-black text-white tracking-tight">Chefify</span>
            </div>
            <span className="text-xs text-white font-medium">2023 Chefify Company</span>
            <div className="hidden md:block w-px h-3 bg-gray-700 mx-1"></div>
            <a href="#" className="text-xs text-white hover:text-primary transition-colors">Terms of Service</a>
            <div className="hidden md:block w-px h-3 bg-gray-700 mx-1"></div>
            <a href="#" className="text-xs text-white hover:text-primary transition-colors">Privacy Policy</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">Made with</span>
            <img src="https://visily.ai/wp-content/uploads/2022/02/visily-logo.svg" className="h-4 brightness-200" alt="Visily" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
