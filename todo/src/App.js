import React, { useReducer } from "react";
import { initalItems, todoReducer } from "./reducers/todoReducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initalItems);
  const toggle = id => dispatch({ type: "TOGGLE_TODO", payload: id });
  const addTodo = item => dispatch({ type: "ADD_ITEM", payload: item });
  const clearCompleted = () => dispatch({ type: "CLEAR_COMPLETED" });

  return (
    <div>
      <div className="header">
        <img className="logo" alt="Logo" src="https://cdn.pixabay.com/photo/2017/05/15/23/48/survey-2316468_1280.png" />
        <h1>To-Do List</h1>
      </div>
      <div className="todo-body">
        <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
        <TodoList items={state.items} toggle={toggle} />
      </div>
    </div>
  );
}

export default App;