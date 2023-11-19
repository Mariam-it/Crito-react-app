import React from 'react'
import BreadCrumb from '../BreadCrumb/Breadcrumb';
import SignUp from '../SignUp/SignUp';
import img from '../../assets/images/under-construction.png';
import './Service.css';
function Service() {
  return (
    <div>
      <BreadCrumb />
      <div className='under-construction'>
        <img src={img} alt="under-construction" className="construction" />
      </div>
      <SignUp />
    </div>
  )
}

export default Service