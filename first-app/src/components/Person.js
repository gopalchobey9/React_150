import React, { useState } from 'react'

const Person = (props) => {
    let [name,setName] =useState(props.name)
    // let namee = props.name;
    function handleClick(){
    //    let name = "anonymous";
       setName("anonymous");
       console.log(name);
    }
     

  return (
    <div>

    <div onClick={handleClick} >i am a div donot click me </div>
    {/* <h1>{props.name}</h1> */}
    <h1>{name}</h1>
    <p>{props.age}</p>
    
    </div>
  )
}
 
export default Person