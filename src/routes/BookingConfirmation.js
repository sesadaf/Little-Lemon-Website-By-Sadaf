import React from 'react';
import HeaderElement from '../components/Header';

import Footer from '../components/Footer';
import Specials from '../components/SpecialsCard';
import Testimonials from '../components/Testimonials';
import ConfirmedBooking from '../components/ConfirmedBooking';

const BookingConfirmation = () => {
  return (
    <div>
      <HeaderElement />
      
      {<ConfirmedBooking /> }
      <Specials/>
      <Testimonials/>
      <Footer />
    </div>
  )
}

export default BookingConfirmation