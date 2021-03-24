import './App.css';
import BoxForm from './components/BoxForm'
import ShowBox from './components/ShowBox'
import React, {useState} from 'react';

function App() {
  const [boxColors, setBoxColors] = useState([]);
  const [boxWidth, setBoxWidth] = useState([]);
  const [boxHeight, setBoxHeight] = useState([]);

  return (
    <div className="App">
      <BoxForm boxColors={ boxColors } setBoxColors= { setBoxColors } boxWidth = { boxWidth } setBoxWidth = { setBoxWidth } boxHeight = { boxHeight } setBoxHeight = { setBoxHeight } />
      <ShowBox boxColors= { boxColors } boxWidth = { boxWidth } boxHeight = { boxHeight }/>
    </div>
  );
}

export default App;
