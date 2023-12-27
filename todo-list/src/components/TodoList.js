import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {

    const allTodos = props.todos.map((item,index)=>{
        return <Todo key ={index} id={item.id} todo ={item.todo} index ={index}  deleteTodo={props.deleteTodo}/>
     
    })

  return (
    <ul>
    {allTodos}
    </ul>
  )
}

export default TodoList