import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all'); // Filter state

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Function to filter tasks based on the filter state
  const getFilteredTasks = () => {
    if (filter === 'completed') {
      return tasks.filter(task => task.completed);
    } else if (filter === 'active') {
      return tasks.filter(task => !task.completed);
    }
    return tasks; // 'all' case
  };

  return (
    <div className="todo-container">
      <h1 className="header">Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      {/* Filter Buttons */}
      <div className="filter-container">
        <button className={`filter-btn ${filter === 'all' ? 'active-filter' : ''}`} onClick={() => setFilter('all')}>All</button>
        <button className={`filter-btn ${filter === 'active' ? 'active-filter' : ''}`} onClick={() => setFilter('active')}>Active</button>
        <button className={`filter-btn ${filter === 'completed' ? 'active-filter' : ''}`} onClick={() => setFilter('completed')}>Completed</button>
      </div>

      <ul className="task-list">
        {getFilteredTasks().map(task => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={() => deleteTask(task.id)}
            toggleComplete={() => toggleComplete(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
