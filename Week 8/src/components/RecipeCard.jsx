import React from 'react';
import { Heart } from 'lucide-react';

const RecipeCard = ({ image, title, time, author }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group cursor-pointer h-full flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-white transition-colors">
          <Heart className="w-4 h-4" />
        </button>
      </div>
      
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        {author && (
          <div className="flex items-center gap-2 mb-4">
             <img src="/img/avatar_small.png" className="w-5 h-5 rounded-full" />
             <span className="text-sm text-gray-500">{author}</span>
          </div>
        )}

        <div className="mt-auto">
          <span className="inline-block bg-pink-50 text-primary text-xs font-bold px-3 py-1 rounded-full">
            {time}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
