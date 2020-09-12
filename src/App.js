import React from 'react';
import './App.css';

import {
	BrowserRouter as Router, Switch, Link, Route
} from 'react-router-dom'

import Calculator from './pages/Calculator';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <div className="App">
		<Router>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/contact">Contact</Link></li>
			</ul>
			<Switch>
				<Route path="/" exact>
					<Calculator />
				</Route>
				<Route path="/about">
					<Contact />
				</Route>
				<Route path="/contact">
					<About />
				</Route>
			</Switch>
		</Router>
    </div>
  );
}

export default App;
