import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, {useState} from 'react';
const AddEdit = () => {

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [item, setItem] = useState();
  const [array, setArray] = useState([]);   //setArray means perform change 
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);


  let retString=localStorage.getItem("Y");
  let resultArra="";


  if(retString!= undefined || retString != null)
    {

      let restArray= JSON.parse(retString);
      resultArra=Object.values(restArray);

    }

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


  
  const addEditItem = () => {
    
    const arrayItem = [...resultArra];
    console.log(arrayItem);
   
   
    if (isEdit) {
      arrayItem[editIndex] = item;
      setIsEdit(false);
    } else if (item && !array.includes(item)) {
      arrayItem.push(item);
      alert('Add successfully');
      notify(true);
     } else if (item.length<=0 || array.includes(item)){
      notify();
    } else {
      
    }

    setArray(arrayItem);
  
    // set data into local storage
    localStorage.setItem("Y", JSON.stringify(arrayItem));
    // clear input value
    setItem("");
  };



  const deleteNode = (index) => {
    const arrayItem = [...resultArra]; // Shallow Copy (... => spread operator)
    arrayItem.splice(index, 1);
    setArray(arrayItem);
    localStorage.setItem("Y", JSON.stringify(arrayItem));
    const notifyDelete = () =>  {toast.success("Successfully delete");}
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

      <input type="text"  value={item} onChange={handleChange} className='form-control mb-3'/>
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
        {resultArra.length === 0 && <tr>No Task Found!</tr>}
        {resultArra &&
          resultArra.map((todo, index) => (
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