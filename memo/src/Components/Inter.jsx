import React, { useState } from 'react'

const Inter = () => {
    let [count , setCount1] = useState({c:0});
    // let [c , setCount] = useState(0);
    function handlerClick(){
       setCount1((prev)=>{
        return{
            ...prev,
            c:prev.c+1,
        }
       })
       setCount1((prev)=>{
        return{
            ...prev,
            c:prev.c+1,
        }
       })
       setCount1((prev)=>{
        return{
            ...prev,
            c:prev.c+1,
        }
       })
    // setCount((c)=>c+1);
    // setCount((c)=>c+1);
    // setCount((c)=>c+1);
    // console.log(c)
    }
  return (
    <div>
        {/* <button onClick={handlerClick}> click - {count.c}</button> */}
        <button onClick={handlerClick}>  click 2 - {count.c}</button>
    </div>
  )
}

export default Inter