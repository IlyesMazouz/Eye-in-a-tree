// The Collection component displays a grid of products with filtering options for categories and types
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import '../styles/Collection.css'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);

  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {
        setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev=> [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
  }
  else {
    setSubCategory(prev=> [...prev,e.target.value])
  }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => 
          item.category.some(c => category.map(cat => cat.toLowerCase()).includes(c.toLowerCase()))
      );
  }
  
  

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.some(sc => item.subCategory.includes(sc)));
    }

    setFilterProducts(productsCopy);
}

  useEffect(()=> {
    applyFilter();
    },[category,subCategory,search,showSearch,products])

  return (
  
    <div className="collection-container">
      <div className="filter-container">
      <div className='container'>
  	<div className='header'>
    	<Title text1={'ALL'} text2={'COLLECTIONS'} />
  		</div>
	</div>
        <p className="filter-text" onClick={() => setShowFilter(!showFilter)}>FILTERS</p>
        <div className={`filter-box ${showFilter ? '' : 'hidden'}`}>
          <p className="filter-title">CATEGORIES</p>
          <div className="filter-group">
            <label className="filter-option">
              <input className="filter-checkbox" type="checkbox" onChange={toggleCategory} value="men" />
              Men
            </label>
          </div>
          <div className="filter-group">
            <label className="filter-option">
              <input className="filter-checkbox" type="checkbox" onChange={toggleCategory} value="women" />
              Women
            </label>
          </div>
        </div>
      
        <div className={`filter-box`}>
          <p className="filter-title">TYPE</p>
          <div className="filter-group">
            <label className="filter-option">
              <input className="filter-checkbox" type="checkbox" onChange={toggleSubCategory} value="necklace" />
              Necklace
            </label>
          </div>
          <div className="filter-group">
            <label className="filter-option">
              <input className="filter-checkbox" type="checkbox" onChange={toggleSubCategory} value="earrings" />
              Earrings
            </label>
          </div>
          <div className="filter-group">
            <label className="filter-option">
              <input className="filter-checkbox" type="checkbox" onChange={toggleSubCategory} value="rings" />
              Rings
            </label>
          </div>
          <div className="filter-group">
            <label className="filter-option">
              <input className="filter-checkbox" type="checkbox" onChange={toggleSubCategory} value="combinations" />
              Combinations
            </label>
          </div>
        </div>
      </div>
      
	<div className='product-grid'>
		{
			filterProducts.map((item,index)=>(
				<ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
			))
		}
	</div>
    </div>
  );
};

export default Collection;
