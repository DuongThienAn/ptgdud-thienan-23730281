import React from 'react';
import RecipeCard from '../components/RecipeCard';

const Home = ({ onSignup }) => {
  return (
    <div className="bg-gray-light min-h-screen pb-20">
      {/* Banner / Hero */}
      <section className="container-custom pt-8">
        <div className="relative rounded-2xl overflow-hidden h-[450px]">
          <img 
            src="/img/Image 93.png" 
            alt="Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          
          {/* Recipe of the day card */}
          <div className="absolute top-20 left-10 md:left-20 bg-white p-8 rounded-2xl shadow-xl max-w-sm">
             <div className="bg-yellow-400 text-white text-[10px] font-bold px-4 py-1 rounded-full absolute -top-3 left-1/2 -translate-x-1/2 uppercase tracking-widest whitespace-nowrap">
                Recipe of the day
             </div>
             <h2 className="text-3xl font-bold text-primary mb-4">Salad Caprese</h2>
             <p className="text-gray-600 text-sm mb-6 leading-relaxed">
               Classic Italian Salad Caprese - ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
             </p>
             <div className="flex items-center gap-3 mb-6">
               <img src="/img/avatar.png" className="w-8 h-8 rounded-full" />
               <span className="text-sm font-medium">Salad Caprese</span>
             </div>
             <button onClick={onSignup} className="btn-primary w-full gap-2 font-bold py-3.5">
               Get Started <span className="text-lg">→</span>
             </button>
          </div>
        </div>
      </section>

      {/* This Summer Recipes */}
      <section className="container-custom mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-2">This Summer Recipes</h2>
          <p className="text-gray-500">We have all your Independence Day sweets covered.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <RecipeCard 
            image="/img/Italian-style tomato.png"
            title="Italian-style tomato salad"
            time="12 minutes"
          />
          <RecipeCard 
            image="/img/Vegetable and shrimp spaghetti.png"
            title="Spaghetti with vegetables and shrimp"
            time="15 minutes"
          />
          <RecipeCard 
            image="/img/Lotus delight salad.png"
            title="Lotus delight salad"
            time="20 minutes"
          />
          <RecipeCard 
            image="/img/Snack cakes.png"
            title="Snack cakes"
            time="21 minutes"
          />
        </div>
      </section>

      {/* Recipes With Videos */}
      <section className="container-custom mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-2">Recipes With Videos</h2>
          <p className="text-gray-500">Cooking Up Culinary Creations with Step-by-Step Videos</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <RecipeCard 
            image="/img/Salad with cabbage.png"
            title="Salad with cabbage and shrimp"
            time="32 minutes"
          />
          <RecipeCard 
            image="/img/Bean, shrimp, and potato salad.png"
            title="Salad of cove beans, shrimp and potatoes"
            time="32 minutes"
          />
          <RecipeCard 
            image="/img/Sunny-side up fried eggs.png"
            title="Sunny-side up fried eggs"
            time="32 minutes"
          />
          <RecipeCard 
            image="/img/Lotus delight salad_01.png"
            title="Lotus delight salad"
            time="32 minutes"
          />
        </div>
      </section>

      {/* Editor's Pick */}
      <section className="container-custom mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-2">Editor's pick</h2>
          <p className="text-gray-500">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="flex bg-white rounded-2xl p-4 gap-6 hover:shadow-lg transition-all border border-transparent hover:border-pink-100">
             <img src="/img/visily-image-108.png" className="w-48 h-48 object-cover rounded-xl shrink-0" />
             <div className="flex flex-col justify-between py-2">
               <div>
                  <h3 className="text-xl font-bold mb-1">Stuffed sticky rice ball</h3>
                  <span className="text-xs text-gray-400">14 minutes</span>
                  <div className="flex items-center gap-2 mt-4">
                     <img src="/img/avatar.png" className="w-8 h-8 rounded-full" />
                     <span className="text-sm font-medium">Jennifer King</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-4 line-clamp-3">
                    Stuffed sticky rice ball: a delightful Asian toast with chewy, glutinous rice and a flavorful surprise filling...
                  </p>
               </div>
               <div className="w-10 h-10 border rounded-full flex items-center justify-center text-primary ml-auto">
                 <span className="text-xl">♥</span>
               </div>
             </div>
           </div>
           
           <div className="flex bg-white rounded-2xl p-4 gap-6 hover:shadow-lg transition-all border border-transparent hover:border-pink-100">
             <img src="/img/visily-image-93.png" className="w-48 h-48 object-cover rounded-xl shrink-0" />
             <div className="flex flex-col justify-between py-2">
               <div>
                  <h3 className="text-xl font-bold mb-1">Strawberry smoothie</h3>
                  <span className="text-xs text-gray-400">42 minutes</span>
                  <div className="flex items-center gap-2 mt-4">
                     <img src="/img/avatar.png" className="w-8 h-8 rounded-full" />
                     <span className="text-sm font-medium">Matthew Martinez</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-4 line-clamp-3">
                    Savor the refreshing delight of our strawberry smoothie. Made with ripe strawberries, this creamy blend offers...
                  </p>
               </div>
               <div className="w-10 h-10 border rounded-full flex items-center justify-center text-primary ml-auto">
                 <span className="text-xl">♥</span>
               </div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
