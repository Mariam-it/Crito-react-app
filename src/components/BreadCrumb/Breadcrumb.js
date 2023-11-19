import './Breadcrumb.css';
import React from 'react'
import img_bcl from '../../assets/images/background-lines.svg';

function BreadCrumb() {
  return (
    <div>
      {/* <!-- beadcrumb start --> */}
       <div className="contact-breadcrumb">
        <div className="header">
            <div className="menu">
                <div>Home</div>
                <div className="current">Contact</div>
            </div>
        </div>
        <div className="title">Let's Connect</div>
        <img className="effekt" src={img_bcl} alt=""/>
    </div>
    {/* <!-- beadcrumb end --> */}
    </div>
  )
}

export default BreadCrumb