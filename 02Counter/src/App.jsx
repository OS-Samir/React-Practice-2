import reactLogo from "./assets/react.svg";
import {useState} from "react";

import "./App.css";


function App() {

  const [counter, setCounter] = useState(15);

  const addValue = () => {
   
    // setCounter(c=>(c < 20 ? c+1: c));
   
    setCounter(prevcounter => prevcounter + 1 )
    setCounter(prevcounter => prevcounter + 1 )
    setCounter(prevcounter => prevcounter + 1 )
    setCounter(prevcounter => prevcounter + 1 )


  };

  const desValue = () => {
    // setCounter(c=>(c > 0 ? c-1: c));
    setCounter(counter - 1)
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
