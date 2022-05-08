import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AddTask from './components/AddTask.jsx';
import TaskList from './components/TaskList.jsx'

import { List } from '../list.js'

const App = () => {
  //state is an object with a prop content, which is an empty array 
  const [taskObjs, setTasks]  = useState(new List())

  return (
    <section>
      <AddTask tasks = {taskObjs} setObj = {setTasks}/>
      <TaskList tasks = {taskObjs} setObj = {setTasks}/>
    </section>
  )
};

export default App;