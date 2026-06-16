import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gauge, Fuel, Search, ShieldCheck, Zap, Users, Filter, X } from 'lucide-react';

const cars = [
  // Maruti Suzuki
  { id: 1, name: "Maruti Suzuki Swift", category: "Hatchback", brand: "Maruti", price: "₹5.45L", emi: "9,800", year: "2021", km: "22,500", owner: "1st Owner", fuel: "Petrol", score: 4.8, label: "Top Seller", image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Maruti Suzuki Baleno", category: "Hatchback", brand: "Maruti", price: "₹6.85L", emi: "12,400", year: "2021", km: "18,200", owner: "1st Owner", fuel: "Petrol", score: 4.7, label: "Premium Choice", image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Maruti Suzuki Dzire", category: "Sedan", brand: "Maruti", price: "₹6.15L", emi: "11,100", year: "2020", km: "35,400", owner: "2nd Owner", fuel: "CNG", score: 4.5, label: "Great Mileage", image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Maruti Suzuki Brezza", category: "SUV", brand: "Maruti", price: "₹8.90L", emi: "16,100", year: "2021", km: "28,000", owner: "1st Owner", fuel: "Petrol", score: 4.6, label: "Reliable SUV", image: "https://images.unsplash.com/photo-1662540050851-9c36ca209440?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "Maruti Suzuki WagonR", category: "Hatchback", brand: "Maruti", price: "₹4.20L", emi: "7,600", year: "2019", km: "42,000", owner: "1st Owner", fuel: "Petrol", score: 4.4, label: "City King", image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800" },

  // Hyundai
  { id: 6, name: "Hyundai Creta SX", category: "SUV", brand: "Hyundai", price: "₹12.75L", emi: "23,100", year: "2021", km: "24,000", owner: "1st Owner", fuel: "Diesel", score: 4.9, label: "Hot Seller", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800" },
  { id: 7, name: "Hyundai i20 Asta", category: "Hatchback", brand: "Hyundai", price: "₹7.45L", emi: "13,500", year: "2020", km: "15,000", owner: "1st Owner", fuel: "Petrol", score: 4.7, label: "Feature Rich", image: "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&q=80&w=800" },
  { id: 8, name: "Hyundai Verna SX", category: "Sedan", brand: "Hyundai", price: "₹10.20L", emi: "18,400", year: "2019", km: "45,000", owner: "2nd Owner", fuel: "Diesel", score: 4.6, label: "Performance", image: "https://images.unsplash.com/photo-1594070319944-7c0c63146b7a?auto=format&fit=crop&q=80&w=800" },
  { id: 9, name: "Hyundai Venue Turbo", category: "SUV", brand: "Hyundai", price: "₹9.40L", emi: "17,100", year: "2022", km: "12,000", owner: "1st Owner", fuel: "Petrol", score: 4.8, label: "Just Arrived", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800" },
  { id: 10, name: "Hyundai Grand i10", category: "Hatchback", brand: "Hyundai", price: "₹5.10L", emi: "9,200", year: "2018", km: "52,000", owner: "1st Owner", fuel: "Petrol", score: 4.5, label: "Budget Choice", image: "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&q=80&w=800" },

  // Tata Motors
  { id: 11, name: "Tata Nexon XZ+", category: "SUV", brand: "Tata", price: "₹9.85L", emi: "17,800", year: "2021", km: "21,000", owner: "1st Owner", fuel: "Petrol", score: 4.9, label: "5-Star Safety", image: "https://images.unsplash.com/photo-1632242171442-30048e42689c?auto=format&fit=crop&q=80&w=800" },
  { id: 12, name: "Tata Harrier Dark", category: "SUV", brand: "Tata", price: "₹17.50L", emi: "31,600", year: "2021", km: "18,000", owner: "1st Owner", fuel: "Diesel", score: 4.8, label: "Bold Look", image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800" },
  { id: 13, name: "Tata Punch Creative", category: "SUV", brand: "Tata", price: "₹7.90L", emi: "14,300", year: "2022", km: "8,500", owner: "1st Owner", fuel: "Petrol", score: 4.7, label: "Micro SUV", image: "https://images.unsplash.com/photo-1632242171442-30048e42689c?auto=format&fit=crop&q=80&w=800" },
  { id: 14, name: "Tata Tiago XZ", category: "Hatchback", brand: "Tata", price: "₹5.25L", emi: "9,500", year: "2020", km: "28,000", owner: "1st Owner", fuel: "Petrol", score: 4.6, label: "Safe Hatch", image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800" },
  { id: 15, name: "Tata Safari Gold", category: "SUV", brand: "Tata", price: "₹19.90L", emi: "36,000", year: "2021", km: "15,400", owner: "1st Owner", fuel: "Diesel", score: 4.8, label: "Premium 7-Seater", image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800" },

  // Mahindra
  { id: 16, name: "Mahindra Thar LX", category: "SUV", brand: "Mahindra", price: "₹15.40L", emi: "27,900", year: "2021", km: "12,000", owner: "1st Owner", fuel: "Diesel", score: 4.9, label: "Off-Road Icon", image: "https://images.unsplash.com/photo-1626013233379-8809989f6671?auto=format&fit=crop&q=80&w=800" },
  { id: 17, name: "Mahindra Scorpio-N", category: "SUV", brand: "Mahindra", price: "₹18.75L", emi: "34,000", year: "2022", km: "6,500", owner: "1st Owner", fuel: "Petrol", score: 4.8, label: "Big Daddy", image: "https://images.unsplash.com/photo-1662540050851-9c36ca209440?auto=format&fit=crop&q=80&w=800" },
  { id: 18, name: "Mahindra XUV700 AX7", category: "SUV", brand: "Mahindra", price: "₹22.50L", emi: "40,800", year: "2022", km: "10,200", owner: "1st Owner", fuel: "Diesel", score: 4.9, label: "Tech Loaded", image: "https://images.unsplash.com/photo-1662540050851-9c36ca209440?auto=format&fit=crop&q=80&w=800" },
  { id: 19, name: "Mahindra Bolero B6", category: "SUV", brand: "Mahindra", price: "₹8.45L", emi: "15,300", year: "2020", km: "48,000", owner: "1st Owner", fuel: "Diesel", score: 4.4, label: "Rugged", image: "https://images.unsplash.com/photo-1626013233379-8809989f6671?auto=format&fit=crop&q=80&w=800" },
  { id: 20, name: "Mahindra XUV300 W8", category: "SUV", brand: "Mahindra", price: "₹9.20L", emi: "16,600", year: "2019", km: "38,000", owner: "2nd Owner", fuel: "Petrol", score: 4.6, label: "Safe & Punchy", image: "https://images.unsplash.com/photo-1626013233379-8809989f6671?auto=format&fit=crop&q=80&w=800" },

  // Toyota & Honda
  { id: 21, name: "Toyota Innova Crysta", category: "SUV", brand: "Toyota", price: "₹18.90L", emi: "34,100", year: "2019", km: "65,000", owner: "1st Owner", fuel: "Diesel", score: 4.9, label: "Resale King", image: "https://images.unsplash.com/photo-1630132890656-749673995f9c?auto=format&fit=crop&q=80&w=800" },
  { id: 22, name: "Toyota Fortuner 4x4", category: "SUV", brand: "Toyota", price: "₹34.50L", emi: "62,500", year: "2018", km: "72,000", owner: "1st Owner", fuel: "Diesel", score: 4.9, label: "Absolute Legend", image: "https://images.unsplash.com/photo-1630132890656-749673995f9c?auto=format&fit=crop&q=80&w=800" },
  { id: 23, name: "Honda City i-VTEC", category: "Sedan", brand: "Honda", price: "₹9.45L", emi: "17,100", year: "2020", km: "28,000", owner: "1st Owner", fuel: "Petrol", score: 4.8, label: "Classy Sedan", image: "https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?auto=format&fit=crop&q=80&w=800" },
  { id: 24, name: "Honda Amaze S", category: "Sedan", brand: "Honda", price: "₹6.20L", emi: "11,200", year: "2021", km: "18,400", owner: "1st Owner", fuel: "Petrol", score: 4.6, label: "Efficient", image: "https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?auto=format&fit=crop&q=80&w=800" },
  { id: 25, name: "Toyota Glanza V", category: "Hatchback", brand: "Toyota", price: "₹7.80L", emi: "14,100", year: "2022", km: "11,000", owner: "1st Owner", fuel: "Petrol", score: 4.7, label: "Low Maintenance", image: "https://images.unsplash.com/photo-1630132890656-749673995f9c?auto=format&fit=crop&q=80&w=800" },

  // Kia & MG
  { id: 26, name: "Kia Seltos GTX+", category: "SUV", brand: "Kia", price: "₹14.90L", emi: "27,000", year: "2021", km: "22,000", owner: "1st Owner", fuel: "Petrol", score: 4.8, label: "Premium SUV", image: "https://images.unsplash.com/photo-1632242171442-30048e42689c?auto=format&fit=crop&q=80&w=800" },
  { id: 27, name: "Kia Sonet HTX", category: "SUV", brand: "Kia", price: "₹10.25L", emi: "18,500", year: "2022", km: "9,400", owner: "1st Owner", fuel: "Diesel", score: 4.7, label: "Tech Packed", image: "https://images.unsplash.com/photo-1632242171442-30048e42689c?auto=format&fit=crop&q=80&w=800" },
  { id: 28, name: "MG Hector Sharp", category: "SUV", brand: "MG", price: "₹15.80L", emi: "28,600", year: "2021", km: "25,000", owner: "1st Owner", fuel: "Petrol", score: 4.6, label: "Panoramic Roof", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800" },
  { id: 29, name: "MG Astor Savvy", category: "SUV", brand: "MG", price: "₹13.40L", emi: "24,300", year: "2022", km: "11,500", owner: "1st Owner", fuel: "Petrol", score: 4.7, label: "AI Inside", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800" },
  { id: 30, name: "Kia Carens Luxury", category: "SUV", brand: "Kia", price: "₹16.20L", emi: "29,400", year: "2023", km: "5,000", owner: "1st Owner", fuel: "Petrol", score: 4.9, label: "Like New", image: "https://images.unsplash.com/photo-1632242171442-30048e42689c?auto=format&fit=crop&q=80&w=800" },

  // Skoda & Volkswagen
  { id: 31, name: "Volkswagen Polo GT", category: "Hatchback", brand: "Volkswagen", price: "₹8.15L", emi: "14,800", year: "2021", km: "18,000", owner: "1st Owner", fuel: "Petrol", score: 4.9, label: "Enthusiast Choice", image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800" },
  { id: 32, name: "Skoda Kushaq Style", category: "SUV", brand: "Skoda", price: "₹13.90L", emi: "25,200", year: "2021", km: "22,400", owner: "1st Owner", fuel: "Petrol", score: 4.7, label: "Solid Build", image: "https://images.unsplash.com/photo-1627454820516-dc767bc64094?auto=format&fit=crop&q=80&w=800" },
  { id: 33, name: "Volkswagen Taigun", category: "SUV", brand: "Volkswagen", price: "₹14.45L", emi: "26,200", year: "2022", km: "12,000", owner: "1st Owner", fuel: "Petrol", score: 4.8, label: "Performance SUV", image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800" },
  { id: 34, name: "Skoda Slavia Style", category: "Sedan", brand: "Skoda", price: "₹12.80L", emi: "23,200", year: "2022", km: "14,000", owner: "1st Owner", fuel: "Petrol", score: 4.7, label: "Modern Sedan", image: "https://images.unsplash.com/photo-1627454820516-dc767bc64094?auto=format&fit=crop&q=80&w=800" },
  { id: 35, name: "Volkswagen Vento High", category: "Sedan", brand: "Volkswagen", price: "₹7.90L", emi: "14,300", year: "2019", km: "42,000", owner: "2nd Owner", fuel: "Diesel", score: 4.5, label: "German Engineering", image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800" },

  // Luxury Segment
  { id: 36, name: "BMW 3 Series Luxury", category: "Luxury", brand: "BMW", price: "₹38.50L", emi: "69,800", year: "2020", km: "25,000", owner: "1st Owner", fuel: "Petrol", score: 4.9, label: "Elite Choice", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800" },
  { id: 37, name: "Mercedes E-Class E200", category: "Luxury", brand: "Mercedes", price: "₹45.00L", emi: "81,600", year: "2019", km: "32,000", owner: "1st Owner", fuel: "Petrol", score: 4.9, label: "Business Class", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800" },
  { id: 38, name: "Audi Q3 Premium", category: "Luxury", brand: "Audi", price: "₹28.40L", emi: "51,500", year: "2020", km: "28,000", owner: "1st Owner", fuel: "Diesel", score: 4.7, label: "Premium SUV", image: "https://images.unsplash.com/photo-1606152424101-ad4e9bc367ff?auto=format&fit=crop&q=80&w=800" },
  { id: 39, name: "BMW X1 xDrive", category: "Luxury", brand: "BMW", price: "₹32.75L", emi: "59,400", year: "2021", km: "18,400", owner: "1st Owner", fuel: "Petrol", score: 4.8, label: "Urban Luxury", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800" },
  { id: 40, name: "Mercedes C-Class AMG", category: "Luxury", brand: "Mercedes", price: "₹42.90L", emi: "77,800", year: "2021", km: "14,000", owner: "1st Owner", fuel: "Petrol", score: 4.9, label: "Performance Luxury", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800" },

  // More Mix
  { id: 41, name: "Kia Seltos HTK+", category: "SUV", brand: "Kia", price: "₹11.20L", emi: "20,300", year: "2020", km: "38,000", owner: "1st Owner", fuel: "Diesel", score: 4.5, label: "Popular Choice", image: "https://images.unsplash.com/photo-1632242171442-30048e42689c?auto=format&fit=crop&q=80&w=800" },
  { id: 42, name: "Ford Ecosport S", category: "SUV", brand: "Ford", price: "₹8.75L", emi: "15,800", year: "2021", km: "25,000", owner: "1st Owner", fuel: "Diesel", score: 4.7, label: "Driver's Car", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800" },
  { id: 43, name: "Renault Triber RXZ", category: "Hatchback", brand: "Renault", price: "₹6.40L", emi: "11,600", year: "2022", km: "14,500", owner: "1st Owner", fuel: "Petrol", score: 4.4, label: "Versatile", image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800" },
  { id: 44, name: "Nissan Magnite XV", category: "SUV", brand: "Nissan", price: "₹7.90L", emi: "14,300", year: "2021", km: "12,200", owner: "1st Owner", fuel: "Petrol", score: 4.6, label: "Modern SUV", image: "https://images.unsplash.com/photo-1662540050851-9c36ca209440?auto=format&fit=crop&q=80&w=800" },
  { id: 45, name: "Jeep Compass Long.", category: "SUV", brand: "Jeep", price: "₹18.40L", emi: "33,300", year: "2020", km: "35,000", owner: "1st Owner", fuel: "Diesel", score: 4.7, label: "Off-Road Ready", image: "https://images.unsplash.com/photo-1626013233379-8809989f6671?auto=format&fit=crop&q=80&w=800" },
  { id: 46, name: "Skoda Rapid Onyx", category: "Sedan", brand: "Skoda", price: "₹8.20L", emi: "14,900", year: "2021", km: "22,000", owner: "1st Owner", fuel: "Petrol", score: 4.7, label: "Timeless", image: "https://images.unsplash.com/photo-1627454820516-dc767bc64094?auto=format&fit=crop&q=80&w=800" },
  { id: 47, name: "Maruti Suzuki Ignis", category: "Hatchback", brand: "Maruti", price: "₹5.15L", emi: "9,300", year: "2021", km: "11,000", owner: "1st Owner", fuel: "Petrol", score: 4.5, label: "Urban SUV-Hatch", image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800" },
  { id: 48, name: "Hyundai Santro Sportz", category: "Hatchback", brand: "Hyundai", price: "₹4.40L", emi: "8,000", year: "2020", km: "31,000", owner: "1st Owner", fuel: "Petrol", score: 4.3, label: "Budget Friendly", image: "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&q=80&w=800" },
  { id: 49, name: "Tata Altroz XZ", category: "Hatchback", brand: "Tata", price: "₹7.85L", emi: "14,200", year: "2021", km: "16,000", owner: "1st Owner", fuel: "Petrol", score: 4.8, label: "Safe Premium", image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800" },
  { id: 50, name: "Mahindra Scorpio S11", category: "SUV", brand: "Mahindra", price: "₹14.90L", emi: "27,000", year: "2019", km: "55,000", owner: "1st Owner", fuel: "Diesel", score: 4.6, label: "Adventure Ready", image: "https://images.unsplash.com/photo-1662540050851-9c36ca209440?auto=format&fit=crop&q=80&w=800" },
];

const Inventory = () => {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const categories = ["All", "SUV", "Sedan", "Hatchback", "Luxury"];

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          car.brand.toLowerCase().includes(searchQuery.toLowerCase());
    if (filter === "All") return matchesSearch;
    return matchesSearch && car.category === filter;
  });

  const displayedCars = showAll ? filteredCars : filteredCars.slice(0, 12);

  return (
    <section id="inventory" className="py-32 bg-premium-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-10">
          <div>
            <div className="w-16 h-1 bg-premium-neon mb-8" />
            <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter uppercase">
              CERTIFIED <span className="text-premium-neon">COLLECTION.</span>
            </h2>
            <p className="text-gray-500 mt-4 font-bold uppercase tracking-widest text-xs">Explore 50+ hand-picked vehicles in Raja Park</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 w-full lg:w-auto">
            <div className="flex flex-wrap gap-2">
               {categories.map(f => (
                 <button
                   key={f}
                   onClick={() => { setFilter(f); setShowAll(false); }}
                   className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${filter === f ? 'bg-premium-neon text-black shadow-[0_0_15px_rgba(212,255,0,0.3)]' : 'border border-white/10 text-gray-500 hover:text-white'}`}
                 >
                   {f}
                 </button>
               ))}
            </div>

            <div className="relative group min-w-[300px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-premium-neon transition-colors" size={18} />
              <input
                type="text"
                placeholder="Search Brand or Model..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-premium-neon transition-all"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedCars.map((car) => (
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
                        onClick={() => window.open(`https://wa.me/919829064970?text=I'm interested in the ${car.name} listed on your website`, '_blank')}
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

        {filteredCars.length > 12 && (
          <div className="mt-20 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-12 py-4 border-2 border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-full hover:border-premium-neon hover:text-premium-neon transition-all shadow-xl"
            >
              {showAll ? "Show Less" : `View All 50+ Cars`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Inventory;
