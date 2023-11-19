import './ChooseUs.css';
import img_amy from '../../assets/images/amy-hirschi-K0c8ko3e6AA-unsplash.jpg';
import React from 'react'

function ChooseUs() {
  return (
    <div>
        {/* <!-- Choose us start --> */}
    <div className="choose">
        <div className="container">
            <div className="image-item">
                <img src={img_amy} alt=""/>
                <div className="image-bg"></div>
            </div>
            <div className="content">
                <span>Why Choose Us</span>
                <div className="heading">Why We Are The Best Business Consulting Agency</div>
                <div className="boxes">
                    <div className="box">
                        <div className="icon"><i className="fa-solid fa-gear"></i></div>
                        <div className="item">
                            <div className="title">Process Exellence</div>
                            <div className="description">Lorem ipsum dolor sit amet consectetur.</div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><i className="fa-solid fa-pen-to-square"></i></div>
                        <div className="item">
                            <div className="title">Strategic Planning</div>
                            <div className="description">Lorem ipsum dolor sit amet consectetur.</div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><i className="fa-solid fa-object-group"></i></div>
                        <div className="item">
                            <div className="title">Experience Design</div>
                            <div className="description">Lorem ipsum dolor sit amet consectetur.</div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><i className="fa-solid fa-brain"></i></div>
                        <div className="item">
                            <div className="title">Artificial Inteligence</div>
                            <div className="description">Lorem ipsum dolor sit amet consectetur.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Choose us end --> */}
    </div>
  )
}

export default ChooseUs