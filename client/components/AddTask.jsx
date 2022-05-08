import React from 'react';
import { List } from '../../list.js';

const AddTask = (props) =>{
  /*props = {
    tasks: taskObjs
    setObj: setTasks
  }*/
  //function to manipulate state (tasObjs) and invoke setArr to render the new state

  function todo (cb, arg){
    props.tasks[cb](arg);
    props.setObj(Object.assign(Object.create(List.prototype), props.tasks));
  }

  return(
    <div id= "task-box">
      <h1>TO DO LIST</h1>
        <input type = 'text'
          id = "input-box"
        />
        <button className = "t-buttons" onClick={()=>todo('addItem', document.querySelector('#input-box').value)}>ADD TASK</button>
        <div>
            <button className = "t-buttons" onClick={() => todo('clearList')}>Clear List</button>
            <button className = "t-buttons" onClick={() => todo('sortAsc')}>Sort By Ascending Order</button>
            <button className = "t-buttons" onClick={() => todo('sortDesc')}>Sort By Descending Order</button>
            <button className = "t-buttons" onClick={() => todo('sortNotDone')}>Tasks to be Completed</button>
        </div>
    </div>
  )
}

export default AddTask;