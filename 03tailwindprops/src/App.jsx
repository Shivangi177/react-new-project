import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {

const  oneobj={
   username:"Shivangi",
   age:23
 }

 const newArr=[1,2,3];

  return (
    <>
     <div className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</div>
     <Card username="Shivangi" profile="Frontend Developer" someobj={oneobj} />
     <Card username="Chavi" profile="Makeup Artist"/>
    </>
  )
}

export default App
