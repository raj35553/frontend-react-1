//UseState ka use

import React, {useState} from 'react';

const Stream = () => {

  const [Counter, setCounter] = useState(0);
 const handleClick = () => setCounter(Counter+1);

  return (
    <div className='container'>
       <h1>Stream</h1>
       <button className="btn btn-primary" style={{marginTop: '50px'}} onClick={handleClick}>Click Here</button>
       <p>{Counter}</p>
    </div>
  )
}

export default Stream;