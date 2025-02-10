import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import '../styles/Cart.css';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (!products || products.length === 0) return;

    const tempData = [];
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const productExists = products.some((product) => product._id === item);
        if (productExists) {
          tempData.push({
            _id: item,
            quantity: cartItems[item],
          });
        } 
      }
    }
    setCartData(tempData);
  }, [cartItems, products, updateQuantity]);

  return (
    <div className="cart-container">
      <div className="cart-title">
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);

          if (!productData) return null; 

          return (
            <div key={index} className="cart-item">
              <div className="cart-item-details">
                <img className="cart-item-image" src={productData.image[0]} alt={productData.name} />
                <div>
                  <p className="cart-item-name">{productData.name}</p>
                  <div className="cart-item-price-container">
                    <p>{productData.price}{currency}</p>
                  </div>
                </div>
              </div>
              <input 
                onChange={(e) => 
                  e.target.value === '' || e.target.value === '0' 
                    ? null 
                    : updateQuantity(item._id, Number(e.target.value))
                } 
                className="cart-item-quantity" 
                type="number" 
                min={1} 
                defaultValue={item.quantity} 
              />
              <img 
                onClick={() => updateQuantity(item._id, 0)} 
                className="image-bin" 
                src={assets.bin_icone} 
                alt="Delete Icon" 
              />
            </div>
          );
        })}
      </div>
      <div className="cart-total-container">
        <div className="cart-total">
          <CartTotal />
          <div className="checkout-container">
            <button onClick={() => navigate('/place-order')} className="checkout-button">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
