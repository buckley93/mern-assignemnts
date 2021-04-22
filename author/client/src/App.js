import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import Create from './views/Create';
import Update from './views/Update';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Detail path="/authors/:id" />
        <Create path="/new" />
        <Update path="/authors/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
