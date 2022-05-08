import React from 'react';

const Task = (props) =>{
  
  return (
    <div className = 'tasks'>

       <button className = "mark-done" onClick={props.markDone}>Done</button>
      <div>
        <p>{props.item}</p>
        <button className ='delete-button' onClick={props.delete}>X</button>
      </div>
    </div>
  )
}

export default Task;



