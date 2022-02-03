import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Configuration from './pages/configuration';
import ConfigurationAvatar from './pages/configuration-avatar';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const socket = require('socket.io-client')('http://localhost:8080');

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home socket={socket} />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register socket={socket} />
          </Route>
          <Route exact path="/configuration/">
            <Configuration />
          </Route>
          <Route exact path="/configuration/avatar">
            <ConfigurationAvatar socket={socket} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
