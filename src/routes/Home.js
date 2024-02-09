import React from 'react';
import HeaderElement from '../components/Header';
import HeroSection from '../components/Hero';
import Specials from '../components/Highlights';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <HeaderElement />
      <HeroSection />
        <Specials/>
      <Footer />
    </>
  )
}

export default Home