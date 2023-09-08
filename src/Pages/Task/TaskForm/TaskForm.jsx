import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Low',
    assignee: '', // Add this field for assignment
    status: 'In Progress', // Add this field for status
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({
      title: '',
      description: '',
      dueDate: '',
      priority: 'Low',
      assignee: '',
      status: 'In Progress',
    });
  };

  return (
    <div className=" card-body max-w-md mx-auto shadow-2xl">
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
            className="input"
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
            className="textarea"
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
            className="input"
            required
          />
          <br />
          {/* Priority level */}
          <label className="label font-bold">
                  <span className="label-text">Priority Level</span>
                </label>
          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
            className="select"
          >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
          </select>
          <br />
          {/* assign tasks */}
          <label className="label font-bold">
                  <span className="label-text">Assigned Tasks</span>
         </label>
          <input
            type="text"
            name="assignee"
            value={task.assignee}
            onChange={handleChange}
            placeholder="Assignee (Username)"
            className="input"
          />
          <br />
          {/* status */}
          <label className="label font-bold">
                  <span className="label-text">Status</span>
                </label>
          <select
            name="status"
            value={task.status}
            onChange={handleChange}
            className="select"
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

export default TaskForm;
