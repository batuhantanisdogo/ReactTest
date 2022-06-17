import React, {useState} from 'react'

export default function Count() {
    const[count,setCount] = useState(0);
    
  return (
    <div>
        <p>Sayac: {count}</p>
        <button onClick={() => setCount(count+1)} className='btn btn-danger btn-lg'>Arttır</button>

        
    
    
    </div>
  )
}


