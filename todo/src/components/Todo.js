import React from "react";

const Todo = ({ id, description, completed, toggle}) => {

    const completedTask = completed ? "line-through" : "none";
    const completedColor = completed ? "red" : "cyan";

  return(
    <div className="tasks" style={{textDecoration: completedTask, backgroundColor: completedColor}} onClick={() => toggle(id)}>
        {description}
    </div>
  )
}
export default Todo;