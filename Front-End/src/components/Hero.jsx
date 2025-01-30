// Hero component showcasing the welcome message, shop introduction, and featured products for the shop
import React from 'react'
import { assets } from '../assets/assets'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div>
      <div className="hero-welcome">
        <h2 className="hero-welcome-text">Welcome to Eyeinatree Jewelry!</h2>
        <p className="hero-subtext">Explore our exclusive handmade crystal jewelry, crafted with passion and energy.</p>
      </div>
      <div className="hero-container">
        <div className="hero-left">
          <div>
            <h1 className="hero-heading">Newest Creations</h1>
            <div className="hero-action">
              <p className="shop-now">SHOP NOW</p>
              <div className="separator"></div>
            </div>
          </div>
        </div>
        <img className="product-image" src={assets.nineteen_product} alt="Product" />
      </div>
    </div>
  );
};

export default Hero;
