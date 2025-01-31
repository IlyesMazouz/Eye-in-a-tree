import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import '../styles/Cart.css';

const Cart = () => {
  const { products, currency, cartItems } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        tempData.push({
          _id: items,
          quantity: cartItems[items],
        });
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="cart-container">
      <div className="cart-title">
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);
          return (
            <div key={index} className="cart-item">
              <div className="cart-item-details">
                <img className="cart-item-image" src={productData.image[0]} alt={productData.name} />
                <div>
                  <p className="cart-item-name">{productData.name}</p>
                  <div className="cart-item-price-container">
                    <p>{currency}{productData.price}</p>
                  </div>
                </div>
              </div>
              <input className="cart-item-quantity" type='number' min={1} defaultValue={item.quantity} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;