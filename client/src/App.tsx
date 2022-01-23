import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './db/connection';
import Configuration from './pages/configuration';
import ConfigurationAvar from './pages/configuration-avatar';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/configuration/">
            <Configuration />
          </Route>
          <Route exact path="/configuration/avatar">
            <ConfigurationAvar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
