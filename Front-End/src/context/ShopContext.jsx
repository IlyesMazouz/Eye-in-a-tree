// ShopContextProvider manages the shop's context, providing access to products, currency, and delivery fee
import { createContext, useEffect, useState } from "react"
import { products } from "../assets/assets"
import { useNavigate } from "react-router-dom"

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
	const currency = 'TND';
	const delivery_fee = 10;
	const [search, setSearch] = useState('');
	const [cartItems, setCartItems] = useState({});
	const [showSearch, setShowSearch] = useState(false)
	const navigate = useNavigate();

	const addToCart = async (itemId) => {
		let cartData = structuredClone(cartItems);

		if (cartData[itemId]) {
			if (cartData[itemId]) {
				cartData[itemId] += 1;
			}
			else {
				cartData[itemId] = 1;
			}
		}
		else {
			cartData[itemId] = {};
			cartData[itemId] = 1;
		}
		setCartItems(cartData);
	}

	const getCartCount = () => {
		let totalCount = 0;
		for(const items in cartItems){
			try {
				if (cartItems[items] > 0) {
					totalCount += cartItems[items];
				}
			} catch (error) {

			}
		}
		return totalCount;
	}

	const updateQuantity = async (itemId,quantity) => {
		let cartData = structuredClone(cartItems);
		cartData[itemId] = quantity;
		setCartItems(cartData);
	}

	const getCartAmount = () => {
		let totalAmount = 0;
		for (const itemId in cartItems) {
			let itemInfo = products.find((product) => product._id === itemId);
			if (itemInfo) {
				totalAmount += itemInfo.price * cartItems[itemId];
			}
		}
		return totalAmount;
	};
	

	const value = {
		products, currency, delivery_fee,
		search,setSearch,showSearch,setShowSearch,
		cartItems, addToCart, getCartCount,
		updateQuantity, getCartAmount,navigate
	}

	return (
		<ShopContext.Provider value={value}>
			{props.children}
		</ShopContext.Provider>
	)
}

export default ShopContextProvider;