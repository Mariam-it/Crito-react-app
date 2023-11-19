import './OurService.css';

import React from 'react'

function OurService() {
  return (
    <div>
            {/* <!-- Our Service start --> */}
    <div className="our-service">
        <div className="container">
            <div className="heading">
                <span>Our Service</span>
                <div className="title">We Provide The Best Service For Consulting</div>
            </div>
            <div className="boxes">
                <div className="box">
                    <div className="title">Business Advice</div>
                    <div className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque officia
                        voluptates dolorum.</div>
                    <div className="icon"><i className="fa-solid fa-circle-arrow-right"></i></div>
                </div>
                <div className="box">
                    <div className="title">Startup Business</div>
                    <div className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque officia
                        voluptates dolorum.</div>
                    <div className="icon"><i className="fa-solid fa-circle-arrow-right"></i></div>
                </div>
                <div className="box">
                    <div className="title">Financial Advice</div>
                    <div className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque officia
                        voluptates dolorum.</div>
                    <div className="icon"><i className="fa-solid fa-circle-arrow-right"></i></div>
                </div>
                <div className="box">
                    <div className="title">Risk Managment</div>
                    <div className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque officia
                        voluptates dolorum.</div>
                    <div className="icon"><i className="fa-solid fa-circle-arrow-right"></i></div>
                </div>
            </div>
            <div className="btn">Browse Service<i className="fa-solid fa-arrow-up-right-from-square"></i></div>
        </div>
    </div>
    {/* <!-- Our Service end --> */}
    </div>
  )
}

export default OurService