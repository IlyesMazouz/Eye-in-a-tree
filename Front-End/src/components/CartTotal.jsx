import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import '../styles/CartTotal.css'

const CartTotal = () => {
  const { currency,delivery_fee,getCartAmount } = useContext(ShopContext);

  return (
    <div className="cart-total-container">
      <div className="cart-total-title">
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>
      <div className="cart-total-details">
        <div className="cart-total-row">
          <p>Subtotal</p>
          <p>{currency} {getCartAmount()}.00</p>
        </div>
        <hr />
        <div className="cart-total-row">
          <p>Shipping Fee</p>
          <p>{currency} {delivery_fee}.00</p>
        </div>
        <hr />
        <div className="cart-total-row cart-total-final">
          <b>Total</b>
          <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}</b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
