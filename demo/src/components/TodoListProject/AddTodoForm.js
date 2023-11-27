// src/components/AddTodoForm.js
import React, { useState } from 'react';
import '../../styles/AddTodoForm.css';


const AddTodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
