import React, { useState } from 'react';
import { Car, DollarSign, CheckCircle, Zap, ShieldCheck, Upload } from 'lucide-react';

const SellCar = () => {
  const [formData, setFormData] = useState({
    carName: '',
    modelYear: '',
    phoneNumber: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(`Hello Manish Motors, I want to sell my car: ${formData.carName}, Year: ${formData.modelYear}. My number is ${formData.phoneNumber}.`);
    window.open(`https://wa.me/919829064970?text=${message}`, '_blank');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="pt-32 pb-32 bg-premium-black min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-premium-neon mb-8 mx-auto" />
          <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter uppercase">
            SELL YOUR <span className="text-premium-neon">CAR INSTANTLY.</span>
          </h2>
          <p className="text-gray-500 mt-4 font-bold uppercase tracking-widest text-xs">Get the best price for your vehicle</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              { icon: <DollarSign className="text-premium-neon" size={24} />, title: "Best Price", desc: "Get the highest market value for your car" },
              { icon: <Zap className="text-premium-neon" size={24} />, title: "Instant Payment", desc: "Same-day payment upon verification" },
              { icon: <ShieldCheck className="text-premium-neon" size={24} />, title: "Free RC Transfer", desc: "We handle all documentation" },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-6 p-6 bg-premium-dark rounded-[2rem] border border-white/5">
                <div className="bg-white/5 p-4 rounded-2xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-display font-black text-white mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-premium-dark rounded-[2.5rem] p-8 border border-white/5">
            <h3 className="text-2xl font-display font-black text-white mb-8 uppercase">Fill Details</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-3">Car Name</label>
                <input
                  type="text"
                  name="carName"
                  value={formData.carName}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Maruti Swift 2021"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-premium-neon transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-3">Model Year</label>
                <input
                  type="number"
                  name="modelYear"
                  value={formData.modelYear}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 2021"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-premium-neon transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-3">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 9876543210"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-premium-neon transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-premium-neon text-black py-5 rounded-xl text-sm font-black uppercase tracking-widest hover:shadow-[0_0_15px_rgba(212,255,0,0.4)] transition-all"
              >
                Get Instant Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellCar;
