import React from "react";

const Todo = ({ id, description, completed, toggle}) => {
  console.log("well done");
  return(
    <div className={"toggle-item" + (completed ? 'item-completed' : '')} onClick={() => toggle(id)}>
    {description}
    </div>
  )
}
export default Todo;