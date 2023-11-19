import './AboutCompany.css';
import React from 'react';
import img_dariap from '../../assets/images/daria-pimkina-tYaccl19A3Q-unsplash.jpg'

function AboutCompany() {
  return (
    <div>

{/* <!-- About Company start --> */}
    <div className="about-company">
        <div className="container">
            <div className="image-item">
                <img src={img_dariap} alt=""/>
                <div className="bg">
                    <div className="title">Samantha Brown,<span>Founder</span></div>
                    <div className="description">
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                    </div>
                </div>

            </div>
            <div className="content">
                <span>About Company</span>
                <div className="title">
                    We Are Business Consulting & Credit Repair Experts
                </div>
                <div className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloremque, architecto ipsam, ducimus velit rerum reiciendis magnam consectetur quis assumenda ut et?
                    <br/><br/>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore magni accusantium nihil sit dolorem quia delectus maxime magnam.
                </div>
                <div className="buttons">
                    <div className="btn left">Learn More<i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                    <div className="btn right"><i className="fa-regular fa-circle-play"></i>Intro Video</div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About Company end --> */}

    </div>
  )
}

export default AboutCompany