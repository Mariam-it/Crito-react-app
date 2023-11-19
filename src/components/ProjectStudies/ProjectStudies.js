import './ProjectStudies.css';
import React from 'react'
import img_adeolu from '../../assets/images/adeolu-eletu-E7RLgUjjazc-unsplash.jpg';
import img_marek from '../../assets/images/marek-levak-zANXcXyByos-unsplash.jpg';
import img_oli from '../../assets/images/oli-dale-xjSkI_seiZY-unsplash.jpg';
import img_carlos from '../../assets/images/carlos-muza-hpjSkU2UYSU-unsplash.jpg';

function ProjectStudies() {
  return (
    <div>
        {/* <!-- Project & Case Studies start --> */}
     <div className="studies">
        <div className="container">
            <div className="heading">
                <span>Project & Case Studies</span>
                <div className="title">Let's Looks Our Global Projects</div>
            </div>
            <div className="boxes">
                <div className="box">
                    <img src={img_adeolu} alt=""/>
                    <div className="title">Grow your business</div>
                    <div className="icon">Read More<i className="fa-solid fa-arrow-up"></i></div>
                </div>
                <div className="box">
                    <img src={img_marek} alt=""/>
                    <div className="title">Why your client needs a responsive website</div>
                    <div className="icon">Read More<i className="fa-solid fa-arrow-up"></i></div>
                </div>
                <div className="box">
                    <img src={img_oli} alt=""/>
                    <div className="title">Educate your employees to get better results
                    </div>
                    <div className="icon">Read More<i className="fa-solid fa-arrow-up"></i></div>
                </div>
                <div className="box">
                    <img src={img_carlos} alt=""/>
                    <div className="title">Business Insights is a important piece of your business</div>
                    <div className="icon">Read More<i className="fa-solid fa-arrow-up"></i></div>
                </div>
            </div>
            <div className="btn">All Recent Projects<i className="fa-solid fa-arrow-up-right-from-square"></i></div>
        </div>
     </div>
      {/* <!-- Project & Case Studies end --> */}
    </div>
  )
}

export default ProjectStudies