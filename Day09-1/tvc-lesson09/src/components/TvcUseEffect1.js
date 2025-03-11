import React, { useEffect, useState } from 'react'

export default function TvcUseEffect1() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("useEffect (callback)");
    })

    useEffect(()=>{
        console.log("useEffect(callback,[]); chỉ một lần duy nhất");
        
    },[])

    useEffect(() => {
        console.log('Count has changed:', count);
      }, 
    )
  return (
    <div className='alert alert-danger'>
        <h2>useEffect</h2>

        <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}
