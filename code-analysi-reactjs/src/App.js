import React from 'react';
import logo from './logo.svg';
import './App.css';
import pureComponent1 from './PureComponent1'


// function getCondition(){
//   return true;
// }

function doSomeThing () {
  // let condition = true;
  // while (getCondition()) {
  //   condition = true;
  // }

  // do{
  //   condition = true;
  // }while(condition);
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
        <pureComponent1 phone_number="03443434"/>
      </header>
    </div>
  );
}

export default App;
