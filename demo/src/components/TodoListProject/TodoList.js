// src/components/TodoList.js
import React, { useState } from 'react';
import TodoItem from "./TodoItem"
import AddTodoForm from './AddTodoForm';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: uuidv4(), text: newTodo, completed: false }]);
  };

  const markCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            markCompleted={markCompleted}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
};

export default TodoList;