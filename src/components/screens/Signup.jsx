import React from 'react'
import { Link } from "react-router-dom";
const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "password") {
      setPassword(value);
    }
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      phone,
      password,
    };

    try {
    const response = axios.post(
        "http://localhost:8000/api/register",
        payload
      );

      response
      .then((result) => {

      })
    } catch (error) {
        showToast("Some Error Occured!", "error");
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
                    <label for="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter your email"
                      onChange={handleChange}
                    />
            </div>
            <div className="mb-3">
                    <label for="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="phone"
                      className="form-control"
                      name="phone"
                      placeholder="Enter your phone"
                      onChange={handleChange}
                    />
            </div>
            <div className="mb-3">
                    <label for="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Create a password"
                      onChange={handleChange}
                    />
            </div>
            <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={isButtonDisabled}
                  >
                    Sign Up
                  </button>
        </form>
        
    </div>

  )
}

export default Signup