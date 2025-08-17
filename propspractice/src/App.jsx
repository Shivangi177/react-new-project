import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  

  return (
    <>
      <div className='bg-green-300 text-black rounded-xl p-4'>Tailwind test</div>
      <Card username="Shivangi" profile="Developer"/>
      <Card username="Chavi" profile="Makeup Artist"/>
      
    </>
  )
}

export default App
