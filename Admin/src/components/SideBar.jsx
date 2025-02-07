import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import '../styles/SideBar.css'

const SideBar = () => {
  return (
    <div className="sidebar-menu">
      <NavLink className="nav-link" to="/add">
        <img className="icon" src={assets.add_icone} alt="add-icon" />
        <p className="nav-text">Add Products</p>
      </NavLink>

	  <NavLink className="nav-link" to="/list">
        <img className="icon" src={assets.list_icone} alt="list-icon" />
        <p className="nav-text">List Products</p>
      </NavLink>

	  <NavLink className="nav-link" to="/orders">
        <img className="icon" src={assets.orders_icone} alt="orders-icon" />
        <p className="nav-text">Orders</p>
      </NavLink>
    </div>
  );
};

export default SideBar;
