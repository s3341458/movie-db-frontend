import React from 'react';
import logo from './logo.svg';
import { Auth } from './containers'
import './App.css';

function App() {
  console.log(process.env, 'debug here config');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Auth />
      </header>
    </div>
  );
}

export default App;
