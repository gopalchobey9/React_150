import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Todo = (props) => {
    function deleteTodoHandler(id){
        props.deleteTodo(id);
    }

  return (
    <div>
    <li>
        <p>index:{props.index} --&gt; ID: {props.id}-- Task:{props.todo}  <span onClick={()=>deleteTodoHandler(props.id)}><FaTrashAlt /></span></p>

    </li>

    </div>
  )
}

export default Todo