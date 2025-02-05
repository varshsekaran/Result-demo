import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; 
import "./Login.css"

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState("faculty");
    const navigate = useNavigate();

    const handleLogin = () => {
      if (username && password) {
        if (role === "faculty") {
          navigate("/faculty");
        } else {
          navigate("/student");
        }
      } else {
        alert("Please enter both username and password.");
      }
    };
  
  
    return (
        /*<div className="container">
        <h1>Result Analysis</h1>
        <div className="form-container">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="Enter username" value={username}
          onChange={(e) => setUsername(e.target.value)}/>
          */
          <div className="container">
      <h1>RESULT  ANALYSIS</h1>
      <div className="form-container">
        <label htmlFor="role"></label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="faculty">Faculty</option>
          <option value="student">Student</option>
        </select>

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter password" value={password}
          onChange={(e) => setPassword(e.target.value)}/>
          
          <div className="buttons">
            <button className="login-btn"  onClick={handleLogin}>LOG IN</button>
          </div>
        </div>
      </div>
    );
  };
export default Login
