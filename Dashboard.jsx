import React from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";

const Dashboard = ({ value1, value2 }) => {
  const navigate = useNavigate();

  const goToEmployeeList = () => {
    navigate("/createlist");
  };
  return (
    <div className="dash-board">
      <div className="dash-nav">
        <ul>
          <li> Home</li>
          <li>EmployeeList</li>
          <li>{value1}</li>
          <li>Logout</li>
        </ul>
      </div>
      <div className="dash-admin">
        <h1>Welcome to DealsDray</h1>
        <div className="user-details">
          <h2>Username : {value1} </h2>
          <h2>Password : {value2} </h2>
        </div>
        <button className="create-emp-btn" onClick={goToEmployeeList}>
          Create Employee
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
