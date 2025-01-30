// ProductItem component displays individual product details, image, name, and price, and links to a detailed product page
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
import '../styles/ProductItem.css'

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="product-item-link" to={`/product/${id}`}>
      <div className="product-image-container">
        <img className="product-image" src={image} alt={name} />
      </div>
      <p className="product-name">{name}</p>
      <p className="product-price">
        {price}
        {currency}
      </p>
    </Link>
  );
};

export default ProductItem;
