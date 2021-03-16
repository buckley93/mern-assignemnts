import './App.css';
import React from 'react';

import AppComponent from './components/MyComponents';

function App() {
  return (

    <div className="App">
      <AppComponent lastName={"Doe"} firstName={"Jane"} age={45} hair={"Black"} />
      <AppComponent lastName={"Smith"} firstName={"John"} age={88} hair={"Brown"} />
      <AppComponent lastName={"Fillmore"} firstName={"Millard"} age={50} hair={"Brown"} />
      <AppComponent lastName={"Smith"} firstName={"Maria"} age={62} hair={"Brown"} />
      <AppComponent lastName={"Lynn"} firstName={"Jessica"} age={107} hair={"Red"} />
    </div>

  );
}

export default App;
