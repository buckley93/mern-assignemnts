import './App.css';
import React from 'react';

import PersonCard from './components/PersonCard';

function App() {
  
  return (
    <div className="App">
      <PersonCard lastName={"Doe"} firstName={"Jane"} age={45} hair={"Black"} />
      <PersonCard lastName={"Smith"} firstName={"John"} age={88} hair={"Brown"} />
      <PersonCard lastName={"Fillmore"} firstName={"Millard"} age={50} hair={"Brown"} />
      <PersonCard lastName={"Smith"} firstName={"Maria"} age={62} hair={"Brown"} />
      <PersonCard lastName={"Lynn"} firstName={"Jessica"} age={107} hair={"Red"} />
    </div>

);
}

export default App;