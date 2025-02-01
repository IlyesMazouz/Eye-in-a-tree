// The Product component displays detailed information about a specific product
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import '../styles/Product.css'

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')

  const fetchProductData = async () => {
    products.forEach((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  return productData ? (
    <div className="product-container">
      <div className="product-content">
        <div className="product-images">
          <div className="thumbnails">
            {productData.image.map((item, index) => (
              <img 
                src={item} 
                key={index} 
                className="thumbnail"  
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          <div className="main-image">
            <img src={image} alt="Main product" />
          </div>
        </div>

        <div className="product-details">
          <h1 className="product-title">{productData.name}</h1>
          <p className="product-price-page">{productData.price}{currency}</p>
          <p className="product-description">{productData.description}</p>
		  <ul>
			<li>100% Handmade</li>
			<li>Cash on delivery available</li>
			<li>Easy return policy within 7 days</li>
		  </ul>
        </div>
		<div>
			<button onClick={()=>addToCart(productData._id)} className="add-to-cart">ADD TO CART</button>
		</div>
      </div>
    </div>
  ) : <div className="loading">Loading...</div>
}

export default Product;
