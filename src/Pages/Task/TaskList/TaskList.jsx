import React, { useEffect, useState } from "react";
import { getTasksFromLocalStorage } from "../localStorage";

const TaskList = ({}) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Retrieve tasks from local storage when the Task loads
    const storedTasks = getTasksFromLocalStorage();
    setTasks(storedTasks);
  }, []);

  
  // Define the updateTaskStatus function to update the status of a task
  const updateTaskStatus = (taskId, newStatus) => {
    // Find the task with the given taskId and update its status
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );

    // Update the state with the new tasks list
    setTasks(updatedTasks);

    // Update the local storage with the new tasks list
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="max-w-md mx-auto">
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id} className="border p-4 my-2 rounded">
              <h2 className="text-xl font-semibold">{task.title}</h2>
              <p>{task.description}</p>
              <p>Due Date: {task.dueDate}</p>
              <p>Priority: {task.priority}</p>
              <p>Assignee: {task.assignee}</p>
              <p>Status: {task.status}</p>
              <div className="mt-2 space-x-2">
                {/* <button
                  className="btn btn-primary"
                  onClick={() => assignTask(task.id, "Username")}
                >
                  Assign
                </button> */}
                <button
                  className="btn btn-success"
                  onClick={() => updateTaskStatus(task.id, "Completed")}
                >
                  Mark as Completed
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No tasks available.</p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
