import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// import Order, { Home } from './pages/Home';
import Navibar from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counters from './components/Counters';

function App(props) {

  const [counters, setCounters] = useState([
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  return (
    <div className="App">
      <Navibar totalCounters={counters.filter(c => c.value > 0).length}/>
      <Switch>
        <Route exact path="/" render={() => <Counters counters={counters} setCounters={setCounters}/>} />
      </Switch>
    </div>
  );
}

export default App;
