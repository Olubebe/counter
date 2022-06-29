import React, { useState } from "react";
import './App.css';
import Button from "./components/Button";

function App() {
  const [counter, setCount] = useState(0);
  let increasebutton = () => {
    setCount(counter + 1);
  }
  let decreasebutton = () => {
    setCount(counter - 1);
  }
  let resetbutton = () => {
    setCount(0);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter</h1>
        <h3>{counter}</h3>
        <Button title={"decrease"} action={decreasebutton} />
        <Button title={"increase"} action={increasebutton} />
        <Button title={"reset"} action={resetbutton} />

      </header>
    </div>
  )

}


export default App;
