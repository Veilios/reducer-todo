import React, { useReducer } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';

import { todoReducer, initialStates } from './reducers/todoReducer';


const App = () => {

  const [state, dispatch] = useReducer(todoReducer, initialStates);

    return (
      <div className="App">
        <h1>To-Do List</h1>
        <TodoForm dispatch={dispatch}/>
      </div>
    );
  
}

export default App;
