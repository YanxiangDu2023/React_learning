import React from "react";
export default function Todoitem({id,title,completed,toggleComplete,deleteTodo}){
    return(
        <li>
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



    )

}