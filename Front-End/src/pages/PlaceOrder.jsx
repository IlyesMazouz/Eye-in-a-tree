import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import '../styles/PlaceOrder.css'
import CartTotal from '../components/CartTotal'
import { ShopContext } from '../context/ShopContext'
import { data } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

	const [method,setMethod] = useState('cod');
	const {navigate,backendUrl,token,cartItems,setCartItems,getCartAmount,delivery_fee,products} = useContext(ShopContext);
	const [fromData,setFromData] = useState({
		firstName:'',
		lastName:'',
		email:'',
		street:'',
		city:'',
		state:'',
		zipcode:'',
		phone:''
	})

	const onChangeHandler = (event) => {
		const name = event.target.name
		const value = event.target.value

		setFromData(data => ({...data,[name]:value}))
	}
	
	const onSubmitHandler = async (event) => {
		event.preventDefault();
		try {
			let orderItems = [];
	
			for (const productId in cartItems) {
				if (cartItems[productId] > 0) {
					const itemInfo = structuredClone(products.find(product => product._id === productId));
					if (itemInfo) {
						itemInfo.quantity = cartItems[productId];  
						orderItems.push(itemInfo);
					}
				}
			}
	
			let orderData = {
				address: fromData,
				items: orderItems,
				amount: getCartAmount() + delivery_fee,
				paymentMethod: method
			}

			switch(method) {
				case 'cod':
					const response = await axios.post(backendUrl + '/api/order/place',orderData,{headers:{token}})
					console.log(response.data);
					if (response.data.success) {
						setCartItems({})
						navigate('/orders')
					} else {
						toast.error(response.data.message)
					}
					break;

					default:
						break;
			}

		} catch (error) {
			console.error(error)
			toast.error(error.message)
		}
	};
	

  return (
    <form onSubmit={onSubmitHandler} className="place-order-container">
      <div className="delivery-info">
        <div className="title-container">
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className="input-container">
  			<input required onChange={onChangeHandler} name='firstName' value={fromData.firstName} className="input-field" type="text" placeholder="First name" />
  			<input required onChange={onChangeHandler} name='lastName' value={fromData.lastName} className="input-field" type="text" placeholder="Last name" />
		</div>
		<input required onChange={onChangeHandler} name='email' value={fromData.email} className="input-field-other" type="email" placeholder="Email adress" />
		<input required onChange={onChangeHandler} name='street' value={fromData.street} className="input-field-other" type="text" placeholder="Street" />
		<div className="input-container">
  			<input required onChange={onChangeHandler} name='city' value={fromData.city} className="input-field" type="text" placeholder="City" />
  			<input required onChange={onChangeHandler} name='state' value={fromData.state} className="input-field" type="text" placeholder="State" />
			<input required onChange={onChangeHandler} name='zipcode' value={fromData.zipcode} className="input-field-zip" type="number" placeholder="Zip Code" />
		</div>
		<input required onChange={onChangeHandler} name='phone' value={fromData.phone} className="input-field-other" type="number" placeholder="Phone" />
      </div>
	  <div className="cart-total-wrapper">
  		<div className="cart-total-box">
    		<CartTotal />
  		</div>
		  <div className="payment-method">
  <Title text1={'PAYMENT'} text2={'METHOD'} />
  <div className="payment-options">
    <div onClick={()=>setMethod('cod')} className="payment-option">
      <p className="payment-text">CASH ON DELIVERY</p>
    </div>
  </div>
  <div  className="place-order-container-button">
  <button type='submit' className="place-order-button">PLACE ORDER</button>
</div>
</div>
</div>
</form>
  );
};

export default PlaceOrder;
