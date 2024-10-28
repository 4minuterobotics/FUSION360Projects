/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:5000/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ username, password }),
			});
			const data = await response.json();

			if (data.success) {
				setIsAuthenticated(true);
				navigate('/admin');
			} else {
				alert('Invalid credentials');
			}
		} catch (error) {
			console.error('Error logging in:', error);
		}
	};

	return (
		<form onSubmit={handleLogin} className='my-5' style={{ height: '30vh', textAlign: 'center' }}>
			<h2>Login</h2>
			<label>
				Username:
				<input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required />
			</label>
			<br />
			<label>
				Password:
				<input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
			</label>
			<br />
			<button type='submit'>Login</button>
		</form>
	);
};

export default Login;
