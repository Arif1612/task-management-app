import React, { useState } from 'react';
import { addTaskToLocalStorage } from  '../localStorage';
import Swal from 'sweetalert2';

const AddATask = ({ addTask }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Low',
    assignee: '', 
    status: 'In Progress',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task); // Call the parent component's addTask function
    addTaskToLocalStorage(task); // Save the task to local storage
    setTask({
      title: '',
      description: '',
      dueDate: '',
      priority: 'Low',
      assignee: '',
      status: 'In Progress',
    });
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Task Added Successfully',
      showConfirmButton: false,
      timer: 1500
    })
  };



  return (
    <div className=" card-body max-w-md mx-auto shadow-2xl ">
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
        {/* title */}
        <label className="label font-bold ">
                  <span className="label-text">Title</span>
        </label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Task Title"
            className="input w-full"
            required
          />
          {/* description */}
          <label className="label font-bold">
                  <span className="label-text">Description</span>
                </label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Task Description"
            className="textarea w-full"
            required
          ></textarea>
          <br />
          {/* due date */}
          <label className="label font-bold">
                  <span className="label-text">Due Date</span>
                </label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            className="input w-full"
            required
          />
          <br />
          {/* Priority level */}
          <label className="label font-bold">
                  <span className="label-text w-full">Priority Level</span>
                </label>
          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
            className="select w-full"
          >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
          </select>
          <br />
          {/* assign tasks */}
          <label className="label font-bold">
                  <span className="label-text w-full">Assigned Tasks</span>
         </label>
          <input
            type="text"
            name="assignee"
            value={task.assignee}
            onChange={handleChange}
            placeholder="Assignee (Username)"
            className="input w-full"
          />
          <br />
          {/* status */}
          <label className="label font-bold">
                  <span className="label-text ">Status</span>
                </label>
          <select
            name="status"
            value={task.status}
            onChange={handleChange}
            className="select w-full "
          >
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddATask;
