import React, { useState } from "react";

import Loginpage from "./components/Loginpage";
import Dashboard from "./components/Dashboard";
import CreateEmp from "./components/CreateEmp";
import EmployeeList from "./components/EmployeeList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./components/Update";

const App = () => {
  const [inputName, setInputName] = useState("");
  const [inputPass, setInputPass] = useState("");

  const handleInputName = (value1) => {
    setInputName(value1);
  };
  const handleInputPass = (value2) => {
    setInputPass(value2);
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Loginpage
                handleName={handleInputName}
                handlePass={handleInputPass}
              />
            }
          />
          <Route
            exact
            path="/dashboard"
            element={<Dashboard value1={inputName} value2={inputPass} />}
          />
          <Route
            exact
            path="/createlist"
            element={<CreateEmp value1={inputName} />}
          />
          <Route exact path="/empList" element={<EmployeeList />} />
          <Route exact path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
