import React, { useState, useEffect } from 'react';
import AddATask from '../AddATask/AddATask';
import TaskList from '../TaskList/TaskList';
import { getTasksFromLocalStorage, addTaskToLocalStorage } from '../localStorage'; // Import the local storage functions

const Task = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Retrieve tasks from local storage when the Task loads
    const storedTasks = getTasksFromLocalStorage();
    setTasks(storedTasks);
  }, []);

  // Define the addTask function to add a new task to the state and local storage
  const addTask = (newTask) => {
    // Add the new task to the state
    setTasks([...tasks, newTask]);

    // Save the updated tasks to local storage
    // const updatedTasks = [...tasks, newTask];
    // localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // ... (Other code remains the same)

  return (
    <div className="min-h-screen p-4">

      <AddATask addTask={addTask} />
      {/* <TaskList tasks={tasks} /> */}
    </div>
  );
};

export default Task;
