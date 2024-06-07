import React, { useState, useRef } from "react";



const UseRefExample = () => {
    const [myData, setMyData] = useState ("");
   const inputElement = useRef("");

    const ChangeStyle = () => {
          inputElement.current.style.backgroundColor = "#00ab41";
          inputElement.current.focus();
          console.log (">>>>>>>text", inputElement.current);

    };



  return (
    <div className="container">
        <h2>Example of useRef ----1. with color change input field, 2. onfocus when click on btn</h2>
        <input 
            type="text" 
            ref={inputElement} 
            value={myData} 
            className="form-control" 
            onChange={(e) => setMyData(e.target.value)}
        />
        <button onClick={ChangeStyle} className="btn btn-primary mt-2">Button</button>
    </div>
  )
}

export default UseRefExample;