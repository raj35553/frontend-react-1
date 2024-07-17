import React, { useState} from "react";
import axios from "axios";
const Signup = () => {

  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [age, setAge] = useState("");
 

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



  const handleSubmit =  (e) => {
    e.preventDefault();

    const payload = {
      name,
      description,
      age,
     
    };

  axios.post('http://localhost:8000/register', payload)
  .then(res => console.log("Registered Successfully!!"))
  .catch(err => console.log(err));
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
                      value={description}
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
                      value={age}
                    />
            </div>
            
            <button
                    type="submit"
                    className="btn btn-primary w-100"
                  >
                    Sign Up
                  </button>
                  <p>Name: {name}</p>
        <p>Description: {description}</p>
        <p>Age: {age}</p>
        </form>
        
    </div>

  )
}

export default Signup