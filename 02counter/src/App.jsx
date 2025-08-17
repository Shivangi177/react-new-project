import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[counter,setCounter]=useState(15);
// const counter=5;
const addValue=()=>{
  // console.log("Add value",Math.random());
  // setCounter(counter+1);
  setCounter((prevCounter)=>prevCounter+1)
  setCounter((prevCounter)=>prevCounter+1)
  setCounter((prevCounter)=>prevCounter+1)
  setCounter((prevCounter)=>prevCounter+1)
}

const removeValue=()=>{
  setCounter(counter-1);  
}

  return (
    <>
    <h1>chai aur react</h1>
    <h2>Counter value:{counter}</h2>

    <button onClick={addValue}>Add value {counter}</button>
    <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
