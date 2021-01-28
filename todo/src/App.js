import React from 'react';

import './App.css';
import TodoForm from './components/TodoForm';


function App() {
  return (
    <div>
      <div>
        <h1>To-Do List</h1>
      </div>
      {/* div for my components */}
      <div>
        <TodoForm />
      </div>
    </div>
  );
}

export default App;
