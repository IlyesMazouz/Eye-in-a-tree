import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import '../styles/Login.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {

  	const [currentState, setCurrentState] = useState('Sign Up');

	const {token,setToken,navigate,backendUrl} = useContext(ShopContext)

	const [name, setName] = useState('')
	const [signUpEmail, setSignUpEmail] = useState('')
	const [signUpPassword, setSignUpPassword] = useState('')
	const [loginEmail, setLoginEmail] = useState('')
	const [loginPassword, setLoginPassword] = useState('')

	const onSubmitHandler = async (event) => {
		event.preventDefault();
		try {
			if (currentState === 'Sign Up') {
				const response = await axios.post(backendUrl + '/api/user/register', {
					name,
					email: signUpEmail,
					password: signUpPassword
				})
				if (response.data.success) {
					toast.success('Account created successfully!')

					setName('')
					setSignUpEmail('')
					setSignUpPassword('')

					setCurrentState('Login')
				} else {
					toast.error(response.data.message)
				}
			} else {
				const response = await axios.post(backendUrl + '/api/user/login', {
					email: loginEmail,
					password: loginPassword
				})
				if (response.data.success) {
					setToken(response.data.token)
					localStorage.setItem('token', response.data.token)
				} else {
					toast.error(response.data.message)
				}
			}
		} catch (error) {
			console.log(error)
			toast.error(error.message)
		}
	}

	useEffect(()=> {
		if (token) {
			navigate('/')
		}
	}, [token])

  return (
    <form onSubmit={onSubmitHandler} className="login-form">
      <div className="heading-container">
        <p className="heading-text">{currentState}</p>
        <hr className="separator" />
      </div>

	  {currentState === 'Sign Up' && (
		<>
			<input onChange={(e) => setName(e.target.value)} value={name} type="text" className="input-field-login" placeholder="Name" required />
			<input onChange={(e) => setSignUpEmail(e.target.value)} value={signUpEmail} type="email" className="input-field-login" placeholder="Email" required />
			<input onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} type="password" className="input-field-login" placeholder="Password" required />
		</>
	  )}

	  {currentState === 'Login' && (
		<>
			<input onChange={(e) => setLoginEmail(e.target.value)} value={loginEmail} type="email" className="input-field-login" placeholder="Email" required />
			<input onChange={(e) => setLoginPassword(e.target.value)} value={loginPassword} type="password" className="input-field-login" placeholder="Password" required />
		</>
	  )}

		<div className="login-footer">
  			<p>Forgot your password?</p>
  			{currentState === 'Login'
    			? <p onClick={() => setCurrentState('Sign Up')}>Create account</p>
    			: <p onClick={() => setCurrentState('Login')}>Login Here</p>
  			}
		</div>
		<button className="login-btn">{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>

    </form>
  );
}

export default Login;
