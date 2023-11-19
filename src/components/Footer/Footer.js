import './Footer.css';
import React from 'react'
import img_logotype from '../../assets/images/logotype-white.svg';
import img_bc_lines from '../../assets/images/background-lines-white-right.svg';

function Footer() {
  return (
    <div>

      <footer>
        <div className="container">
            <div className="logo">
                <img src={img_logotype} alt=""/>
                <input type="checkbox" id="logo-toggle" className="logo-toggle"/>
                <label htmlFor="logo-toggle" className="logo-collapse"><i className="fa-solid fa-sort-down"></i></label>
                <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eos accusantium magnam eveniet voluptatibus expedita rem, magni impedit animi aut!</div>
            </div>
            <div className="links">
                <div className="title">Company</div>
                <input type="checkbox" id="company-toggle" className="company-toggle"/>
                <label htmlFor="company-toggle" className="company-collapse"><i className="fa-solid fa-sort-down"></i></label>
                <div className="company-links">
                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#">Works</a>
                    <a href="#">Career</a>
                </div>
            </div>
            <div className="links">
                <div className="title">Help</div>
                <input type="checkbox" id="help-toggle" className="help-toggle"/>
                <label htmlFor="help-toggle" className="help-collapse"><i className="fa-solid fa-sort-down"></i></label>
                <div className="company-links">
                    <a href="">Costumer Support</a>
                    <a href="">Delivery Details</a>
                    <a href="">Terms & Conditions</a>
                    <a href="">Privacy Policy</a>
                </div>
            </div>
            <div className="links">
                <div className="title">Resources</div>
                <input type="checkbox" id="resurces-toggle" className="resurces-toggle"/>
                <label htmlFor="resurces-toggle" className="resurces-collapse"><i className="fa-solid fa-sort-down"></i></label>
                <div className="company-links">
                    <a href="">Free eBooks</a>
                    <a href="">Development Tutorial</a>
                    <a href="">How to - Blog</a>
                    <a href="">Youtube Playlist</a>
                </div>
            </div>
            <div className="links">
                <div className="title">Links</div>
                <input type="checkbox" id="links-toggle" className="links-toggle"/>
                <label htmlFor="links-toggle" className="links-collapse"><i className="fa-solid fa-sort-down"></i></label>
                <div className="company-links">
                    <a href="">Free eBooks</a>
                    <a href="">Development Tutorial</a>
                    <a href="">How to - Blog</a>
                    <a href="">Youtube Playlist</a>
                </div>
            </div>
        </div>
        <img className="effekt" src={img_bc_lines} alt=""/>
        <div className="bottom">
            <div className="copyright">
                © 2023 Crito - Consulting Company Inc. All Rights Reserved.
            </div>
            <div className="social-media">
                <a href=""><i className="fa-brands fa-facebook"></i></a>
                <a href=""><i className="fa-brands fa-twitter"></i></a>
                <a href=""><i className="fa-brands fa-instagram"></i></a>
                <a href=""><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer