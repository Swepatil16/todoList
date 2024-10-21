import React from 'react';
import './TodoItem.css';

const TodoItem = ({ task, deleteTask, toggleComplete }) => {
  return (
    <li className={`task-item ${task?.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={task?.completed} onChange={toggleComplete} />
      <span>{task.text}</span>
      <button onClick={deleteTask} className="delete-btn">🗑</button>
    </li>
  );
};

export default TodoItem;
