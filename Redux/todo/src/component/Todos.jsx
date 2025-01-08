import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, todoSlice } from "../features/todo/todoSlice";
export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <div>Todos</div>
      {todos.map((todo) => (
        <li key={todo.id}> {todo.text}
        <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
        </li>

      ))}
    </div>
  );
}
