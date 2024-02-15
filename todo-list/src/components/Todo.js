import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Todo = (props) => {
    function deleteTodoHandler(id){
        props.deleteTodo(id);
    }

    function inputChangeHandler(id){
        props.checkTodo(id);
    }

  return (
    <div>
    <li style={{textDecoration:`${props.todoItem.checked? 'line-through' : '' }`}}>
    <input type="checkbox"  onChange={()=>{inputChangeHandler(props.id) }} defaultChecked={props.todoItem.checked}/>
        <span> ID: {props.id}-- Task:{props.todoItem.todo} </span>
         <span onClick={()=>deleteTodoHandler(props.id)}><FaTra shAlt /></span>

    </li>

    </div>
  )
}

export default Todo