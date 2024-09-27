import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [designation, setDesignation] = useState("");
  const [course, setCourse] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setMobile(localStorage.getItem("mobile"));
    setDesignation(localStorage.getItem("designation"));
    setCourse(localStorage.getItem("course"));
    setGender(localStorage.getItem("gender"));
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://66f682fd436827ced9776dc8.mockapi.io/dealsDrayProject/${id}`,
        {
          name: name,
          email: email,
          mobile: mobile,
          designation: designation,
          course: course,
          gender: gender,
        }
      )
      .then(() => {
        navigate("/empList");
      });
  };
  return (
    <div>
      <div className="dash-nav">
        <ul>
          <li> Home</li>
          <li>EmployeeList</li>
          <li>UserName</li>
          <li>Logout</li>
        </ul>
      </div>
      <div className="dash-admin">
        <form onSubmit={handleUpdate}>
          <div className="form-data">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-data">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-data">
            <label>Mobile </label>
            <input
              type="number"
              name="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="form-data">
            <label>Designation</label>
            <select
              name="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="profile-option"
            >
              <option value="hr">Hr</option>
              <option value="manager">Manager</option>
              <option value="sales">Sales</option>
            </select>
          </div>
          <div className="form-data">
            <label>Course</label>
            <select
              className="profile-option"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              name="course"
            >
              <option value="Mca">Mca</option>
              <option value="Bca">Bca</option>
              <option value="Bsc">Bsc</option>
            </select>
          </div>
          <div className="form-data">
            <label>Gender</label>
            <select
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="profile-option"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button className="login-btn" value="update" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
