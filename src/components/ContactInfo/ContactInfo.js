import './ContactInfo.css';
import React from 'react'

function ContactInfo() {
  return (
    <div>
        {/* <!-- contact info start --> */}
    <div className="contact-info">
        <div className="container">
            <div className="boxes">
                <div className="box">
                    <div className="icon"><i className="fa-solid fa-location-dot"></i></div>
                    <div className="content">
                        <div className="title">Visit us</div>
                        <div>Sveavägen 31</div>
                        <div>111 34 STOCKOLM</div>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><i className="fa-solid fa-envelope"></i></div>
                    <div className="content">
                        <div className="title">Call us</div>
                        <div>+46 (8) 121 470 50</div>
                        <div>+46 (8) 121 470 51</div>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><i className="fa-solid fa-phone"></i></div>
                    <div className="content">
                        <div className="title">Email us</div>
                        <div>info@crito.com</div>
                        <div>support@crito.com</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- contact info end --> */}
    </div>
  )
}

export default ContactInfo