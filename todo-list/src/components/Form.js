import React ,{useState} from 'react'
import { v4 as uuid } from 'uuid';

const Form = (props) => {
let [input,setInput] = useState('')

    function inputChangeHandler(e){
        setInput(e.target.value)
    }
    function formSubmitHandler(e){
        e.preventDefault(); // preventing from submiting 
        console.log(input);
        const newtodo={
            id:uuid(),
            todo : input,
            checked:false
        }
        props.addTodos(newtodo);
        setInput('');
    }
  return (
    <form onSubmit={formSubmitHandler}>
        <input onChange={inputChangeHandler} type="text" placeholder='enter your task here ' value={input }/>
    </form>
  )
}

export default Form