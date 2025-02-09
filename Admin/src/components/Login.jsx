import React, { useState } from 'react'
import axios from 'axios'
import '../styles/Login.css'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Login = ({setToken}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    try {
    	e.preventDefault();
		const response = await axios.post(backendUrl + '/api/user/admin',{email,password})
		if (response.data.success) {
			setToken(response.data.token)
		} else {
        toast.error(response.data.message)
		}
	
    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="input-group">
            <p className="input-label">Email Address</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="input-field"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="input-group">
            <p className="input-label">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="input-field"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button className="login-button" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
