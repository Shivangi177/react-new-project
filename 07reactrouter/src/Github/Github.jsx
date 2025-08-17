import React, {useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data=useLoaderData();
    // const[data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         setData(data)
    //     });
    // },[])
  return (
    <div className="text-3xl text-white bg-gray-500 p-4 m-4">GitHub Followers: {data.followers}
    <img className='mx-auto mt-5' src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader=async()=>{
  const response=await fetch('https://api.github.com/users/hiteshchoudhary')
}