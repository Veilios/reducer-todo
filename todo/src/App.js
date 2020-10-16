import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';


const App = () => {

    return (
      <div className="App">
        <h1>To-Do List</h1>
        <TodoForm />
      </div>
    );
  
}

export default App;
