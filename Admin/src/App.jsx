import React from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'

const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <hr />
      <div className="content">
        <SideBar />
        <div className="main-content">
          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
