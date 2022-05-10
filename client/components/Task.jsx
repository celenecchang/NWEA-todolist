import React from 'react';

const Task = (props) =>{
  
  return (
    <div className = "tasks">
        <button id = "markDone" onClick={props.markDone}>Done</button>
        <p className = {props.complete? "done":null}>{props.item}</p>
        <button id ="deleteButton" onClick={props.delete}>X</button>
    </div>
  )
}

export default Task;



