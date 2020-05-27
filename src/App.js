import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navibar from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navibar></Navibar>
      <Switch>
        <Route path="/" render={() => <Home />}></Route>
      </Switch>
    </div>
  );
}

export default App;
