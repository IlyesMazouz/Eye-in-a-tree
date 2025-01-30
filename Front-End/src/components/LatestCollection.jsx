// LatestCollection component displays the latest products from the collection
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import '../styles/LatestCollection.css'
import ProductItem from './ProductItem'

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="latest-collection-container">
      <div className="title-section">
        <Title text1="LATEST" text2="COLLECTION" />
        <p className="description">
          Discover the timeless beauty of handmade crystal jewelry crafted with
          love and intention. Each piece in our collection is a unique
          expression of artistry, blending natural gemstones with exquisite
          designs to create something truly special.
        </p>
      </div>
      <div className="product-grid">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
