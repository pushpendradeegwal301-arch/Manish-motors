import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Landmark, RotateCcw } from 'lucide-react';

const TrustIndicators = () => {
  return (
    <section id="why-us" className="py-24 bg-navy-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-4">Why Choose <span className="text-brand-orange">Vinayak?</span></h2>
          <p className="text-white/60">The gold standard for pre-owned vehicles in Jaipur.</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[180px]">

          {/* Box 1: Large */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-3 lg:col-span-5 md:row-span-2 glass-card p-8 flex flex-col justify-between overflow-hidden relative"
          >
            <div className="bg-brand-orange/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="text-brand-orange w-10 h-10" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">100+ Point Inspection</h3>
              <p className="text-white/60 leading-relaxed">
                Every vehicle undergoes a rigorous mechanical and aesthetics check by our certified engineers before it hits our lot.
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-5">
              <ShieldCheck size={200} />
            </div>
          </motion.div>

          {/* Box 2: Tall */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-3 lg:col-span-4 md:row-span-2 glass-card p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-brand-orange/20 to-transparent"
          >
            <CheckCircle2 className="text-brand-orange w-20 h-20 mb-8" />
            <h3 className="text-3xl font-bold mb-4">Non-Accidental Cars</h3>
            <p className="text-white/60">
              We only deal in clean-title, non-accidental vehicles with verified history reports. No compromises on safety.
            </p>
          </motion.div>

          {/* Box 3: Wide Bottom */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-6 lg:col-span-3 md:row-span-1 glass-card p-8 flex items-center space-x-6"
          >
            <div className="bg-blue-500/10 p-4 rounded-xl">
              <RotateCcw className="text-blue-500 w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Instant RC Transfer</h3>
              <p className="text-sm text-white/40">Paperwork handled by us within 48 hours.</p>
            </div>
          </motion.div>

          {/* Box 4: Wide Bottom */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-6 lg:col-span-3 md:row-span-1 glass-card p-8 flex items-center space-x-6"
          >
            <div className="bg-green-500/10 p-4 rounded-xl">
              <Landmark className="text-green-500 w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Easy Finance / EMI</h3>
              <p className="text-sm text-white/40">Lowest interest rates starting at 8.9%.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
