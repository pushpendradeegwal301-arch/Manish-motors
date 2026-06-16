import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, Car, DollarSign, ShieldCheck } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('buy');

  const tabs = [
    { id: 'buy', label: 'Buy Used Car', icon: <Car size={16} />, path: '/buy' },
    { id: 'sell', label: 'Sell Your Car', icon: <DollarSign size={16} />, path: '/sell' },
    { id: 'finance', label: 'Car Finance', icon: <ShieldCheck size={16} />, path: '/finance' },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab.id);
  };

  const handleButtonClick = () => {
    if (activeTab === 'buy') {
      navigate('/buy');
    } else if (activeTab === 'sell') {
      navigate('/sell');
    } else if (activeTab === 'finance') {
      navigate('/finance');
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-premium-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <motion.img
          key={activeTab}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1 }}
          src={activeTab === 'sell'
            ? "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=2000"
            : "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2000"}
          alt="Showroom Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-premium-black via-transparent to-premium-black" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-display font-black text-white mb-12 tracking-tighter uppercase leading-[0.9]"
        >
          {activeTab === 'sell' ? "GET BEST PRICE" : "DRIVE YOUR"} <br />
          <span className="text-premium-neon">{activeTab === 'sell' ? "INSTANTLY." : "DREAM CAR."}</span>
        </motion.h1>

        {/* Cars24 Style Tabbed Search Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-premium-dark/80 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-2 md:p-8 shadow-2xl">
            {/* Tabs */}
            <div className="flex justify-center gap-4 md:gap-12 mb-10 border-b border-white/5">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab)}
                  className={`flex items-center gap-2 transition-all ${activeTab === tab.id ? 'marketplace-tab-active' : 'marketplace-tab-inactive'}`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Action Bar */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col md:flex-row gap-4"
              >
                <div className="flex-grow flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 group focus-within:border-premium-neon transition-all">
                  <Search className="text-gray-500 group-focus-within:text-premium-neon" size={24} />
                  <input
                    type="text"
                    placeholder={activeTab === 'sell' ? "Enter Car Model (e.g. Swift 2021)..." : "Search by Brand, Model or Budget..."}
                    className="bg-transparent w-full text-xl text-white focus:outline-none font-bold"
                  />
                </div>
                <button 
                  onClick={handleButtonClick}
                  className="btn-neon !rounded-2xl text-lg px-12 py-5 uppercase font-black tracking-widest whitespace-nowrap"
                >
                  {activeTab === 'sell' ? "Get Range" : "View Cars"}
                </button>
              </motion.div>
            </AnimatePresence>

            <p className="mt-8 text-gray-500 text-xs font-bold uppercase tracking-widest">
              {activeTab === 'buy' ? "30+ Certified Cars in Raja Park" : "Instant payment & Free RC transfer"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
