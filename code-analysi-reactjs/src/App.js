import React from 'react';
import logo from './logo.svg';
import './App.css';


function doSomeThing () {
  let condition = true;
  while (condition) {
    condition = true;
  }

  do{
    condition = true;
  }while(condition);
}

function App() {

  doSomeThing();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
