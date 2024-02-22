import React, {  useCallback, useRef  } from 'react';
import { v4 as uuid } from "uuid";
import "./AddQuote.css"
const AddQuote = ({arr,setArr}) => {
  let authorRef = useRef();
    let TextRef = useRef();


  //   function addQuote() {
  //     let newauthor = authorRef.current.value;
  //     let newtext = TextRef.current.value;
  //     console.log(newauthor, newtext);
  //     let obj = {
  //         id: uuid(),
  //         author: newauthor,
  //         text: newtext
  //     }
  //     setArr([...arr, obj]);
  //     authorRef.current.value = "";
  //     TextRef.current.value = "";
  // }
  const  addQuote = useCallback( () =>{
    let newauthor = authorRef.current.value;
    let newtext = TextRef.current.value;
    console.log(newauthor, newtext);
    let obj = {
        id: uuid(),
        author: newauthor,
        text: newtext
    }
    setArr([...arr, obj]);
    authorRef.current.value = "";
    TextRef.current.value = "";
},[arr])
  return (
    <div className='input'>
                <input type="text" placeholder="enter author name"
                    ref={authorRef} />
                <br />
                <input type="text" placeholder="enter quote"
                    ref={TextRef}
                />
                <br />
                <button onClick={addQuote}>add</button>
            </div> 
  )
}

export default AddQuote