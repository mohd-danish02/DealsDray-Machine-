import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
const CreateEmp = ({ value1 }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [designation, setDesignation] = useState("");
  const [course, setCourse] = useState("");
  const [gender, setGender] = useState("");
  // step 1 for errror handling
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    course: "",
    gender: "",
  });
  // step 2 for errror handling
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setName(formData.name);
    setEmail(formData.email);
    setMobile(formData.mobile);
    setDesignation(formData.designation);
    setCourse(formData.course);
    setGender(formData.gender);
    setFormData({ ...formData, [name]: value });
    // api k liy data store kra hai
  };
  // step 3 for errror handling
  const handleSubmit = (e) => {
    e.preventDefault();

    // this is for api
    axios.post("https://66f682fd436827ced9776dc8.mockapi.io/dealsDrayProject", {
      name: name,
      email: email,
      mobile: mobile,
      designation: designation,
      course: course,
      gender: gender,
    });

    // step 4 for errror handling
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "username is required*";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "email is required *";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "email is not valid*";
    }
    if (!formData.mobile.trim()) {
      validationErrors.mobile = "mobile is required *";
    } else if (formData.mobile.length < 10) {
      validationErrors.mobile = "number should be at least 10 digit";
    }
    if (!formData.designation) {
      validationErrors.designation = "choose atleast one designnation";
    }

    // step 1 for errror handling
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length == 0) {
      navigate("/empList");
    }
  };
  return (
    <div>
      <div className="dash-nav">
        <ul>
          <li> Home</li>
          <li>EmployeeList</li>
          <li>{value1}</li>
          <li>Logout</li>
        </ul>
      </div>
      <div className="dash-admin">
        <form onSubmit={handleSubmit}>
          <div className="form-data">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              onChange={handleChange}
            />
            {errors.name && <span>{errors.name}</span>}
          </div>
          <div className="form-data">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div className="form-data">
            <label>Mobile </label>
            <input
              type="number"
              name="mobile"
              placeholder="+91 987654321"
              onChange={handleChange}
            />
            {errors.mobile && <span>{errors.mobile}</span>}
          </div>
          <div className="form-data">
            <label>Designation</label>
            <select
              name="designation"
              className="profile-option"
              onChange={handleChange}
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
              name="course"
              onChange={handleChange}
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
              className="profile-option"
              onChange={handleChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <button className="login-btn" type="submit">
              SUBMIT
            </button>

            <Link to="/empList">
              <button className="btn btn-primary m-4 py-2 px-2">
                Read Data
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEmp;
