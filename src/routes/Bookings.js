import React from 'react';
import HeaderElement from '../components/Header';
import Footer from '../components/Footer';
import BookingsPage from '../components/BookingsPage';

const Bookings = () => {
  return (
    <div>
      <HeaderElement />
      {<BookingsPage /> }
      <Footer />
    </div>
  )
}

export default Bookings