import React from 'react';
import { TOGGLE_ITEM } from '../reducers/todoReducer';

const Todo = (item, dispatch) => {
    const handleToggle = () => {
      dispatch(
        {
          type: TOGGLE_ITEM,
          payload: item.id
        }
      )
    }
  
  
      const completed = item.completed ? "line-through red" : "none";
  
      return (
          <li>
            <span style={{textDecoration: completed}} onClick={handleToggle}>{item.item}</span>
          </li>
      )
}

export default Todo;