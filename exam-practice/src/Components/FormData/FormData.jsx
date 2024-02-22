import React, { useState, useRef, useMemo } from 'react';
import { v4 as uuid } from "uuid";
import AddQuote from '../AddQuote/AddQuote';
import "./FormData.css";
const FormData = () => {
    let array = useMemo(() => [
        {
            id: uuid(),
            author: "Gopal",
            text: "This is the first comment"
        },
        {
            id: uuid(),
            author: "Yash",
            text: "This is the second comment"
        },
        {
            id: uuid(),
            author: "vikash",
            text: "This is the second comment"
        },
    ], []);

    let [arr, setArr] = useState(array);
   
    // delete data from array 
    function deleteQuote(id) {
        const newArr = arr.filter((qq) => qq.id !== id)
        setArr(newArr);
        console.log(id);
    }

    return (
        <div>
            {arr.map((item) => {
                return (
                    <div className='quote'
                     key={item.id}>
                        <h3>{item.author}</h3>
                        <p>{item.text}</p>
                        <button onClick={() => deleteQuote(item.id)}>delete</button>
                    </div>
                )
            })}
            <h1>Form Data Adding </h1>
            <AddQuote arr ={arr} setArr={setArr}  />
        </div>
    )
}

export default FormData;
