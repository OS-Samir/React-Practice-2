import React, {useState} from 'react'

const App = () => {
    const [value, setValue] = useState(1)
    const [multipliedValue, setMultipliedValue] = useState(1)
    const multiplybyFive = () => {
        setMultipliedValue(value * 5)
        setValue( value + 1)
    }
  return (
    <>
    <h1> Main value: {value} </h1>
    <button
    onClick={multiplybyFive}>
        Click to multiply by 5
    </button>
    <h2> Multiplied value: {multipliedValue} </h2>
    </>
  )
}

export default App
