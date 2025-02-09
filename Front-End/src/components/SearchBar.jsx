import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import '../styles/SearchBar.css'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
  	const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
	const [visible, setVisible] = useState(false)
	const location = useLocation();

	useEffect(()=>{
		if (location.pathname.includes('collection')) {
			setVisible(true);
		}
		else {
			setVisible(false)
		}
	},[location])

  return showSearch && visible ? (
    <div className="search-bar">
      <div className="search-container">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
          type="text"
          placeholder="Search"
        />
        <img className="search-icon" src={assets.search_icon} alt="Search" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="close-icon"
        src={assets.cross_icone}
        alt="Close"
      />
    </div>
  ) : null;
};

export default SearchBar;
