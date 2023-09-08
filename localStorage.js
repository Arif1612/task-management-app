
// Retrieve tasks from local storage
export const getTasksFromLocalStorage = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return tasks;
  };
  
  // Add a new task to local storage
  export const addTaskToLocalStorage = (newTask) => {
    const tasks = getTasksFromLocalStorage();
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  