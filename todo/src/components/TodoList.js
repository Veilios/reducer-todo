import React from 'react';
import Todo from './Todo';

const TodoList = ({state, dispatch}) => {

    return (
        <div>
            {state.map(item => (
                <Todo item={item} key={item.id} dispatch={dispatch} />
            ))}
        </div>
    )

}
  
  export default TodoList;