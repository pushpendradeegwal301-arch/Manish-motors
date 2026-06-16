import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { value: "34K+", label: "Happy Customers" },
    { value: "99%", label: "Satisfaction Rate" },
    { id: 'special', value: "210+", label: "Verified Cars" },
    { value: "100%", label: "Authenticity" },
  ];

  return (
    <section className="py-32 bg-premium-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="w-16 h-1 bg-premium-neon mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter text-white">
            OUR REPUTATION, BACKED BY DATA
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              {/* Decorative Accent */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1 h-1 bg-premium-neon rounded-full" />
                <div className="w-4 h-1 bg-premium-neon rounded-full" />
                <div className="w-1 h-1 bg-premium-neon rounded-full" />
              </div>

              <h3 className="text-5xl md:text-7xl font-display font-black text-white mb-4 group-hover:text-premium-neon transition-colors">
                {stat.value}
              </h3>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-premium-neon/20 to-transparent" />
    </section>
  );
};

export default Stats;
