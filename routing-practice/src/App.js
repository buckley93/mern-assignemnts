import './App.css';
import Home from './components/Home';
import React from 'react';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/:id"/>
        <Home path="home" />
        <Home path="/:id/:fc/:bc" />
      </Router>
    </div>
  );
}

export default App;
