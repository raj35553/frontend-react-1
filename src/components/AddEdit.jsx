import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, {useState} from 'react';
const AddEdit = () => {

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const counter = 1;
  const [item, setItem] = useState("");
  const [Desc, setDesc] = useState("");
  const [array, setArray] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  

  const notify = (isSuccess) => {
    if (isSuccess){
      toast.success("Add successfully");
    }   else {
      toast.error("Duplicate or Empty Input Field");
    }
  };
 


  const handleChange =(e) => {
    e.preventDefault();

    const {value} = e.target;
    let isDisabled = true;
    if (value !== "") {
      isDisabled = false;
    }
   
    // set input value
    setItem(value);
    setIsButtonDisabled(isDisabled);
  }

  const handleChangeDesc =(e) => {
    e.preventDefault();

    const {value} = e.target;
    let isDisabled = true;
    if (value !== "") {
      isDisabled = false;
    }
    // set Desc value
    setDesc(value);
    setIsButtonDisabled(isDisabled);
  }

  
  const addEditItem = () => {
    
    const arrayItem = [...array];
    console.log(arrayItem);
   
   
    if (isEdit) {
      arrayItem[editIndex] = item;
      setIsEdit(false);
    } else if (item && !array.includes(item)) {
      setArray([...array, item]);
      arrayItem.push(item);
      alert('Add successfully');
      notify(true);
     } else if (item.length<=0 || array.includes(item)){
      notify();
    } else {
      
    }

    setArray(arrayItem);
    
    const jsonConverted = JSON.stringify(arrayItem);
    // set data into local storage
    localStorage.setItem("setArray", jsonConverted);


    // const ListArray = JSON.parse(arrayItem);
    // clear input value
    setItem("");
  };



  const deleteNode = (index) => {
    const arrayItem = [...array]; // Shallow Copy (... => spread operator)
    const notifyDelete = () =>  {toast.success("Successfully delete");}
    arrayItem.splice(index, 1);
    setArray(arrayItem);
    notifyDelete(true);
  };




  const editNode = (index) => {
    const arrayItem = array[index];
    console.log("arrayItem", arrayItem);
    setItem(arrayItem);
    setEditIndex(index);
    setIsEdit(true);
  };

  return (
    <div className='container'>
      <h1>ToDo</h1>

      <input type="text" id="item" value={item} onChange={handleChange} className='form-control mb-3'/>
      <textarea type="text" value={Desc} onChange={handleChangeDesc} className='form-control'/>
      <button disabled={isButtonDisabled} onClick={() => addEditItem()} className='btn btn-primary mt-2 mb-2'>
        {isEdit ? "Update" : "Submit"}
      </button>
      <ToastContainer />
    {/* {errormsg && item.length<=0? <label>Duplicate value or Please enter Value</label>: ""} */}
      <table className='table table-bordered'>
        <tr>
        <th>Index No</th>
          <th>Task</th>
          <th colSpan={3}>Options</th>
        
         
        </tr>
        {array.length === 0 && <tr>No Task Found!</tr>}
        {array &&
          array.map((todo, index) => (
            <tr>
               <td>{index}</td>
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