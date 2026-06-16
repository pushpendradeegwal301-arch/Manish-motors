import React from 'react';
import { motion } from 'framer-motion';
import { FileEdit, Gauge, Wallet } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileEdit className="w-8 h-8 text-brand-orange" />,
      title: "Enter Car Details",
      desc: "Fill in basic info like model, year, and condition in just 2 minutes."
    },
    {
      icon: <Gauge className="w-8 h-8 text-brand-orange" />,
      title: "Get Instant Valuation",
      desc: "Our AI-driven tool provides the best market price for your vehicle."
    },
    {
      icon: <Wallet className="w-8 h-8 text-brand-orange" />,
      title: "Get Paid in 30 Mins",
      desc: "After a quick inspection, the money is transferred to your bank instantly."
    }
  ];

  return (
    <section id="sell" className="py-24 bg-white/3">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-4">Sell Your Car <span className="text-brand-orange">Fast</span></h2>
          <p className="text-white/60 max-w-xl mx-auto">Skip the hassle of private buyers. We buy your car directly at the best price.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card p-10 group hover:border-brand-orange/50 transition-colors text-center relative overflow-hidden"
            >
              {/* Step Number Background */}
              <span className="absolute -top-4 -right-4 text-9xl font-extrabold text-white/[0.03] select-none">{i + 1}</span>

              <div className="bg-white/5 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-orange/10 transition-colors relative z-10">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">{step.title}</h3>
              <p className="text-white/60 leading-relaxed relative z-10">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
