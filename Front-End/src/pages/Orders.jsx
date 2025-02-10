import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import '../styles/Orders.css'
import axios from 'axios';

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);

  const [orderData,setorderData] = useState([])

  const loadOrderData = async () => {
    try {
      if (!token) {
          return null
      } 

      const response = await axios.post(backendUrl + '/api/order/userorders',{},{headers:{token}})
      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order)=> {
          order.items.map((item)=> {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setorderData(allOrdersItem.reverse());
      }
    } catch (error) {
      
    }
  }

  useEffect(()=> {
    loadOrderData()
  },[token])

  return (
    <div className="orders-container">
      <div className="orders-title">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
	  <div className="orders-list">
  {orderData.map((item, index) => (
    <div key={index} className="order-item">
      <div className="order-details">
        <img className="order-image" src={item.image[0]} alt="Product" />
		<div className="order-info">
  <p className="order-name">{item.name}</p>
  <div className="order-details">
    <p className="order-price">{item.price}{currency}</p>
    <p>Quantity: {item.quantity}</p>
  </div>
  <p className="order-date">
    Date: <span>{new Date(item.date).toDateString()}</span>
  </p>
  <p className="order-date">
    Payment: <span>{item.paymentMethod}</span>
  </p>
</div>

      </div>
      <div className="order-status">
  <div className="status-indicator">
    <p className="status-dot"></p>
    <p className="status-text">{item.status}</p>
  </div>
</div>
<button onClick={loadOrderData} className='track-button'>Track Order</button>
    </div>
  ))}
</div>

    </div>
  );
};

export default Orders;
