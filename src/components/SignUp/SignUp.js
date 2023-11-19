import './SignUp.css';
import React from 'react'
import img_bc from '../../assets/images/background-wavy-lines.svg';

function SignUp() {
  return (
    <div>
        {/* <!--Signup start--> */}
      <div className="signup">
        <div className="container">
            <div className="heading">
             <div className="title">Get News Updates By Signup</div>
            </div>
            <div className="subscribe">
                <input type="text" placeholder="username@domain.com"/>
                <div className="btn">Subscribe<i className="fa-solid fa-arrow-up-right-from-square"></i></div>
            </div>
            <img src={img_bc} alt=""/>
        </div>
      </div>
      {/* <!--Signup end--> */}
    </div>
  )
}

export default SignUp