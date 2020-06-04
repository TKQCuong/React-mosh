import React, { useState, createContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// import Order, { Home } from './pages/Home';
import Navibar from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counters from './components/Counters';
import Input from './components/Input';
import _ from "lodash";

export const UserContext = createContext();

function App(props) {
  const [counters, setCounters] = useState([
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  const [user, setUser] = useState([
    {id: 1, name: 'Jack', email: 'Jack@gmail.com'},
    {id: 2, name: 'Jack1', email: 'Jack1@gmail.com'},
    {id: 3, name: 'Jack2', email: 'Jack2@gmail.com'},
  ])

  const [greet, setGreet] = useState('Login');

  return (
    <div className="App">
      <Navibar totalCounters={counters.filter(c => c.value > 0).length}/>
      <Switch>
        <UserContext.Provider value={{user, setUser, counters, setCounters, greet, setGreet}}>
          <Route exact path="/" render={() => <Counters counters={counters} setCounters={setCounters} totalValue={_.sumBy(counters, c => c.value)}/>} />
        </UserContext.Provider>
        <Route path="/home" render={() => <Input user={user} setUser={setUser}/>} />
      </Switch>
    </div>
  );
}

export default App;
