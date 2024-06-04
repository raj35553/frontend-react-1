import React, { useEffect, useState } from 'react';
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { addPostAPI } from "../Api";
const AddBlog = () => {

  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [isButtonDisabled, setisButtonDisabled] = useState(true);



  useEffect (() => {
   if(title !== "" && Description !== ""){
     setisButtonDisabled(false);
   }
  },[title, Description]);

   // handle or set state on change input value
   const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setTitle(value);
    } else if (name === "Description") {
      setDescription(value);
    }
  };


    // add blog function
    const addBlog = async () => {
      try {
        // Payload or request params to add new blog
        const payload = {
          title,
          Description,
        };
  
        // Api call to add new blog
        const response = await axios.post(addPostAPI, payload);
  
        console.log(">>> add blog response", response);
      } catch (error) {
        console.log("Error while adding blog", error);
      }
    };

  return (
    <>
    <div className='container'>
      <div className='col-md-5'>
              <form>
                <h1>Blog</h1>
                <div class="mb-3">
                    <input type="text" className='form-control' name="title" onChange={handleChange}  />              
                </div>
                <div class="mb-3">
                    <textarea type="text" className='form-control' name="Description" onChange={handleChange} />              
                </div>
                <Button onClick={addBlog} disabled={isButtonDisabled} className="btn btn-primary btn-sm">
                Submit
              </Button>
                </form>        
      </div>
    </div>
    </>
  )
}

export default AddBlog