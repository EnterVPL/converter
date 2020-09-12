import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import { Calculator } from './components/Calulator';

const day = (new Date).toTimeString();

function App() {
  return (
    <div className="App">
		<p>Hello</p>
		<p>{day}</p>
		<Calculator />
    </div>
  );
}

export default App;
