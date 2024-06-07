"use client"
import { useState } from 'react';
import axios from 'axios';
import "./style.css";

const MyForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:4500/api/login', { username, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
      setMessage(`Login successful! Token: ${token}`);
    } catch (error: any) {
      setMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  const handleLoggedInRequest = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('No token found. Please log in first.');
      return;
    }

    try {
      const response = await axios.get('http://localhost:4500/api/some-protected-route', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setMessage(`Protected request successful! Data: ${JSON.stringify(response.data)}`);
    } catch (error: any) {
      setMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className='form-container'>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /> <br /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /> <br /><br />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
      <button onClick={handleLoggedInRequest}>Make Authenticated Request</button>
    </div>
  );
};

export default MyForm;
