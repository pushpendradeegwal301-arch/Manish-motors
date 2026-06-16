import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Menu, X, MapPin, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-premium-black/90 backdrop-blur-xl py-3 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo & Location */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 cursor-pointer">
              <div className="bg-premium-neon p-2 rounded-lg">
                <Car className="text-black w-6 h-6" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-white uppercase">
                Manish <span className="text-premium-neon">Motors</span>
              </span>
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 cursor-pointer hover:bg-white/10 transition-all">
            <MapPin size={14} className="text-premium-neon" />
            <span className="text-xs font-bold text-gray-300">Raja Park, Jaipur</span>
          </div>
        </div>

        {/* Search Centric Nav (Cars24 Style) */}
        <div className="hidden md:flex flex-grow max-w-md mx-12">
           <div className="w-full relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-premium-neon transition-colors" size={18} />
              <input
                type="text"
                placeholder="Search models, brands..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-6 text-sm focus:outline-none focus:border-premium-neon transition-all"
              />
           </div>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-sm font-bold text-gray-400 hover:text-premium-neon transition-colors uppercase tracking-widest">Home</Link>
          <Link to="/buy" className="text-sm font-bold text-gray-400 hover:text-premium-neon transition-colors uppercase tracking-widest">Buy</Link>
          <Link to="/sell" className="text-sm font-bold text-gray-400 hover:text-premium-neon transition-colors uppercase tracking-widest">Sell</Link>
          <Link to="/finance" className="text-sm font-bold text-gray-400 hover:text-premium-neon transition-colors uppercase tracking-widest">Finance</Link>
          <button
            onClick={() => window.location.href = 'tel:+919829064970'}
            className="btn-neon !px-6 !py-2 text-xs"
          >
            Call Manish
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-premium-black/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-6">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-bold text-white uppercase tracking-widest">Home</Link>
              <Link to="/buy" onClick={() => setIsOpen(false)} className="text-lg font-bold text-white uppercase tracking-widest">Buy</Link>
              <Link to="/sell" onClick={() => setIsOpen(false)} className="text-lg font-bold text-white uppercase tracking-widest">Sell</Link>
              <Link to="/finance" onClick={() => setIsOpen(false)} className="text-lg font-bold text-white uppercase tracking-widest">Finance</Link>
              <button
                onClick={() => window.location.href = 'tel:+919829064970'}
                className="btn-neon !px-6 !py-3 text-sm"
              >
                Call Manish
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
