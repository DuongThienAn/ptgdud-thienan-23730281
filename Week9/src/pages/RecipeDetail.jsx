import React from 'react';
import { Star, Bookmark, Play, Send, ChevronRight } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';

const RecipeDetail = () => {
  const ingredients = [
    "Yield: 4 generous servings",
    "2 pints ripe, well-rinsed strawberries",
    "1/2 cup sugar, or more to taste",
    "4 cups flour",
    "3 tablespoons sugar",
    "1/4 teaspoon salt",
    "5 teaspoons baking powder",
    "1/4 cups butter",
    "3 cups whipping cream",
    "1/4 teaspoon vanilla extract"
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="container-custom py-4 flex items-center gap-2 text-sm text-gray-500">
        <a href="/" className="hover:text-primary">Home</a>
        <ChevronRight className="w-4 h-4" />
        <span className="text-primary font-medium">Cooking guide</span>
      </div>

      <div className="container-custom pb-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Sidebar - Ingredients */}
          <div className="w-full lg:w-1/3 order-2 lg:order-1">
             <div className="bg-white border-2 border-dashed border-pink-200 rounded-3xl p-8 sticky top-28">
               <ul className="space-y-4 mb-8">
                 {ingredients.map((item, idx) => (
                   <li key={idx} className="flex items-start gap-3 group cursor-pointer">
                     <div className="w-5 h-5 border-2 border-pink-200 rounded flex items-center justify-center mt-0.5 group-hover:border-primary transition-colors">
                        <div className="w-2 h-2 bg-primary rounded-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                     </div>
                     <span className="text-gray-700 text-[15px]">{item}</span>
                   </li>
                 ))}
               </ul>
               <button className="btn-primary w-full py-4 rounded-2xl gap-2 font-bold">
                 <span className="text-xl">+</span> Add to Your Grocery List
               </button>
             </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-2/3 order-1 lg:order-2">
             <h1 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
               How to make a Strawberry Shortcake
             </h1>
             
             <p className="text-gray-600 mb-10 leading-relaxed">
               It seems like there may be a misunderstanding. If you're asking how a user can make a Strawberry Shortcake, the process would be identical to the recipe shared earlier. It involves preparing the strawberries, making the shortcakes, preparing whipped cream, and finally assembling the shortcake.
             </p>

             {/* Author Info Card */}
             <div className="bg-gray-50 rounded-3xl p-6 mb-12 flex flex-col md:flex-row items-center gap-8 border border-gray-100 relative">
                <div className="flex items-center gap-4">
                  <img src="/img/avatar.png" className="w-14 h-14 rounded-full border-2 border-white shadow-sm" />
                  <span className="text-xl font-bold">Emma Gonzalez</span>
                </div>
                
                <div className="flex-1 flex justify-around w-full md:w-auto">
                   <div className="text-center">
                     <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Time:</p>
                     <p className="font-bold text-sm">45 minutes</p>
                   </div>
                   <div className="text-center">
                     <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Notes:</p>
                     <p className="font-bold text-sm">352 community notes</p>
                   </div>
                   <div className="text-center">
                     <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Rating:</p>
                     <div className="flex text-yellow-400">
                       <Star className="w-4 h-4 fill-current" />
                       <Star className="w-4 h-4 fill-current" />
                       <Star className="w-4 h-4 fill-current" />
                       <Star className="w-4 h-4 fill-current" />
                       <Star className="w-4 h-4 text-gray-300" />
                     </div>
                   </div>
                </div>

                <div className="absolute top-6 right-6">
                   <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
                      <Bookmark className="w-5 h-5 fill-current" />
                   </button>
                </div>
             </div>

             {/* Main Image */}
             <div className="rounded-[40px] overflow-hidden mb-16 shadow-2xl">
                <img src="/img/Image 72.png" className="w-full" />
             </div>

             {/* Steps */}
             <div className="space-y-16">
               <section>
                 <h2 className="text-3xl font-black mb-4">Step 1</h2>
                 <p className="text-gray-600 mb-8 leading-relaxed">
                   Pick over and hull strawberries. Cut in half or slice, depending on size. Gently crush about a quarter of the berries with a fork to release their juices. Mix with remaining berries and the 1/2 cup of sugar, adding more sugar if necessary. Set aside, covered, for about half an hour to develop flavor.
                 </p>
                 <div className="relative rounded-[40px] overflow-hidden group">
                    <img src="/img/Image 73.png" className="w-full" />
                    <button className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all">
                       <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-xl scale-110 group-hover:scale-125 transition-transform">
                          <Play className="w-8 h-8 fill-current ml-1" />
                       </div>
                    </button>
                 </div>
               </section>

               <section>
                 <h2 className="text-3xl font-black mb-4">Step 2</h2>
                 <p className="text-gray-600 mb-8">Preheat oven to 450 degrees.</p>
               </section>

               <section>
                 <h2 className="text-3xl font-black mb-4">Step 3</h2>
                 <p className="text-gray-600 mb-8 leading-relaxed">
                   Into a large mixing bowl, sift together flour, 3 tablespoons sugar, salt and baking powder. Add 1/4 cup of softened butter, and rub into dry ingredients as for pastry. Add 1 1/4 cups cream, and mix to a soft dough. Knead the dough for one minute on a lightly floured pastry board, then roll it out to about 1/2-inch thickness. Using a 3-inch biscuit cutter, cut an even number of rounds - 2 rounds per serving.
                 </p>
                 <div className="relative rounded-[40px] overflow-hidden group">
                    <img src="/img/visily-image-108.png" className="w-full" />
                    <button className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all">
                       <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-xl">
                          <Play className="w-8 h-8 fill-current ml-1" />
                       </div>
                    </button>
                 </div>
               </section>
             </div>

             {/* Cooking Note Section */}
             <div className="mt-24">
                <h3 className="text-2xl font-bold mb-6">Cooking note</h3>
                <div className="relative">
                   <textarea 
                    placeholder="State your opinion about the article"
                    className="w-full h-40 bg-white border border-gray-200 rounded-2xl p-6 outline-none focus:border-primary transition-all resize-none shadow-sm"
                   />
                   <button className="absolute bottom-4 right-4 bg-primary text-white p-3 rounded-xl hover:bg-secondary transition-colors group">
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </button>
                </div>
             </div>

             {/* Tabs & Comments */}
             <div className="mt-16 border-b border-gray-100 flex gap-8">
                <button className="pb-4 border-b-2 border-primary text-primary font-bold">All Notes (32)</button>
                <button className="pb-4 text-gray-400 font-bold hover:text-gray-600">Most Helpful (20)</button>
                <button className="pb-4 text-gray-400 font-bold hover:text-gray-600">Private (1)</button>
             </div>

             <div className="mt-10 space-y-10">
                <div className="flex gap-4">
                   <img src="/img/avatar.png" className="w-12 h-12 rounded-full shrink-0" />
                   <div>
                      <div className="flex items-center gap-3 mb-1">
                         <span className="font-bold">Jimmy Will</span>
                         <span className="text-xs text-gray-400">08:10 AM</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        Enim consectetur enim magna sit sit ullamco et dolore veniam nulla labore laboris anim eiusmod voluptate qui esse amet...
                      </p>
                      <div className="flex gap-6 text-xs text-gray-400 font-bold">
                         <button className="hover:text-primary uppercase tracking-widest">Helpful</button>
                         <button className="hover:text-primary uppercase tracking-widest">Reply</button>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Recently Viewed */}
        <div className="mt-32">
           <h2 className="text-3xl font-black mb-10">Your Recently Viewed</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <RecipeCard image="/img/salad_with_cabbage_and_shrimp.png" title="Salad with cabbage and shrimp" time="32 minutes" />
              <RecipeCard image="/img/lotus_delight_salad.png" title="Salad of cove beans, shrimp and potatoes" time="32 minutes" />
              <RecipeCard image="/img/five_color_salad.png" title="Sunny-side up fried eggs" time="32 minutes" />
              <RecipeCard image="/img/corn_salad.png" title="Lotus delight salad" time="32 minutes" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
