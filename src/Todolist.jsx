import React from 'react';

export default function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && <div>No todos</div>}
      {todos.map((todo) => (
        <li key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => toggleComplete(todo.id, e.target.checked)}
            />
            {todo.title}
          </label>
          <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
