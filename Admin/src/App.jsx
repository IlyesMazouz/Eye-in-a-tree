import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify'

export const backendUrl = import.meta.env.VITE_BACKEND_URL

const App = () => {

  const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])

  return (
    <div className="app-container">
      <ToastContainer/>
      { token === ""
      ? <Login setToken={setToken} />
      :
      <>
      <NavBar setToken={setToken} />
      <hr />
      <div className="content">
        <SideBar />
        <div className="main-content">
          <Routes>
            <Route path="/add" element={<Add token={token} />} />
            <Route path="/list" element={<List token={token} />} />
            <Route path="/orders" element={<Orders token={token} />} />
          </Routes>
        </div>
      </div>
      </>
      }
    </div>
  );
};

export default App;
