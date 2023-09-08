import React, { useState, useEffect } from 'react';
import AddATask from '../AddATask/AddATask';
import TaskList from '../TaskList/TaskList';
import { getTasksFromLocalStorage, addTaskToLocalStorage } from '../localStorage';

const Task = () => {

  const [tasks, setTasks] = useState([]);
  // Define the addTask function to add a new task to the state and local storage
  const addTask = (newTask) => {
    // Add the new task to the state
    setTasks([...tasks, newTask]);

  };

 
  return (
    <div className="min-h-screen p-4">
      <AddATask addTask={addTask} />
   
    </div>
  );
};

export default Task;
