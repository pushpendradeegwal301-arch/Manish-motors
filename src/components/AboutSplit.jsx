import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, MapPin, Clock } from 'lucide-react';

const AboutSplit = () => {
  const points = [
    { title: "20+ Years Experience", desc: "Serving Raja Park families since decades with trusted wheels." },
    { title: "Transparent Pricing", desc: "No hidden costs. Honest deals by Manish Arora himself." },
    { title: "Multi-Brand Hub", desc: "From Maruti to Toyota, find all major brands under one roof." },
    { title: "Verified History", desc: "Every car comes with a clean title and mechanical verification." },
  ];

  return (
    <section id="about" className="py-32 bg-premium-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative z-10"
        >
          <div className="w-12 h-1 bg-premium-neon mb-8" />
          <h2 className="text-5xl md:text-6xl font-display font-black text-white leading-[1.1] tracking-tighter mb-8 uppercase">
            RAJA PARK'S <br />
            <span className="text-premium-neon">LEGACY</span> IN <br />
            AUTOMOTIVES.
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-md leading-relaxed">
            Located in the heart of Raja Park, Manish Motors (Manish Car's) has been the go-to destination for quality pre-owned vehicles for over 20 years.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {points.map((point, i) => (
              <div key={i} className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-6 rounded-full bg-premium-neon/10 flex items-center justify-center text-premium-neon border border-premium-neon/20 group-hover:bg-premium-neon group-hover:text-black transition-all">
                    <Check size={14} />
                  </div>
                  <span className="font-bold text-white group-hover:text-premium-neon transition-colors">{point.title}</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed pl-9">{point.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Image Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1200"
              alt="Manish Motors Raja Park"
              className="w-full h-auto hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Floating Location Badge */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -bottom-6 -right-6 glass-card p-6 border border-white/20 z-20 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="bg-premium-neon p-3 rounded-2xl text-black">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-black uppercase text-gray-500">Location</p>
                <p className="text-lg font-bold text-white">Raja Park, Jaipur</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSplit;
