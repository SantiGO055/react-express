import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

function App() {
  const [backgroundCol, setBackgroundCol] = useState("")

  function backgroundColorFunc(color){
    setBackgroundCol(color)
  }

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: backgroundCol}}>
        <Home handleBackground={backgroundColorFunc}></Home>
      </header>
    </div>
  );
}

export default App;
