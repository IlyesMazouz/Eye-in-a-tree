import React from 'react'
import Title from '../components/Title'
import '../styles/Contact.css'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-header">
        <Title text1="CONTACT" text2="US" />
      </div>
      
      <div className="contact-section">
        <img className="contact-image" src={assets.contact_image} alt="Contact Us" />
        
        <div className="contact-details">
          <h2 className="contact-heading">Visit Our Shop</h2>
          <p className="contact-address">
            2 Trablos Street <br />
            Ezzahra 2034, Ben Arous, Tunisia
          </p>

          <h2 className="contact-heading">Get in Touch</h2>
          <p className="contact-info">
            Tel: <a href="tel:+21620529911">(+216) 20 529 911</a> <br />
            Email: <a href="mailto:Eyeinatree@gmail.com">Eyeinatree@gmail.com</a> <br/>
            Instagram: <a href="https://www.instagram.com/_eyeinatree_/" target="_blank" rel="noopener noreferrer">_eyeinatree_</a>
          </p>

          <h2 className="contact-heading">Business Hours</h2>
          <p className="contact-info">
            Monday - Friday: 10 AM - 7 PM <br />
            Saturday: 11 AM - 5 PM <br />
            Sunday: Closed
          </p>

          <p className="contact-message">
            Have a question? Looking for a custom piece? Reach out to us, and we’d love to help!  
            Whether it’s a special order or just a simple inquiry, we’re here for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
