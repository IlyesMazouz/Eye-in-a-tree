import userModel from "../models/userModel.js";


const addToCart = async (req,res) => {
try {
	const {userId, itemId} = req.body

	const userData = await userModel.findById(userId)
	let cartData = await userData.cartData;

	if (cartData[itemId]) {
		if (cartData[itemId]) {
			cartData[itemId] += 1
		}
		else {
			cartData[itemId] = 1
		}
	} else {
		cartData[itemId] = {}
		cartData[itemId] = 1
	}

	await userModel.findByIdAndUpdate(userId, {cartData})

	res.json({success: true, message: "Added To Cart"})

} catch (error) {
	console.log(error)
	res.json({success: false, message: error.message})
}
	

}

const updateCart = async (req,res) => {
	
}

const getUserCart = async (req,res) => {
	
}

export {addToCart,updateCart,getUserCart};