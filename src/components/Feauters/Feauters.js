import './Feauters.css';
import React from 'react'

function Feauters() {
  return (
    <div>
         {/* <!-- feauters start --> */}
    <div className="feauters">
        <div className="container">
            <div className="heading">
                <span>Feauters</span>
                <div className="title">Our Accouting is trusted by thousand of companies</div>
                <div className="btn">Learn More<i className="fa-solid fa-arrow-up-right-from-square"></i></div>
            </div>
            <div className="feauters-boxes">
                <div className="item">
                    <div className="icon">
                        <i className="fa-solid fa-business-time"></i>
                    </div>
                    <div className="title">Business Advice</div>
                    <div className="description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </div>
                </div>
                <div className="item">
                    <div className="icon">
                        <i className="fa-solid fa-money-check"></i>
                    </div>
                    <div className="title">Financial Advice</div>
                    <div className="description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </div>
                </div>
                <div className="item">
                    <div className="icon">
                        <i className="fa-solid fa-building"></i>
                    </div>
                    <div className="title">Startup Business</div>
                    <div className="description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </div>
                </div>
                <div className="item">
                    <div className="icon">
                        <i className="fa-solid fa-chart-simple"></i>
                    </div>
                    <div className="title">Risk Management</div>
                    <div className="description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- feauters end --> */}
    </div>
  )
}

export default Feauters