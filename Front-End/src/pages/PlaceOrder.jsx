import React, { useContext } from 'react'
import Title from '../components/Title'
import '../styles/PlaceOrder.css'
import CartTotal from '../components/CartTotal'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

	const {navigate} = useContext(ShopContext);

  return (
    <div className="place-order-container">
      <div className="delivery-info">
        <div className="title-container">
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className="input-container">
  			<input className="input-field" type="text" placeholder="First name" />
  			<input className="input-field" type="text" placeholder="Last name" />
		</div>
		<input className="input-field-other" type="email" placeholder="Email adress" />
		<input className="input-field-other" type="text" placeholder="Street" />
		<div className="input-container">
  			<input className="input-field" type="text" placeholder="City" />
  			<input className="input-field" type="text" placeholder="State" />
			<input className="input-field-zip" type="number" placeholder="Zip Code" />
		</div>
		<input className="input-field-other" type="number" placeholder="Phone" />
      </div>
	  <div className="cart-total-wrapper">
  		<div className="cart-total-box">
    		<CartTotal />
  		</div>
		  <div className="payment-method">
  <Title text1={'PAYMENT'} text2={'METHOD'} />
  <div className="payment-options">
    <div className="payment-option">
      <p className="payment-text">CASH ON DELIVERY</p>
    </div>
  </div>
  <div className="place-order-container-button">
  <button onClick={()=>navigate('/orders')} className="place-order-button">PLACE ORDER</button>
</div>
</div>
</div>
</div>
  );
};

export default PlaceOrder;
