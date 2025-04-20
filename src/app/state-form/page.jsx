'use client'
import React, { useState } from 'react'




const StateManagement = () => {
    let [count,setCount] = useState(0)
    
  return (
    
    <div>
      <h1 className='text-center font-bold my-10 text-5xl'>Event Handling</h1>
      <button className='border p-4' onClick={()=>{alert('click me')}}>Click Me</button>

    <input className='border p-2' type="text" onChange={(e)=>{console.log(e.target.value);
    }} />

    <button className='block mt-4 border p-4' onClick={()=>{setCount(count++);console.log(count);
    
     }}>Counter</button>
     <div className='text-5xl'>{count}</div>
    </div>
  )
}

export default StateManagement
