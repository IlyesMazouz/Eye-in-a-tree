import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import '../styles/Orders.css'

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="orders-container">
      <div className="orders-title">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
	  <div className="orders-list">
  {products.slice(1, 4).map((item, index) => (
    <div key={index} className="order-item">
      <div className="order-details">
        <img className="order-image" src={item.image[0]} alt="Product" />
		<div className="order-info">
  <p className="order-name">{item.name}</p>
  <div className="order-details">
    <p className="order-price">{item.price}{currency}</p>
    <p>Quantity: 1</p>
  </div>
  <p className="order-date">
    Date: <span>5, Feb, 2025</span>
  </p>
</div>

      </div>
      <div className="order-status">
  <div className="status-indicator">
    <p className="status-dot"></p>
    <p className="status-text">Ready to ship</p>
  </div>
</div>
<button className='track-button'>Track Order</button>
    </div>
  ))}
</div>

    </div>
  );
};

export default Orders;
