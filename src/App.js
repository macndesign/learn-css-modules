import React from 'react';
import logo from './logo.svg';
import Link from './Link/Link';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          mode="default">
          <span>Learn React</span>
        </Link>
      </header>
    </div>
  );
}

export default App;
