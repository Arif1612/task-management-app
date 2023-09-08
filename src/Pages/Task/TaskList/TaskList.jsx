import React from 'react';

const TaskList = ({ tasks, assignTask, updateTaskStatus }) => {
  return (
    <div className="max-w-md mx-auto">
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="border p-4 my-2 rounded">
            <h2 className="text-xl font-semibold">{task.title}</h2>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Priority: {task.priority}</p>
            <p>Assignee: {task.assignee}</p>
            <p>Status: {task.status}</p>
            <div className="mt-2 space-x-2">
              <button
                className="btn btn-primary"
                onClick={() => assignTask(task.id, 'Username')}
              >
                Assign
              </button>
              <button
                className="btn btn-success"
                onClick={() => updateTaskStatus(task.id, 'Completed')}
              >
                Mark as Completed
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
