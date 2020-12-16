import React from "react";
import {useState} from "react";


const TodoForm = ({ addTodo, clearCompleted }) => {
    const [item, setItem] = useState("");
    const submitHandler = e => {
      e.preventDefault();
      addTodo(item);
      setItem("");
    };
  
    const clearHandler = e => {
      e.preventDefault();
      clearCompleted();
    };
  
    return (
      <form className="form" onSubmit={submitHandler}>
        <input
          type="text"
          name="item"
          placeholder="Add Task"
          onChange={e => setItem(e.target.value)}
          value={item}
        />
        <div>
          <button type="submit">
            Add
          </button>
          <button onClick={clearHandler}>
            Clear
          </button>
        </div>
      </form>
    );
  };
  

export default TodoForm;