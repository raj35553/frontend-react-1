import React from "react";


  function ToDolist() {
   

  return (
<div class="container">
    <input id="inputText" type="text"/>
    <button onclick="add()" type="submit">Submit</button>
    <ul class="text todolist">
    </ul>
</div>


  )

  }


  export default ToDolist;