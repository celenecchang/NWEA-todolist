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
    <div id = "addTasks">
      <div id = "title">To Do List</div>
        <input  id = "inputBox"
        type = "text"
        />
        <button id = "addButton" onClick={()=>todo('addItem', document.querySelector('#inputBox').value)}>ADD TASK</button>
        <div>
            <button className = "miscButtons" onClick={() => todo('clearList')}>Clear List</button>
            <button className = "miscButtons" onClick={() => todo('sortAsc')}>Sort By Ascending Order</button>
            <button className = "miscButtons" onClick={() => todo('sortDesc')}>Sort By Descending Order</button>
            <button className = "miscButtons" onClick={() => todo('sortNotDone')}>Tasks to be Completed</button>
        </div>
    </div>
  )
}

export default AddTask;