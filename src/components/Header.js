import React, { useState} from 'react';
import "../components/styles/Header.css"
import Logo from "../components/assets/Logo.svg"
import { NavLink } from 'react-router-dom';
//import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


function Header(){

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
     return(

        <>
            <header className='header-container'>
            <NavLink to ="/">
            {<img className="logo-img" src = { Logo } alt = "Little Lemon logo" />}
            </NavLink>
            <section>
                <nav>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li><NavLink to="/">
                            Home
                            </NavLink>
                        </li>
                        <li> <NavLink to ="#">About </NavLink> </li>
                        <li><NavLink to ="#">Menu</NavLink></li>
                        <li><NavLink to ="/Bookings">Bookings</NavLink></li>
                        <li><NavLink to ="#">Order Online</NavLink></li>
                        <li><NavLink to ="#"> Login </NavLink> </li>
                    </ul>
                </nav>
            </section>
            
        
            </header>
        
        
        </>
           
  
     )

}
export default Header;