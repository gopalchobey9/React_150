import React, { useState } from 'react'

const Questions = () => {
    let [count ,setCount] = useState(0);

    function handlerClick() {
        console.log(count +" 1st")
        setCount(count + 1)
        console.log(count + " 2nd")
        setCount(count + 1)
        console.log(count+ " 3rd");
    }
    
    return (
        
        <div>
        <button onClick={handlerClick}>click</button>
    </div>
  )
  
}
export default Questions