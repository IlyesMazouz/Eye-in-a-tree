// OurPolicy component displays the exchange, return, and customer service policies
import React from 'react'
import { assets } from '../assets/assets'
import '../styles/OurPolicy.css'

const OurPolicy = () => {
  return (
    <div>
      <div className="policy-separator"></div>
      <div className="policy-container">
        <div className="policy-item">
          <img src={assets.exchange_icone} className="policy-icon" alt="" />
          <p className="policy-title">Exchange Policy</p>
          <p className="policy-description">We offer a free exchange policy</p>
        </div>
        <div className="policy-item">
          <img src={assets.return_icone} className="policy-icon" alt="" />
          <p className="policy-title">Return Policy</p>
          <p className="policy-description">We provide 7 days return policy</p>
        </div>
        <div className="policy-item">
          <img src={assets.customer_icone} className="policy-icon" alt="" />
          <p className="policy-title">Customer Service</p>
          <p className="policy-description">We provide customer support</p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
