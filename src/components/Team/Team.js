import './Team.css';
import React from 'react'
import img_christina from '../../assets/images/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg';
import img_itay from '../../assets/images/itay-verchik-6ZKGBzrDd3I-unsplash.jpg';
import img_christinaII from '../../assets/images/christina-wocintechchat-com-Zpzf7TLj_gA-unsplash.jpg';
import img_linkedin from '../../assets/images/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg';

function Team() {
  return (
    <div>
         {/* <!--Meet our team start--> */}
      <div className="team">
        <div className="container">
            <div className="heading">
                <span>Meet Our Team</span>
                <div className="title">Experience Team Members</div>
            </div>
            <div className="btn">Browse Team<i className="fa-solid fa-arrow-up-right-from-square"></i></div>
            <div className="boxes">
                <div className="box">
                    <img src={img_christina} alt=""/>
                    <div className="name">Kristine Palmer</div>
                    <div className="title">Chef Operation Officer</div>
                </div>
                <div className="box">
                    <img src={img_itay} alt=""/>
                    <div className="name">Mark Aubri</div>
                    <div className="title">Senior Consultant</div>
                </div>
                <div className="box">
                    <img src={img_christinaII} alt=""/>
                    <div className="name">Kimberly Hansen</div>
                    <div className="title">Senior Consultant</div>
                </div>
                <div className="box">
                    <img src={img_linkedin} alt=""/>
                    <div className="name">Justin Willioman</div>
                    <div className="title">Senior Tech Consultant</div>
                </div>               
            </div>
            <div className="current">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
      </div>
      {/* <!--Meet our team end--> */}
    </div>
  )
}

export default Team