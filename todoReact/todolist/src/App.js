import logo from './logo.svg';
import './App.css';
import React from 'react';
import ToDoList from './todolist';
import {todos} from './store';

function App() {
  return (
    <div className="App">
     <h1>TODO list</h1>
     <ToDoList ToDo={todos}/>
    </div>
  );
}

export default App;
