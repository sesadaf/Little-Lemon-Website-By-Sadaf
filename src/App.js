
import './App.css';
import Header from './components/Header';
import About from './components/About';
import  Footer from './components/BottomNavigation';

import  Highlights from './components/Highlights';


import Hero from './components/Hero';
import Testimonials from './components/Testimonials';


function App() {
  return (
    <section>
        <Header/>
        <Hero/>
        <Highlights/>
       
        <Testimonials/>
        <About/>


        <Footer/>

    </section>
  
  );
}

export default App;
