import React from 'react';
import Task from './Task.jsx'
import {List} from '../../list.js';

const TaskList = (props) =>{

  //converting each element in the list arr into a compoent
  const todo = props.tasks.content.map((item, index) => <Task
  item = {item.task} 
  complete = {item.done} 
  setObj = {props.setObj}
  markDone = {() => {
    props.tasks.markDone(index);
    console.log(props.tasks);
    props.setObj(Object.assign(Object.create(List.prototype), props.tasks));
  }}
  delete = {() => {
    props.tasks.removeItem(index);
    props.setObj(Object.assign(Object.create(List.prototype), props.tasks));
  }}
  />)
  return (
  <div id = 'taskContainer'>
    {
      todo
    }
  </div>
  )
}

export default TaskList;
