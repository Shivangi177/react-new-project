import { useState, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
// import { useEffect } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const[numberAllowed,setnumberAllowed]=useState(false);
  const[charAllowed,setcharAllowed]=useState(false);
  const[password,setPassword]=useState("");

  // useRef hook 
  const passwordRef=useRef(null);

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="~`!@#%^&*{}[]";

    for(let i=1;i<=length;i++){
      const char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }
    setPassword(pass);
  },
  [length,numberAllowed,charAllowed,setPassword]);

  // useRef 
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password)
  },[password])

  //useEffect
  useEffect(()=>{
    passwordGenerator()
  }, [length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md px-4 my-8 rounded-lg text-orange-500 bg-gray-500">
      <h1 className="text-center text-white">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" className='outline-none w-full py-1 px-3' value={password} placeholder="password" readOnly ref={passwordRef}/>
        <button className="outline-none text-white bg-blue-700 px-3 py-0.5 shrink-0" onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">

        <div className="flex text-center gap-x-1">
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => setLength(Number(e.target.value))}/>
          <label>Length: {length}</label>
        </div>

        <div className="flex text-center gap-x-1">
          <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{setnumberAllowed((prev)=>!prev)}}/>
          <label htmlFor='numberInput'>Numbers</label>
        </div>

        <div className="flex text-center gap-x-1">
          <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={()=>{setcharAllowed((prev)=>!prev)}}/>
          <label htmlFor='charInput'>Characters</label>
        </div>

      </div>
    </div>

    </>
  )
} 

export default App
