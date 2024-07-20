import reactLogo from "./assets/react.svg";
import {useState} from "react";

import "./App.css";
import { set } from "mongoose";

function App() {

  const [counter, setCounter] = useState(0);

  const addValue = () => {
   
    setCounter(c=>(c < 20 ? c+1: c));
  };

  const desValue = () => {
    setCounter(c=>(c > 0 ? c-1: c));
  }



  
  return (
    <>
      <h1>Samir React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}> Add value </button>
      <br />
      <br />

      <button onClick={desValue}> Decrease value </button>
    </>
  );
}

export default App;
