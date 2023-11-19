import './ContactForm.css';
import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[a-z0-9._%+-]+@[a-z]{3,10}\.[a-z]{3}$/;
    const nameRegex = /^[A-Z][a-zA-Z\s]{2,9}$/;
    const messageRegex = /^[A-Z][\s\S]{4,1499}$/;


    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (!nameRegex.test(formData.name)) {
      errors.name = 'Name can only start with capital letter';
    }

    if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (!messageRegex.test(formData.message)) {
      errors.message = 'Message must start with a capital letter, be at least 5 characters long, and not exceed 1500 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.status === 200) {
            setFormSubmitted(true);
          }
        })
        .catch((error) => {
          console.error('Fel vid skickande av formulärdata', error);
        });
    }
  };

  return (
    <div>
      <div className="contact-form">
        <div className="container">
          <div className="title">Leave us a message for any information.</div>
          {formSubmitted ? (
            <p>Formuläret har skickats!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && <p className="error-message">{formErrors.name}</p>}
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <p className="error-message">{formErrors.email}</p>}
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Your Message*"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {formErrors.message && <p className="error-message">{formErrors.message}</p>}
              <button className="btn" type="submit">
                Send Message<i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
