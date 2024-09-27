import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Loginpage = ({ handleName, handlePass }) => {
  const navigate = useNavigate();

  const gotoDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="wrapper">
        <h1>Login form</h1>
        <div className="user-form">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <label> Username:</label>
              <input
                name="username"
                type="text"
                onChange={(e) => handleName(e.target.value)}
                placeholder="Enter your name..."
              />
            </div>
            <div className="user-details">
              <label>Password:</label>
              <input
                type="password"
                onChange={(e) => handlePass(e.target.value)}
                placeholder="password"
                name="password"
              />
            </div>
            <button type="submit" className="login-btn" onClick={gotoDashboard}>
              Login{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
