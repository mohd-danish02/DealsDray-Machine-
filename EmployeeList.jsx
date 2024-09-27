import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);
  const getData = () => {
    axios
      .get("https://66f682fd436827ced9776dc8.mockapi.io/dealsDrayProject")
      .then((responce) => {
        setApiData(responce.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(
        `https://66f682fd436827ced9776dc8.mockapi.io/dealsDrayProject/${id}`
      )
      .then(() => {
        getData();
      });
  };

  const setDataToLocalStorag = (
    id,
    name,
    email,
    mobile,
    designation,
    course,
    gender
  ) => {
    //with the help of localstorage.setitem('id',id)  we can store data to local storage;
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("designation", designation);
    localStorage.setItem("course", course);
    localStorage.setItem("gender", gender);
  };
  return (
    <div className="container">
      <div>
        <Link to="/createlist">
          <button className="btn btn-primary m-4">Create New Data</button>
        </Link>
      </div>
      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Desingnation</th>
                <th>Course</th>
                <th>Gender</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((item) => {
                return (
                  <>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.mobile}</td>
                      <td>{item.designation}</td>
                      <td>{item.course}</td>
                      <td>{item.gender}</td>
                      <td>
                        <Link to="/update">
                          <button
                            className="btn btn-primary"
                            onClick={() =>
                              //to update the data we have to store all data in local storage
                              setDataToLocalStorag(
                                item.id,
                                item.name,
                                item.email,
                                item.mobile,
                                item.designation,
                                item.course,
                                item.gender
                              )
                            }
                          >
                            Edit
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            if (
                              window.confirm(
                                "Are you sure ! want to delte the data"
                              )
                            ) {
                              handleDelete(item.id);
                            }
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
