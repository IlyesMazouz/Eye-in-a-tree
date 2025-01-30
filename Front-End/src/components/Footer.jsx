// Footer component displaying information about the shop and contact details
import React from 'react'
import { assets } from '../assets/assets'
import '../styles/Footer.css'

function Footer() {
  return (
    <div>
      <div className="footer-separator" />
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={assets.logo} className="footer-logo" alt="Logo" />
            <p className="footer-description">
              A handmade crystal jewelry shop crafting unique, high-quality pieces that blend beauty with the natural energy of gemstones.
            </p>
          </div>
          <div className="footer-section">
            <p className="footer-title">SHOP</p>
            <ul className="footer-list">
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="footer-section">
            <p className="footer-title">GET IN TOUCH</p>
            <ul className="footer-list">
              <li>+216 20 529 911</li>
              <li>contact@Eyeinatree.ig</li>
            </ul>
          </div>
        </div>
        <hr className="footer-hr" />
        <p className="footer-copy">Copyright 2025@ Eyeinatree.tn - All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;