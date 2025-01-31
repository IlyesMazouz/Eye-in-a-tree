// ShopContextProvider manages the shop's context, providing access to products, currency, and delivery fee
import { createContext, useEffect, useState } from "react"
import { products } from "../assets/assets"

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
	const currency = 'TND';
	const delivery_fee = 10;
	const [cartItems,setCartItems] = useState({});

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

	const value = {
		products, currency, delivery_fee,
		cartItems, addToCart, getCartCount
	}

	return (
		<ShopContext.Provider value={value}>
			{props.children}
		</ShopContext.Provider>
	)
}

export default ShopContextProvider;