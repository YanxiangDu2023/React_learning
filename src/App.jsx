import { useState, useEffect } from "react";
import NewTodoform from "./newtodoform"; // 注意路径和文件名
import TodoList from "./Todolist"; // 注意路径和文件名
import "./style.css";


export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEM");
    if (!localValue) return [];
    return JSON.parse(localValue);
  });



  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos));
  }, [todos]);



  function addTodos(title) {
    setTodos((current) => [...current, { id: crypto.randomUUID(), title, completed: false }]);
  }



  function toggleComplete(id, completed) {
    setTodos((current) =>
      current.map((todo) => {
        if (todo.id === id) return { ...todo, completed: completed };
        return todo;
      })
    );
  }

  function deleteTodo(id) {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <NewTodoform addTodos={addTodos} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
}
