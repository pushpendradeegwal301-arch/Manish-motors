import React from 'react';
import { Car, MapPin, Mail, Phone, ExternalLink, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-premium-black pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="bg-premium-neon p-2 rounded-lg shadow-[0_0_15px_rgba(212,255,0,0.3)]">
                <Car className="text-black w-6 h-6" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tight text-white uppercase">
                Manish <span className="text-premium-neon">Motors</span>
              </span>
            </div>
            <p className="text-gray-500 font-medium leading-relaxed">
              Serving Raja Park and Jaipur with quality pre-owned vehicles since 1990. Trust, Transparency, and Tradition.
            </p>
            <div className="pt-4">
               <p className="text-white font-bold mb-2">Manish Arora</p>
               <p className="text-xs text-gray-500 uppercase tracking-widest font-black">Proprietor</p>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-10">Showroom Address</h4>
            <div className="flex items-start gap-4 text-gray-500 group">
              <MapPin size={20} className="text-premium-neon shrink-0 mt-1" />
              <div>
                <p className="text-white font-bold mb-2">Raja Park Branch</p>
                <span className="text-xs font-medium leading-relaxed group-hover:text-gray-300 transition-colors">
                  No. 236/3, Parwati Marg, <br />
                  Raja Park, Jaipur - 302004 <br />
                  (Opp. Siddheshwar Mandir)
                </span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-10">Get In Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-gray-500 group cursor-pointer" onClick={() => window.open('tel:+919829064970')}>
                <Phone size={20} className="text-premium-neon shrink-0" />
                <span className="font-bold group-hover:text-white transition-colors">+91 98290 64970</span>
              </li>
              <li className="flex items-center gap-4 text-gray-500 group cursor-pointer" onClick={() => window.open('tel:01412620970')}>
                <Phone size={20} className="text-premium-neon shrink-0" />
                <span className="font-bold group-hover:text-white transition-colors">0141-2620970</span>
              </li>
              <li className="flex items-center gap-4 text-gray-500 group cursor-pointer">
                <Mail size={20} className="text-premium-neon shrink-0" />
                <span className="font-bold group-hover:text-white transition-colors">manishmotors.jp@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-10">Working Hours</h4>
            <ul className="space-y-4 text-gray-500">
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-premium-neon" />
                <div className="flex justify-between w-full font-bold">
                  <span>Mon - Sat:</span>
                  <span className="text-white">10:00 AM - 08:00 PM</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-premium-neon" />
                <div className="flex justify-between w-full font-bold">
                  <span>Sunday:</span>
                  <span className="text-white">10:00 AM - 05:00 PM</span>
                </div>
              </li>
              <li className="mt-8">
                <button
                  onClick={() => window.open('https://wa.me/919829064970?text=I want to visit the Raja Park showroom today', '_blank')}
                  className="w-full py-4 bg-premium-neon text-black font-black uppercase tracking-widest text-xs rounded-xl hover:scale-95 transition-transform"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">
            © 2024 Manish Motors (Manish Car's) Raja Park.
          </p>
          <div className="flex gap-8 text-xs font-bold text-gray-600 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
