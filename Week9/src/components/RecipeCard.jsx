import React from 'react';
import { Bookmark } from 'lucide-react';

const RecipeCard = ({ image, title, time, author }) => {
  return (
    <div 
      className="bg-white overflow-hidden transition-all duration-300 group cursor-pointer flex flex-col relative shadow-sm hover:translate-y-[-4px]"
      style={{
        width: '270px',
        height: '292px',
        borderRadius: '12px',
        boxShadow: '0px 0px 1px #171a1f26, 0px 0px 2px #171a1f33'
      }}
    >
      {/* Top Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
      </div>
      
      {/* Content Section */}
      <div className="p-5 flex flex-col flex-1 relative">
        <div className="flex justify-between items-start mb-4">
          <h3 
            className="font-poppins line-clamp-2 flex-1 pr-4"
            style={{
              fontSize: '16px',
              lineHeight: '26px',
              fontWeight: '700',
              color: '#171A1F'
            }}
          >
            {title}
          </h3>
          <button className="w-12 h-12 bg-white border border-primary rounded-full flex items-center justify-center text-primary shrink-0 transition-all hover:bg-pink-50">
            <Bookmark className="w-6 h-6" />
          </button>
        </div>
        
        <div className="mt-auto">
          <span className="inline-block bg-[#FEF0F5] text-primary text-xs font-medium px-4 py-1.5 rounded-full">
            {time}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
