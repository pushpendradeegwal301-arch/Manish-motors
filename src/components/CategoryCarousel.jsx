import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Car, Truck, Zap, Star, LayoutGrid } from 'lucide-react';

const CategoryCarousel = () => {
  const navigate = useNavigate();
  const categories = [
    { name: 'SUV', icon: <Truck size={24} /> },
    { name: 'Hatchback', icon: <Car size={24} /> },
    { name: 'Luxury', icon: <Star size={24} /> },
    { name: 'Sedan', icon: <LayoutGrid size={24} /> },
  ];

  const handleCategoryClick = (categoryName) => {
    navigate(`/buy?category=${categoryName}`);
  };

  return (
    <section className="py-20 bg-premium-black border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-12 text-center lg:text-left">Browse by Body Type</h4>
        <div className="flex flex-nowrap overflow-x-auto gap-6 pb-8 no-scrollbar">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              whileHover={{ y: -5, backgroundColor: 'rgba(212,255,0,0.1)' }}
              onClick={() => handleCategoryClick(cat.name)}
              className="flex-shrink-0 w-44 bg-premium-dark border border-white/5 rounded-[2rem] p-8 flex flex-col items-center justify-center gap-4 cursor-pointer transition-colors group"
            >
              <div className="text-gray-500 group-hover:text-premium-neon transition-colors">
                {cat.icon}
              </div>
              <span className="font-bold text-sm tracking-widest uppercase text-gray-400 group-hover:text-white transition-colors">
                {cat.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;
