import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import '../styles/Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);
  const [menuOpen, setMenuOpen] = useState(false); 

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

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

      <img onClick={() => setShowSearch(true)} src={assets.search_icon} className="search-icon" alt="search" />

      <div className="group">
        <Link to="/cart" className="cart-link">
          <img src={assets.cart_icone} className="cart-icon" alt="Cart" />
          <p className="cart-badge">{getCartCount()}</p>
        </Link>

        <div className="user-icon-container">
          <Link to='/login'><img className="profile-icone" src={assets.user_icone} alt="Profile" /></Link>
          <div className="dropdown-menu">
            <div className="dropdown-content">
              <p className="dropdown-item">My Profile</p>
              <p onClick={() => navigate('/orders')} className="dropdown-item">Orders</p>
              <p onClick={logout} className="dropdown-item">Logout</p>
            </div>
          </div>
        </div>

        <div className="menu-container">
          <img
            src={assets.menu_icone}
            className="menu-icon"
            alt="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {menuOpen && (
            <div className="menu-dropdown">
              <NavLink to="/" className="menu-item" onClick={() => setMenuOpen(false)}>HOME</NavLink>
              <NavLink to="/collection" className="menu-item" onClick={() => setMenuOpen(false)}>COLLECTION</NavLink>
              <NavLink to="/about" className="menu-item" onClick={() => setMenuOpen(false)}>ABOUT</NavLink>
              <NavLink to="/contact" className="menu-item" onClick={() => setMenuOpen(false)}>CONTACT</NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
