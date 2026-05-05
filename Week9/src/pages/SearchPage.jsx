import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Star, Menu } from 'lucide-react';

const FilterSection = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-100 py-6 last:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full mb-4 group"
      >
        <h3 className="filter-category-text uppercase tracking-wide">{title}</h3>
        {isOpen ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />}
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

const Checkbox = ({ label, checked, onChange }) => (
  <label className="custom-checkbox group">
    <input type="checkbox" checked={checked} onChange={onChange} className="hidden" />
    <div className="outer-square">
      <svg viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    </div>
    <span>{label}</span>
  </label>
);

const SearchPage = () => {
  const [filters, setFilters] = useState({
    type: ['Grilled', 'Roasted'],
    rating: [3, 2, 1]
  });

  const toggleType = (type) => {
    setFilters(prev => ({
      ...prev,
      type: prev.type.includes(type) ? prev.type.filter(t => t !== type) : [...prev.type, type]
    }));
  };

  const toggleRating = (rating) => {
    setFilters(prev => ({
      ...prev,
      rating: prev.rating.includes(rating) ? prev.rating.filter(r => r !== rating) : [...prev.rating, rating]
    }));
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container-custom py-12 flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full lg:w-80 shrink-0">
          <div className="custom-filter-container p-6">
            <div className="flex items-center gap-3 mb-8">
              <Menu className="w-5 h-5 text-gray-900" strokeWidth={3} />
              <h2 className="filter-header-text uppercase">FILTERS</h2>
            </div>

            <FilterSection title="Type">
              <div className="grid grid-cols-2 gap-x-4">
                {['Pan-fried', 'Stir-fried', 'Grilled', 'Roasted', 'Sauteed', 'Baked', 'Steamed', 'Stewed'].map(type => (
                  <Checkbox
                    key={type}
                    label={type}
                    checked={filters.type.includes(type)}
                    onChange={() => toggleType(type)}
                  />
                ))}
              </div>
            </FilterSection>

            <FilterSection title="Time">
              <div className="px-2 pb-4">
                <div className="relative h-1.5 bg-[#FDE7F3] rounded-full mt-10">
                  {/* Selected Range */}
                  <div className="absolute left-[25%] right-[35%] h-full bg-primary rounded-full"></div>
                  
                  {/* Thumbs */}
                  <div className="absolute left-[25%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-primary rounded-full shadow-sm cursor-pointer transition-transform hover:scale-110">
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[12px] font-medium text-gray-700">30 minutes</span>
                  </div>
                  <div className="absolute right-[35%] top-1/2 translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-primary rounded-full shadow-sm cursor-pointer transition-transform hover:scale-110">
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[12px] font-medium text-gray-700">50 minutes</span>
                  </div>
                </div>
              </div>
            </FilterSection>

            <FilterSection title="Rating">
              {[5, 4, 3, 2, 1].map(stars => (
                <label key={stars} className="custom-checkbox group">
                  <input 
                    type="checkbox" 
                    checked={filters.rating.includes(stars)} 
                    onChange={() => toggleRating(stars)}
                    className="hidden" 
                  />
                  <div className="outer-square">
                    <svg viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                  <div className="flex gap-1 ml-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4.5 h-4.5 ${i < stars ? 'fill-[#FFC107] text-[#FFC107]' : 'text-gray-200'}`}
                      />
                    ))}
                  </div>
                </label>
              ))}
            </FilterSection>

            <button className="btn-primary w-full mt-10 py-4 font-bold rounded-xl shadow-lg shadow-primary/20 text-sm">
              Apply
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center pt-4 pb-20 text-center">
          <h1
            className="font-poppins mb-16 px-4"
            style={{
              fontSize: '32px',
              lineHeight: '48px',
              fontWeight: '700',
              color: '#171A1F'
            }}
          >
            Sorry, no results were found for “cakescascsa”
          </h1>

          <div className="relative mb-16 max-w-md">
            <img src="/img/image.png" alt="No results" className="w-[340px] drop-shadow-sm" />
          </div>

          <p 
            className="font-manrope mb-10 max-w-lg leading-relaxed text-center"
            style={{
              fontSize: '20px',
              lineHeight: '30px',
              fontWeight: '400',
              color: '#171A1F'
            }}
          >
            We have all your Independence Day sweets covered.
          </p>

          <div className="custom-tag-container px-4 mt-4">
            <button className="tag-item tag-pink">Sweet Cake</button>
            <button className="tag-item tag-purple">Black Cake</button>
            <button className="tag-item tag-pink">Pozole Verde</button>
            <button className="tag-item tag-teal">Healthy food</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SearchPage;
