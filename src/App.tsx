import React from 'react';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import './firebase/connection';

function App() {
  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
