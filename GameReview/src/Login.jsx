import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const accounts = {
    user: {
      username: 'user',
      password: 'user',
      role: 'user',
    },
    admin: {
      username: 'admin',
      password: 'admin',
      role: 'admin',
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    const { username, password } = credentials;

    if (username in accounts) {
      const account = accounts[username];

      if (account.password === password) {
        setError('');
        onLogin(account.role);  
      } else {
        setError('Invalid password');
      }
    } else {
      setError('Invalid username');
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome to Wormmmy's Reviews!</h1>
      <h4>Login to Continue:</h4>

      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={credentials.username}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
        />
      </div>

      <button type="button" onClick={handleLogin}>Login</button>

      {error && <p className="error">{error}</p>}
    </div>
  );
}
