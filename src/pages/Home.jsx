import React from 'react';
import Hero from '../components/Hero';
import CategoryCarousel from '../components/CategoryCarousel';
import Stats from '../components/Stats';
import AboutSplit from '../components/AboutSplit';

const Home = () => {
  return (
    <div className="bg-premium-black">
      <Hero />
      <CategoryCarousel />
      <Stats />
      <AboutSplit />
    </div>
  );
};

export default Home;
