import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'; 
import images from '../../assets/images/logotype.svg'
function Header() {
  return (
    <div>
            {/* <!-- header start --> */}
    <nav className="navbar">
        <div className="container nav">
            <div className="nav-logo">
                <img src={images} alt="Crito logo"/>
            </div>
            <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
            <label htmlFor="nav-toggle" className="nav-burger">&#9776;</label>
            <div className="navbar-menu container">
                <div className="information">
                    <ul className="contact-Info">
                        <li><a href="#"><i className="fa-solid fa-phone"></i>123-456-7890</a></li>
                        <li><a href="#">|<i className="fa-regular fa-envelope"></i>info@crito.com</a></li>
                        <li><a href="#">|<i className="fa-solid fa-location-dot"></i>123 Gata, Stad</a></li>
                    </ul>
                    <div className="socialmedia">
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="home-nav">
                    <ul className="menu">
                        <li>
                            <Link to ='/'>Home</Link>
                        </li>
                        <li>
                            <Link to ="/service">Service</Link>
                        </li>
                        <li><a href="/News">News</a></li>
                        <li>
                            <Link to ="/contact">Contact</Link>
                        </li>
                    </ul>

                    <div className="button">
                        <button className="btn" type="submit">Login<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    {/* <!-- header end --> */}
    </div>
  )
}

export default Header