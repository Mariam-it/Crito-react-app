import './Testimonal.css';
import React from 'react'
import img_vince from '../../assets/images/vince-veras-AJIqZDAUD7A-unsplash.jpg';
import img_christina from '../../assets/images/christina-wocintechchat-com-PlikkWB79qs-unsplash.jpg';
import img_joseph from '../../assets/images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg';
function Testimonal() {
  return (
    <div>
          {/* <!--Testimonial start--> */}
      <div className="testimonial">
        <div className="container">
            <div className="heading">
                <span>Testimonial</span>
                <div className="title">What Our Client Says</div>
            </div>
            <div className="boxes">
                <div className="box">
                    <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequatur fugit placeat nesciunt veniam, fugiat repellat amet perspiciatis, dolorum dignissimos, quia obcaecati eligendi?</div>
                    <div className="client">
                        <img src={img_vince} alt=""/>
                        <div className="client-info">
                            <div className="name">Cassandra Warren</div>
                            <div className="job">Business Manager, Dorfus</div>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequatur fugit placeat nesciunt veniam, fugiat repellat amet perspiciatis, dolorum dignissimos, quia obcaecati eligendi?</div>
                    <div className="client">
                        <img src={img_christina} alt=""/>
                        <div className="client-info">
                            <div className="name">Amanda Tulling</div>
                            <div className="job">Senior Developer, Square</div>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequatur fugit placeat nesciunt veniam, fugiat repellat amet perspiciatis, dolorum dignissimos, quia obcaecati eligendi?</div>
                    <div className="client">
                        <img src={img_joseph} alt=""/>
                        <div className="client-info">
                            <div className="name">Jack McDogglas</div>
                            <div className="job">Key Account Manager, Gobona</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn">All Reviews<i className="fa-solid fa-arrow-up-right-from-square"></i></div>
        </div>
      </div>
      {/* <!--Testimonial end--> */}
    </div>
  )
}

export default Testimonal