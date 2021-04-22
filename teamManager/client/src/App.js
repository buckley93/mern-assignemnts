import React from 'react';
import Main from './views/Main';
import './App.css';
import { Router } from '@reach/router';
import Detail from './views/Detail';
import AthleteForm from './components/AthleteForm'

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Detail path="/athletes/:id" />
        <AthleteForm path="/new"/>
      </Router>
    </div>
  );
}

export default App;
