import React, { useState, useCallback } from 'react'
import ChildA from "./ChildA";
//useCallback and why we use it?
// How to useCallback with example?

const MemoCheck = () => {
const [addValue, setAddValue] = useState(0);
// ye example h useCallback ka function recreate ko rokne k liye when click on "addition btn"
const LearningCallback = useCallback( () => {

},[])  //empty array[] means only one time hi chale. (output one time)
return (
    <div className='container'>
        <div className='col-6'>
            <h1>memo example ----</h1>
            <h2>{addValue}</h2>
            <ChildA Learning={LearningCallback}/>
            <button onClick={ () => setAddValue(addValue + 1)}>Addition</button>
        </div>
    </div>
  )
}

export default MemoCheck;