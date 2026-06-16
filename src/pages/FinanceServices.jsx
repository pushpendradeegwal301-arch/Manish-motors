import React, { useState, useEffect } from 'react';
import { ShieldCheck, DollarSign, Zap, Users, Calculator } from 'lucide-react';

const FinanceServices = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(36);
  const [emi, setEmi] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTenure]);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 12 / 100;
    const time = parseFloat(loanTenure);

    if (principal > 0 && rate > 0 && time > 0) {
      const emiAmount = principal * rate * Math.pow(1 + rate, time) / (Math.pow(1 + rate, time) - 1);
      const total = emiAmount * time;
      const interest = total - principal;

      setEmi(Math.round(emiAmount));
      setTotalPayment(Math.round(total));
      setTotalInterest(Math.round(interest));
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hello Manish Motors, I would like to know more about your finance and insurance services.`);
    window.open(`https://wa.me/919829064970?text=${message}`, '_blank');
  };

  const handleWhatsAppWithEMI = () => {
    const message = encodeURIComponent(`Hello Manish Motors, I used your EMI calculator and got an EMI of ₹${emi} for a loan of ₹${loanAmount} at ${interestRate}% for ${loanTenure} months. Please contact me to discuss further.`);
    window.open(`https://wa.me/919829064970?text=${message}`, '_blank');
  };

  return (
    <section className="pt-32 pb-32 bg-premium-black min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-premium-neon mb-8 mx-auto" />
          <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter uppercase">
            FINANCE & <span className="text-premium-neon">INSURANCE.</span>
          </h2>
          <p className="text-gray-500 mt-4 font-bold uppercase tracking-widest text-xs">Easy EMI options and complete insurance</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-premium-dark rounded-[2.5rem] p-10 border border-white/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-premium-neon p-4 rounded-2xl">
                <Calculator className="text-black" size={28} />
              </div>
              <h3 className="text-2xl font-display font-black text-white uppercase">EMI Calculator</h3>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Loan Amount</label>
                  <span className="text-sm font-black text-premium-neon">₹{loanAmount.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="5000000"
                  step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-premium-neon"
                />
                <div className="flex justify-between mt-2 text-xs text-gray-500 font-bold">
                  <span>₹1 Lakh</span>
                  <span>₹50 Lakhs</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Interest Rate (%)</label>
                  <span className="text-sm font-black text-premium-neon">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  min="7"
                  max="15"
                  step="0.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-premium-neon"
                />
                <div className="flex justify-between mt-2 text-xs text-gray-500 font-bold">
                  <span>7%</span>
                  <span>15%</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Loan Tenure (Months)</label>
                  <span className="text-sm font-black text-premium-neon">{loanTenure} months</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="84"
                  step="6"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(e.target.value)}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-premium-neon"
                />
                <div className="flex justify-between mt-2 text-xs text-gray-500 font-bold">
                  <span>1 Year</span>
                  <span>7 Years</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-premium-neon rounded-[2.5rem] p-8 border border-premium-neon">
              <h4 className="text-lg font-bold text-black uppercase tracking-widest mb-2">Monthly EMI</h4>
              <p className="text-5xl font-display font-black text-black">₹{emi.toLocaleString()}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-premium-dark rounded-[2rem] p-6 border border-white/5">
                <h5 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Total Payment</h5>
                <p className="text-2xl font-display font-black text-white">₹{totalPayment.toLocaleString()}</p>
              </div>
              <div className="bg-premium-dark rounded-[2rem] p-6 border border-white/5">
                <h5 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Total Interest</h5>
                <p className="text-2xl font-display font-black text-white">₹{totalInterest.toLocaleString()}</p>
              </div>
            </div>

            <button
              onClick={handleWhatsAppWithEMI}
              className="w-full bg-premium-dark text-white py-5 rounded-[2rem] text-sm font-black uppercase tracking-widest border border-white/10 hover:border-premium-neon hover:text-premium-neon transition-all"
            >
              Share Details on WhatsApp
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: <DollarSign className="text-premium-neon" size={32} />, title: "Low Interest Rates", desc: "Starting from 8.5% per annum with flexible repayment options" },
            { icon: <ShieldCheck className="text-premium-neon" size={32} />, title: "Quick Approval", desc: "Get loan approval within 24 hours with minimal documentation" },
            { icon: <Zap className="text-premium-neon" size={32} />, title: "100% Funding", desc: "Finance up to 100% of the car value with easy EMI" },
            { icon: <Users className="text-premium-neon" size={32} />, title: "Insurance", desc: "Comprehensive insurance coverage with hassle-free claims" },
          ].map((item, index) => (
            <div key={index} className="bg-premium-dark rounded-[2.5rem] p-10 border border-white/5 text-center group hover:border-premium-neon transition-all">
              <div className="bg-white/5 p-6 rounded-2xl mb-6 inline-block group-hover:bg-premium-neon transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl font-display font-black text-white mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleWhatsApp}
            className="bg-premium-neon text-black px-16 py-6 rounded-full text-lg font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(212,255,0,0.4)] transition-all"
          >
            Contact via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinanceServices;
