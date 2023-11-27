// src/components/TodoItem.js
import React from 'react';
import '../../styles/TodoItem.css';

const TodoItem = ({ todo, markCompleted, deleteTodo }) => {
  const { id, text, completed } = todo;

  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      <span onClick={() => markCompleted(id)}>{text}</span>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
