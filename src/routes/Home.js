import React from 'react';
import HeaderElement from '../components/Header';
import HeroSection from '../components/Hero';
import Specials from '../components/Highlights';
import Testimonials from '../components/Testimonials';
import About from '../components/About.js';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <HeaderElement />
      <HeroSection />
        <Specials/>
        <Testimonials/>
        <About/>
      <Footer />
    </>
  )
}

export default Home