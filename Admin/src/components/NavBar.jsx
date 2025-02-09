import React from 'react'
import { assets } from '../assets/assets'
import '../styles/NavBar.css'

const NavBar = ({setToken}) => {
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="Logo" />
      <button onClick={()=>setToken('')} className="logout-button">Logout</button>
    </div>
  );
};

export default NavBar;
