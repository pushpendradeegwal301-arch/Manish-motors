import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShieldCheck, Zap, Users, X, Filter } from 'lucide-react';

// Full car dataset from Inventory component
const carsData = [
  { id: 1, name: "Maruti Suzuki Swift", category: "Hatchback", brand: "Maruti", price: "₹5.45L", priceNum: 5.45, emi: "9,800", year: "2021", yearNum: 2021, km: "22,500", kmNum: 22500, owner: "1st Owner", fuel: "Petrol", score: 4.8, label: "Top Seller", image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Maruti Suzuki Baleno", category: "Hatchback", brand: "Maruti", price: "₹6.85L", priceNum: 6.85, emi: "12,400", year: "2021", yearNum: 2021, km: "18,200", kmNum: 18200, owner: "1st Owner", fuel: "Petrol", score: 4.7, label: "Premium Choice", image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Maruti Suzuki Dzire", category: "Sedan", brand: "Maruti", price: "₹6.15L", priceNum: 6.15, emi: "11,100", year: "2020", yearNum: 2020, km: "35,400", kmNum: 35400, owner: "2nd Owner", fuel: "CNG", score: 4.5, label: "Great Mileage", image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Maruti Suzuki Brezza", category: "SUV", brand: "Maruti", price: "₹8.90L", priceNum: 8.9, emi: "16,100", year: "2021", yearNum: 2021, km: "28,000", kmNum: 28000, owner: "1st Owner", fuel: "Petrol", score: 4.6, label: "Reliable SUV", image: "https://images.unsplash.com/photo-1662540050851-9c36ca209440?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "Maruti Suzuki WagonR", category: "Hatchback", brand: "Maruti", price: "₹4.20L", priceNum: 4.2, emi: "7,600", year: "2019", yearNum: 2019, km: "42,000", kmNum: 42000, owner: "1st Owner", fuel: "Petrol", score: 4.4, label: "City King", image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800" },
  { id: 6, name: "Hyundai Creta SX", category: "SUV", brand: "Hyundai", price: "₹12.75L", priceNum: 12.75, emi: "23,100", year: "2021", yearNum: 2021, km: "24,000", kmNum: 24000, owner: "1st Owner", fuel: "Diesel", score: 4.9, label: "Hot Seller", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800" },
  { id: 7, name: "Hyundai i20 Asta", category: "Hatchback", brand: "Hyundai", price: "₹7.45L", priceNum: 7.45, emi: "13,500", year: "2020", yearNum: 2020, km: "15,000", kmNum: 15000, owner: "1st Owner", fuel: "Petrol", score: 4.7, label: "Feature Rich", image: "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&q=80&w=800" },
  { id: 8, name: "Hyundai Verna SX", category: "Sedan", brand: "Hyundai", price: "₹10.20L", priceNum: 10.2, emi: "18,400", year: "2019", yearNum: 2019, km: "45,000", kmNum: 45000, owner: "2nd Owner", fuel: "Diesel", score: 4.6, label: "Performance", image: "https://images.unsplash.com/photo-1594070319944-7c0c63146b7a?auto=format&fit=crop&q=80&w=800" },
  { id: 9, name: "Hyundai Venue Turbo", category: "SUV", brand: "Hyundai", price: "₹9.40L", priceNum: 9.4, emi: "17,100", year: "2022", yearNum: 2022, km: "12,000", kmNum: 12000, owner: "1st Owner", fuel: "Petrol", score: 4.8, label: "Just Arrived", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800" },
  { id: 10, name: "Hyundai Grand i10", category: "Hatchback", brand: "Hyundai", price: "₹5.10L", priceNum: 5.1, emi: "9,200", year: "2018", yearNum: 2018, km: "52,000", kmNum: 52000, owner: "1st Owner", fuel: "Petrol", score: 4.5, label: "Budget Choice", image: "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&q=80&w=800" },
  { id: 11, name: "Tata Nexon XZ+", category: "SUV", brand: "Tata", price: "₹9.85L", priceNum: 9.85, emi: "17,800", year: "2021", yearNum: 2021, km: "21,000", kmNum: 21000, owner: "1st Owner", fuel: "Petrol", score: 4.9, label: "5-Star Safety", image: "https://images.unsplash.com/photo-1632242171442-30048e42689c?auto=format&fit=crop&q=80&w=800" },
  { id: 12, name: "Tata Harrier Dark", category: "SUV", brand: "Tata", price: "₹17.50L", priceNum: 17.5, emi: "31,600", year: "2021", yearNum: 2021, km: "18,000", kmNum: 18000, owner: "1st Owner", fuel: "Diesel", score: 4.8, label: "Bold Look", image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800" },
  { id: 13, name: "Tata Punch Creative", category: "SUV", brand: "Tata", price: "₹7.90L", priceNum: 7.9, emi: "14,300", year: "2022", yearNum: 2022, km: "8,500", kmNum: 8500, owner: "1st Owner", fuel: "Petrol", score: 4.7, label: "Micro SUV", image: "https://images.unsplash.com/photo-1632242171442-30048e42689c?auto=format&fit=crop&q=80&w=800" },
  { id: 14, name: "Tata Tiago XZ", category: "Hatchback", brand: "Tata", price: "₹5.25L", priceNum: 5.25, emi: "9,500", year: "2020", yearNum: 2020, km: "28,000", kmNum: 28000, owner: "1st Owner", fuel: "Petrol", score: 4.6, label: "Safe Hatch", image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800" },
  { id: 15, name: "Tata Safari Gold", category: "SUV", brand: "Tata", price: "₹19.90L", priceNum: 19.9, emi: "36,000", year: "2021", yearNum: 2021, km: "15,400", kmNum: 15400, owner: "1st Owner", fuel: "Diesel", score: 4.8, label: "Premium 7-Seater", image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800" },
];

// Get unique brands from cars data
const uniqueBrands = [...new Set(carsData.map(car => car.brand))];
const uniqueFuels = [...new Set(carsData.map(car => car.fuel))];
const categories = ["All", "SUV", "Sedan", "Hatchback", "Luxury"];

const BuyCars = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(searchParams.get('category') || "All");
  const [brandFilters, setBrandFilters] = useState([]);
  const [fuelFilters, setFuelFilters] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 50]); // Lakhs
  const [yearRange, setYearRange] = useState([2015, 2024]);
  const [kmRange, setKmRange] = useState([0, 100000]);
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.includes(categoryParam)) {
      setCategoryFilter(categoryParam);
    }
  }, [searchParams]);

  const handleCategoryChange = (newFilter) => {
    setCategoryFilter(newFilter);
    if (newFilter === "All") {
      searchParams.delete('category');
    } else {
      searchParams.set('category', newFilter);
    }
    setSearchParams(searchParams);
  };

  const toggleBrandFilter = (brand) => {
    if (brandFilters.includes(brand)) {
      setBrandFilters(brandFilters.filter(b => b !== brand));
    } else {
      setBrandFilters([...brandFilters, brand]);
    }
  };

  const toggleFuelFilter = (fuel) => {
    if (fuelFilters.includes(fuel)) {
      setFuelFilters(fuelFilters.filter(f => f !== fuel));
    } else {
      setFuelFilters([...fuelFilters, fuel]);
    }
  };

  const clearAllFilters = () => {
    setCategoryFilter("All");
    setBrandFilters([]);
    setFuelFilters([]);
    setPriceRange([0, 50]);
    setYearRange([2015, 2024]);
    setKmRange([0, 100000]);
    setSearchQuery("");
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const filteredCars = carsData.filter(car => {
    // Search filter
    const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         car.brand.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category filter
    const matchesCategory = categoryFilter === "All" || car.category === categoryFilter;
    
    // Brand filter
    const matchesBrand = brandFilters.length === 0 || brandFilters.includes(car.brand);
    
    // Fuel filter
    const matchesFuel = fuelFilters.length === 0 || fuelFilters.includes(car.fuel);
    
    // Price filter
    const matchesPrice = car.priceNum >= priceRange[0] && car.priceNum <= priceRange[1];
    
    // Year filter
    const matchesYear = car.yearNum >= yearRange[0] && car.yearNum <= yearRange[1];
    
    // KM filter
    const matchesKm = car.kmNum >= kmRange[0] && car.kmNum <= kmRange[1];
    
    return matchesSearch && matchesCategory && matchesBrand && matchesFuel && matchesPrice && matchesYear && matchesKm;
  });

  const handleBuyNow = (car) => {
    const message = encodeURIComponent(`Hello Manish Motors, I am interested in purchasing the ${car.name} priced at ${car.price}.`);
    window.open(`https://wa.me/919829064970?text=${message}`, '_blank');
  };

  return (
    <section className="pt-32 pb-32 bg-premium-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-8 gap-10">
          <div>
            <div className="w-16 h-1 bg-premium-neon mb-8" />
            <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter uppercase">
              BUY YOUR <span className="text-premium-neon">DREAM CAR.</span>
            </h2>
            <p className="text-gray-500 mt-4 font-bold uppercase tracking-widest text-xs">Explore our certified collection ({filteredCars.length} cars)</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
            {/* Filter Toggle Button */}
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-gray-400 hover:border-premium-neon hover:text-premium-neon transition-all font-bold text-sm"
            >
              <Filter size={18} /> Filters
            </button>

            {/* Search Input */}
            <div className="relative group flex-1 min-w-[300px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-premium-neon transition-colors" size={18} />
              <input
                type="text"
                placeholder="Search Brand or Model..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-6 text-sm text-white focus:outline-none focus:border-premium-neon transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(f => (
            <button
              key={f}
              onClick={() => handleCategoryChange(f)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${categoryFilter === f ? 'bg-premium-neon text-black shadow-[0_0_15px_rgba(212,255,0,0.3)]' : 'border border-white/10 text-gray-500 hover:text-white'}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Advanced Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-premium-dark rounded-[2rem] border border-white/5 p-6 mb-8 overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-display font-black text-white uppercase">Filters</h3>
                <button 
                  onClick={clearAllFilters}
                  className="text-premium-neon font-bold text-sm hover:underline"
                >
                  Clear All
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Brand Filter */}
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Brand</h4>
                  <div className="flex flex-wrap gap-2">
                    {uniqueBrands.map(brand => (
                      <button
                        key={brand}
                        onClick={() => toggleBrandFilter(brand)}
                        className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all ${brandFilters.includes(brand) ? 'bg-premium-neon text-black' : 'border border-white/10 text-gray-500 hover:text-white'}`}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fuel Filter */}
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Fuel Type</h4>
                  <div className="flex flex-wrap gap-2">
                    {uniqueFuels.map(fuel => (
                      <button
                        key={fuel}
                        onClick={() => toggleFuelFilter(fuel)}
                        className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all ${fuelFilters.includes(fuel) ? 'bg-premium-neon text-black' : 'border border-white/10 text-gray-500 hover:text-white'}`}
                      >
                        {fuel}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Price Range (₹L)</h4>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="50"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-premium-neon"
                    />
                    <div className="flex justify-between text-xs text-gray-500 font-bold">
                      <span>₹{priceRange[0]}L</span>
                      <span className="text-premium-neon">₹{priceRange[1]}L</span>
                    </div>
                  </div>
                </div>

                {/* Year Filter */}
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Year Range</h4>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="2015"
                      max="2024"
                      value={yearRange[1]}
                      onChange={(e) => setYearRange([yearRange[0], Number(e.target.value)])}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-premium-neon"
                    />
                    <div className="flex justify-between text-xs text-gray-500 font-bold">
                      <span>{yearRange[0]}</span>
                      <span className="text-premium-neon">{yearRange[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cars Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredCars.map((car) => (
                <motion.div
                  key={car.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  className="bg-premium-dark rounded-[2.5rem] overflow-hidden border border-white/5 relative group"
                >
                  {/* Image & Badges */}
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-premium-dark to-transparent opacity-60" />

                    <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
                      <div className="bg-premium-neon text-black text-[9px] font-black uppercase px-3 py-1 rounded-full flex items-center gap-1">
                        <Zap size={10} fill="currentColor" /> {car.label}
                      </div>
                      <div className="bg-black/60 backdrop-blur-md text-white text-[9px] font-black uppercase px-3 py-1 rounded-full flex items-center gap-1 border border-white/10">
                        <ShieldCheck size={10} className="text-premium-neon" /> 140-Point Passed
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-20">
                      <div className="bg-white/10 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-2xl">
                        <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">EMI Starting</p>
                        <p className="text-sm font-black text-white">₹{car.emi}/mo</p>
                      </div>
                      <div className="bg-premium-neon p-2 rounded-full text-black">
                        <ShieldCheck size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Specs & Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-display font-black text-white mb-4 uppercase tracking-tight leading-tight line-clamp-1">{car.name}</h3>

                    <div className="grid grid-cols-3 gap-2 mb-6">
                      <div className="bg-white/5 p-2 rounded-xl text-center">
                        <p className="text-[7px] font-bold text-gray-500 uppercase mb-0.5">KM</p>
                        <p className="text-[10px] font-black text-white">{car.km}</p>
                      </div>
                      <div className="bg-white/5 p-2 rounded-xl text-center">
                        <p className="text-[7px] font-bold text-gray-500 uppercase mb-0.5">Year</p>
                        <p className="text-[10px] font-black text-white">{car.year}</p>
                      </div>
                      <div className="bg-white/5 p-2 rounded-xl text-center">
                        <p className="text-[7px] font-bold text-gray-500 uppercase mb-0.5">Fuel</p>
                        <p className="text-[10px] font-black text-white">{car.fuel}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-1.5 text-gray-500 font-bold text-[10px] uppercase">
                        <Users size={12} className="text-premium-neon" />
                        <span>{car.owner}</span>
                      </div>
                      <p className="text-xl font-black text-premium-neon">{car.price}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleBuyNow(car)}
                        className="bg-premium-neon text-black py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:shadow-[0_0_15px_rgba(212,255,0,0.4)] transition-all"
                      >
                        Reserve
                      </button>
                      <button
                        onClick={() => window.open(`https://wa.me/919829064970?text=I want to book a test drive for ${car.name}`, '_blank')}
                        className="border border-white/10 text-white font-bold rounded-xl text-[10px] hover:bg-white/5 transition-all uppercase"
                      >
                        Test Drive
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 font-bold text-lg">No cars found matching your filters!</p>
            <button 
              onClick={clearAllFilters}
              className="mt-4 text-premium-neon font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BuyCars;
