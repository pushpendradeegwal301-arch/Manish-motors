import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import Home from './pages/Home';
import BuyCars from './pages/BuyCars';
import SellCar from './pages/SellCar';
import FinanceServices from './pages/FinanceServices';

function App() {
  return (
    <Router>
      <div className="bg-premium-black selection:bg-premium-neon selection:text-black min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<BuyCars />} />
            <Route path="/sell" element={<SellCar />} />
            <Route path="/finance" element={<FinanceServices />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFAB />
      </div>
    </Router>
  );
}

export default App;
