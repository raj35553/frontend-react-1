import React, { useRef } from "react";
import axios from  "axios";

const Contact = () => {

    // create refs for the elements
    const formRef = useRef(null);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);


    const handleSubmit = async (event) => {
      event.preventDefault();

      const Name = nameRef.current.value;
      const Email = emailRef.current.value;
      const Message = messageRef.current.value;

      if (Name === null || Name === ""){
          nameRef?.current?.focus();
      } else if (Email === null || Email === ""){
        emailRef?.current?.focus();
      } else if (Message === null || Message === ""){
        messageRef?.current?.focus();
      }

      const payload ={
        Name,
        Email,
        Message,
      };


      const Responseraj = await axios.post("http://localhost:3000/blogs", payload);

      //clear form
      clearForm();
    };
        const clearForm = () => {
        formRef.current.reset();
        //focus
        nameRef?.current?.focus();
      };


    
  return (
    <div className='container'>
        <div className=''>
            <form onSubmit={handleSubmit} ref='formRef'>
                <div className='mb-2'>
                       <div>
                        <label for="name" className="form-label">Name</label>
                        <input type='text' name='Name' placeholder='text' ref='nameRef' className='form-control'/>
                       </div>
                </div>
                <div className='mb-2'>
                       <div>
                        <label for="Email" className="form-label">Email</label>
                        <input type='Email' name='Email' placeholder='Email enter' ref='emailRef' className='form-control'/>
                       </div>
                </div>
                <div className='mb-2'>
                       <div>
                        <label for="Message" className="form-label">Message</label>
                        <textarea type='Message' name='Message' placeholder='Message' ref='messageRef' className='form-control'/>
                       </div>
                </div>
            </form>

        </div>
    </div>
  )
}

export default Contact