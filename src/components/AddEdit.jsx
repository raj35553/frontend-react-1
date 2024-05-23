import React from 'react'

import React, {useState} from 'react';
const AddEdit = () => {

  const [errormsg, setErrormsg] = useState(false);  //for error msg
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [item, setItem] = useState("");
  const [array, setArray] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

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
      arrayItem[editIndex] = item;
      setIsEdit(false);
    } else if (item && !array.includes(item)) {
      setArray([...array, item]);
      arrayItem.push(item);
      alert('Add successfully');
    } else {
      setErrormsg(true);
    }

    setArray(arrayItem);
    // clear input value
    setItem("");
  };



  const deleteNode = (index) => {
    const arrayItem = [...array]; // Shallow Copy (... => spread operator)
    arrayItem.splice(index, 1);
    setArray(arrayItem);
  };




  const editNode = (index) => {
    const arrayItem = array[index];
    console.log(">>>>>>>> arrayItem", arrayItem);
    
    
    setItem(arrayItem);
    setEditIndex(index);
    setIsEdit(true);
  };
  return (
    <div className='container'>
      <h1>ToDo</h1>
      
      <input type="text" id="item" value={item} onChange={handleChange} className='form-control'/>
      <button disabled={isButtonDisabled} onClick={() => addEditItem()} className='btn btn-primary mt-2 mb-2'>
        {isEdit ? "Update" : "Submit"}
      </button>
      {errormsg ? <div>Duplicate value or empty value</div> : <></>}
      <table className='table table-bordered'>
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
                <button type="button" onClick={() => deleteNode(index)} className='btn btn-danger  m-2'>Delete</button>
              </td>
              <td>
                <button type="button" onClick={() => editNode(index)} className='btn btn-success  m-2'>Edit</button>
              </td>
            </tr>
          ))}
      </table>

    </div>
  )
}

export default AddEdit