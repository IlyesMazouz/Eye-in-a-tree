import React, { useState } from 'react'
import '../styles/Login.css'

const Login = () => {

  	const [currentState, setCurrentState] = useState('Sign up');
	const onSubmitHandler = async (event) => {
		event.preventDefault();
	}

  return (
    <form  onSubmit={onSubmitHandler} className="login-form">
      <div className="heading-container">
        <p className="heading-text">{currentState}</p>
        <hr className="separator" />
      </div>
	  	{currentState === 'Login' ? '' : <input type="text" className="input-field-login" placeholder="Name" required />}
		<input type="email" className="input-field-login" placeholder="Email" required />
		<input type="password" className="input-field-login" placeholder="Password" required />
		<div className="login-footer">
  <p>Forgot your password?</p>
  	{
    	currentState === 'Login'
    	? <p onClick={() => setCurrentState('Sign Up')}>Create account</p>
    	: <p onClick={() => setCurrentState('Login')}>Login Here</p>
  	}
		</div>
		<button className="login-btn">{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>

    </form>
  );
}

export default Login;
