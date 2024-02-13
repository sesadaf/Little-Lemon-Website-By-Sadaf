import React from 'react';
import "../components/styles/Footer.css";
import Logo from "../components/assets/FooterLogo.png";

const Footer = () => {
  return (
    <footer>
        <section className="footer-background">
            <div className="footer-container">
            <div className='logo-col'>
               
                <div>  <img src={Logo} alt="logo-little-lemon"/></div>
                <div>
                    <h3>Document Navigation</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
                </div>
            </div>
            <div>
                <h3>Contact</h3>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
          
            </div>
        </div>
      
        </section>
    </footer>
  )
}

export default Footer