// Navbar component provides navigation links, logo, cart, and user profile options
import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import '../styles/Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

  const {getCartCount} = useContext(ShopContext);
  const {setShowSearch} = useContext(ShopContext);

  return (
    <div className="navbar">
      <Link to={'/'}>
        <img src={assets.logo} className="logo" alt="Logo" />
      </Link>

      <ul className="ul1">
        <li>
          <NavLink to="/" className="navlink">
            <p>HOME</p>
            <hr className="navlink-line" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/collection" className="navlink">
            <p>COLLECTION</p>
            <hr className="navlink-line" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="navlink">
            <p>ABOUT</p>
            <hr className="navlink-line" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="navlink">
            <p>CONTACT</p>
            <hr className="navlink-line" />
          </NavLink>
        </li>
      </ul>

      <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="search-icon" alt="search" />

      <div className="group">
        <Link to="/cart" className="cart-link">
          <img src={assets.cart_icone} className="cart-icon" alt="Cart" />
          <p className="cart-badge">{getCartCount()}</p>
        </Link>

        <div className="user-icon-container">
          <Link to='login'><img className="profile-icone" src={assets.user_icone} alt="Profile" /></Link>
          <div className="dropdown-menu">
            <div className="dropdown-content">
              <p className="dropdown-item">My Profile</p>
              <p className="dropdown-item">Orders</p>
              <p className="dropdown-item">Logout</p>
            </div>
          </div>
        </div>

        <img
          src={assets.menu_icone}
          className="menu-icon"
          alt="Menu"
          style={{ display: 'block' }}
        />
      </div>
    </div>
  );
};

export default Navbar;
