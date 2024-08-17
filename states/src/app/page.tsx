'use client'

import {useState} from 'react'

export default function Name() {
  const [name, setName] = useState("Khanzadi") 
  const item=()=>{
  setName("Bisma")
  }
  return (
      <div>
      <p>Name: {name}</p>
      <button onClick={()=>item()}>Click Me</button>
      </div>
  );
}


/* State 
 Managing Data: Use the `useState` and use to manage data within a component.
 State is an object that stores data that can change with in component. */