import React from 'react';
import { motion } from 'framer-motion';
import { Car, ShieldCheck, Wallet } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Buy a Car",
      desc: "Wide range of certified pre-owned vehicles with full history reports.",
      icon: <Car className="w-8 h-8" />,
      color: "bg-brand-blue"
    },
    {
      title: "Sell Your Car",
      desc: "Get the best market value for your vehicle with instant payment.",
      icon: <Wallet className="w-8 h-8" />,
      color: "bg-brand-green"
    },
    {
      title: "Car Insurance",
      desc: "Tailored insurance plans to keep your vehicle and family safe.",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "bg-brand-yellow"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-dark mb-4">
            Our Exceptional Service Solutions
          </h2>
          <div className="w-24 h-1.5 bg-brand-yellow mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group bg-[#F9F9F9] rounded-[2.5rem] p-10 hover:bg-white hover:shadow-2xl hover:shadow-brand-dark/5 transition-all duration-500 border border-brand-dark/5"
            >
              <div className={`${service.color} w-20 h-20 rounded-3xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-extrabold text-brand-dark mb-4">{service.title}</h3>
              <p className="text-brand-dark/50 font-medium leading-relaxed mb-8">
                {service.desc}
              </p>
              <button className="text-brand-dark font-bold hover:translate-x-2 transition-transform inline-flex items-center space-x-2">
                <span>Learn More</span>
                <span className="text-xl">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
