import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Gauge, ChevronRight, CheckCircle2, DollarSign } from 'lucide-react';

const ValuationEngine = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ model: '', km: '' });

  const nextStep = () => setStep(prev => prev + 1);

  return (
    <section id="valuation" className="py-32 bg-premium-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-1 bg-premium-neon mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter uppercase mb-4">
            10-SECOND <span className="text-premium-neon">VALUATION.</span>
          </h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">AI-Powered Market Pricing for Raja Park Sellers</p>
        </motion.div>

        <div className="glass-card p-8 md:p-12 border border-white/10 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4 mb-8 text-premium-neon">
                   <Car size={32} />
                   <h3 className="text-2xl font-display font-bold text-white">What do you drive?</h3>
                </div>
                <input
                  type="text"
                  placeholder="e.g. Maruti Swift 2021"
                  className="w-full bg-white/5 border-b-2 border-white/10 py-4 text-2xl text-white focus:outline-none focus:border-premium-neon transition-all"
                  value={data.model}
                  onChange={(e) => setData({...data, model: e.target.value})}
                />
                <button
                  disabled={!data.model}
                  onClick={nextStep}
                  className="btn-neon w-full flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  Next Step <ChevronRight size={20} />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4 mb-8 text-premium-neon">
                   <Gauge size={32} />
                   <h3 className="text-2xl font-display font-bold text-white">Estimated Kilometers?</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['< 10k', '10k-30k', '30k-60k', '60k+'].map((range) => (
                    <button
                      key={range}
                      onClick={() => { setData({...data, km: range}); nextStep(); }}
                      className="py-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-premium-neon hover:text-black transition-all"
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-8"
              >
                <div className="w-20 h-20 bg-premium-neon/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <DollarSign size={40} className="text-premium-neon" />
                </div>
                <h3 className="text-3xl font-display font-black text-white">Estimated Market Range</h3>
                <div className="text-5xl md:text-7xl font-display font-black text-premium-neon tracking-tighter">
                  ₹5.85L - ₹6.40L
                </div>
                <p className="text-gray-500 font-medium">For your {data.model} ({data.km} KM)</p>
                <div className="flex flex-col md:flex-row gap-4 pt-8">
                  <button
                    onClick={() => window.open(`https://wa.me/919829064970?text=I just got a valuation of 5.8-6.4L for my ${data.model} on your site. I'd like to book an inspection.`, '_blank')}
                    className="btn-neon flex-grow"
                  >
                    Book Home Inspection
                  </button>
                  <button
                    onClick={() => setStep(1)}
                    className="px-8 py-4 border border-white/10 rounded-full text-white font-bold hover:bg-white/5"
                  >
                    Recalculate
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ValuationEngine;
