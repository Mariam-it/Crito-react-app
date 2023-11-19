import React from 'react'
import './Contact.css'
import BreadCrumb from '../BreadCrumb/Breadcrumb';
import ContactInfo from '../ContactInfo/ContactInfo'
import ContactForm from '../ContactForm/ContactForm'
import Map from '../Map/Map'

function Contact() {
  return (
    <div>
      <BreadCrumb/>      
      <ContactInfo/>
      <ContactForm/>
      <Map/>

    </div>
  )
}

export default Contact