import React from 'react'

import React, {useState} from 'react';

const ToDo = () => {

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [item, setItem] = useState("");
  const [array, setArray] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const handleChange =(e) => {

    const {value} = e.target;
    let isDisabled = true;
    if (value !== "") {
      isDisabled = false;
    }
    
    // set input value
    setItem(value);
    setIsButtonDisabled(isDisabled);
  }


  const addEditItem = () => {
    const arrayItem = [...array];
    if (isEdit) {
      setIsEdit(false);
    } else {
      arrayItem.push(item);
    }
    setArray(arrayItem);

    // clear inpput value
    setItem("");
  };

  const deleteNode = (index) => {

  };


  const editNode = (index) => {

  };
  return (
    <div className='container'>
      <h1>ToDo</h1>
      <input type="text" id="item" onChange={handleChange}></input>
      <button disabled={isButtonDisabled} onClick={addEditItem}>Submit</button>

      <table>
        <tr>
          <th>S.no</th>
          <th colSpan={2}>Options</th>
        
         
        </tr>
        {array.length === 0 && <tr>No Task Found!</tr>}
        {array &&
          array.map((todo, index) => (
            <tr>
              
              <td>{todo}</td>
              <td>
                <button>Delete</button>
              </td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
          ))}
      </table>

    </div>
  )
}

export default ToDo