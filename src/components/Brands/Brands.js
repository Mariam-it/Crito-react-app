import './Brands.css';
import React from 'react';
import img_dorfus from '../../assets/images/dorfus.svg';
import img_gobona from '../../assets/images/gobona.svg';
import img_martino from '../../assets/images/martino.svg';
import img_paperz from '../../assets/images/paperz.svg';
import img_square from '../../assets/images/square.svg';


function Brands() {
  return (
    <div className='test'>
      {/* <!-- brands start --> */}
      <div className='carosell-brands'>
        
        <div className="brands container">
          <img src={img_dorfus} alt="" className="brand" />
          <img src={img_gobona} alt="" className="brand" />
          <img src={img_martino} alt="" className="brand" />
          <img src={img_paperz} alt="" className="brand" />
          <img src={img_square} alt="" className="brand" />
        </div>
        <div className="brands container">
          <img src={img_dorfus} alt="" className="brand" />
          <img src={img_gobona} alt="" className="brand" />
          <img src={img_martino} alt="" className="brand" />
          <img src={img_paperz} alt="" className="brand" />
          <img src={img_square} alt="" className="brand" />
        </div>
      </div>
      {/* <!-- brands end --> */}
    </div>
  )
}

export default Brands