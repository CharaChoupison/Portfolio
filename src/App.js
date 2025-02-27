import React from "react";
import logo from './sharingan.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Itami o kanjiro, Itami o kangaero, Itami o uketore, Itami o shire.
        </p>
        <p>
          Welcome to a New ANBU Project.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
