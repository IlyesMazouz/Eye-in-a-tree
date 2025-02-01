import React from 'react'
import Title from '../components/Title'
import '../styles/About.css'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-header">
        <Title text1="ABOUT" text2="US" />
      </div>
      <div className="about-section">
        <img className="about-image" src={assets.about_image} alt="About Us" />
        <div className="about-text">
          <p>At Eye in a Tree, we believe that jewelry is more than just an accessory—it’s a reflection of individuality, energy, and craftsmanship. Our passion for crystals and handcrafted artistry drives us to create unique, high-quality jewelry that carries meaning and beauty.</p>
          <p>Each piece in our collection is carefully designed and handmade with love, using ethically sourced crystals and premium materials. We take pride in our craftsmanship, ensuring that every item is not only visually stunning but also infused with positive energy and intention.</p>
          <p>Whether you're drawn to crystals for their natural beauty, spiritual properties, or simply as a statement piece, our jewelry is made to inspire and empower. Explore our collection and find the perfect piece that resonates with you.</p>
          <p className="about-thank-you">Thank you for supporting handmade craftsmanship and small businesses—we're honored to be a part of your journey.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
