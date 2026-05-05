import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { Redo, ChevronLeft, ChevronRight } from 'lucide-react';

const RecipeBox = () => {
  const [activeTab, setActiveTab] = useState('Saved Recipes');

  const tabs = ['Saved Recipes', 'Folders', 'Recipes by Genevieve'];
  
  const recipes = [
    { image: '/img/Italian-style tomato.png', title: 'Italian-style tomato salad', time: '14 minutes' },
    { image: '/img/Vegetable and shrimp spaghetti.png', title: 'Vegetable and shrimp spaghetti', time: '15 minutes' },
    { image: '/img/Lotus delight salad.png', title: 'Lotus delight salad', time: '20 minutes' },
    { image: '/img/Snack cakes.png', title: 'Snack cakes', time: '21 minutes' },
    { image: '/img/Salad with cabbage.png', title: 'Salad with cabbage and shrimp', time: '32 minutes' },
    { image: '/img/Bean, shrimp, and potato salad.png', title: 'Bean, shrimp, and potato salad', time: '32 minutes' },
    { image: '/img/Sunny-side up fried eggs.png', title: 'Sunny-side up fried eggs', time: '32 minutes' },
    { image: '/img/Lotus delight salad_01.png', title: 'Lotus delight salad', time: '32 minutes' },
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Breadcrumbs */}
      <div className="container-custom pt-8">
        <nav className="flex items-center gap-2">
          <a 
            href="/" 
            className="font-poppins text-[14px] leading-[22px] font-normal text-[#171A1F] hover:text-primary transition-colors"
          >
            Home
          </a>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span 
            className="font-poppins text-[14px] leading-[22px] font-normal text-primary"
          >
            Your Recipe Box
          </span>
        </nav>
      </div>

      {/* Profile Header */}
      <section className="container-custom mt-12 mb-12">
        <h1 
          className="font-lora mb-8 tracking-wide"
          style={{
            fontSize: '32px',
            lineHeight: '48px',
            fontWeight: '700',
            color: '#171A1F'
          }}
        >
          Emma Gonzalez's Recipe Box
        </h1>
        
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Avatar Area */}
          <div className="w-40 h-40 rounded-full bg-[#FBCFE8]/30 flex items-center justify-center shrink-0 overflow-hidden">
             <img 
               src="/img/avatar.png" 
               alt="Emma Gonzalez" 
               className="w-full h-full object-cover" 
             />
          </div>

          <div className="flex-1">
            <p className="text-gray-600 leading-relaxed text-base font-normal mb-8 max-w-4xl">
              Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.
            </p>

            <div className="flex items-center gap-6">
               <span className="font-poppins text-sm font-normal text-primary">6.5k Subscribes</span>
               <button className="btn-share-88">
                 Share 
                 <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M14 6L20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M4 20c0-10 10-10 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                 </svg>
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container-custom border-b border-gray-100 flex gap-4">
        <div className="header-menu">
          {tabs.map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`header-menu-item ${activeTab === tab ? 'selected' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Recipe Grid */}
      <section className="container-custom mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {recipes.map((recipe, index) => (
            <RecipeCard 
              key={index}
              image={recipe.image}
              title={recipe.title}
              time={recipe.time}
            />
          ))}
        </div>
        
        {/* Pagination - Right Aligned with specific dimensions */}
        <div className="flex items-center justify-between mt-20 ml-auto" style={{ width: '344px', height: '36px' }}>
           <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-primary transition-colors">
             <ChevronLeft className="w-5 h-5" />
           </button>
           
           <div className="flex items-center gap-1.5">
             {[1, 2, 3, 4].map(num => (
               <button 
                 key={num}
                 className={`w-9 h-9 flex items-center justify-center rounded-[8px] font-bold text-sm transition-all ${
                   num === 1 
                     ? 'bg-primary text-white' 
                     : 'text-gray-400 bg-white border border-[#E7E9ED] hover:bg-gray-50'
                 }`}
               >
                 {num}
               </button>
             ))}
             
             <span className="text-gray-300 font-bold px-1">...</span>
             
             <button className="w-9 h-9 flex items-center justify-center rounded-[8px] font-bold text-sm text-gray-400 bg-white border border-[#E7E9ED] hover:bg-gray-50">
               10
             </button>
             <button className="w-9 h-9 flex items-center justify-center rounded-[8px] font-bold text-sm text-gray-400 bg-white border border-[#E7E9ED] hover:bg-gray-50">
               11
             </button>
           </div>
           
           <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-primary transition-colors">
             <ChevronRight className="w-5 h-5" />
           </button>
        </div>
      </section>
    </div>
  );
};

export default RecipeBox;
