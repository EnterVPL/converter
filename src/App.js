import React from 'react';
import logo from './logo.svg';
import './App.css';

const day = (new Date).toTimeString();

function Button() {
	return (
		<button>Click me!!!!!</button>
	);
}

function App() {
  return (
    <div className="App">
		<p>Hello</p>
		<p>{day}</p>
		<Button />
		<Button />
    </div>
  );
}

export default App;
