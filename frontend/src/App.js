import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './Components/Login/Login'
import Tracker from './Components/Tracker/Tracker'

function App() {
  
  return (
    <Router>
    <>
      <Switch>
        <Route
          exact
          path='/'
          component={Login}
        />
        <Route
          exact
          path='/tracker'
          component={Tracker}
        />
      </Switch>
    </>
  </Router>
  );
}
export default App;
