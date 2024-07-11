import React, { useState } from "react";
import axios from "axios";
const Signup = () => {

  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [age, setAge] = useState(null);
 

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "description") {
      setDesc(value);
    } else if (name === "age") {
      setAge(value);
    } 
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      description,
      age,
     
    };

    try {
    const response = axios.post(
        "http://localhost:8000/api/register",
        payload
      );

      response
      .then((result) => {
        const { message } = result.data;
        console.log("register successfully");
        setSuccessMessage(message);
        clearForm();
      })
    } catch (error) {
        // showToast("Some Error Occured!", "error");
        console.log(error);
      }
    };

    const clearForm = () => {
        setName("");
      };


  return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label for="name" className="form-label">
                Name
            </label>
            <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter your full name"
                onChange={handleChange}
                value={name}
            />
            </div>


            <div className="mb-3">
                    <label for="desc" className="form-label">
                      Description
                    </label>
                    <input
                      type="description"
                      className="form-control"
                      name="description"
                      placeholder="Enter your Desc"
                      onChange={handleChange}
                    />
            </div>
            <div className="mb-3">
                    <label for="phone" className="form-label">
                      Age
                    </label>
                    <input
                      type="age"
                      className="form-control"
                      name="age"
                      placeholder="Enter your age"
                      onChange={handleChange}
                    />
            </div>
            
            <button
                    type="submit"
                    className="btn btn-primary w-100"
                  >
                    Sign Up
                  </button>
        </form>
        
    </div>

  )
}

export default Signup