//UseState ka use

import React, { useState, createContext } from 'react';
import  ChildC  from "../context/ChildC";
const DataContext = createContext();
const Stream = () => {
  const AutherName = "RAJ KUMAR";
  const [Counter, setCounter] = useState(0);
  const handleClick = () => setCounter(Counter + 1);
  return (
    <div className='container'>
      <h1>Stream</h1>
      <button className="btn btn-primary" style={{ marginTop: '50px' }} onClick={handleClick}>Click Here</button>
      <p>{Counter}</p>
      <DataContext.Provider value={AutherName}>
        <ChildC />
      </DataContext.Provider>

    </div>
  )
}

export default Stream;
export { DataContext };