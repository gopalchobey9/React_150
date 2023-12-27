import React,{useState} from 'react'
import TodoList from './TodoList'
import Form from './Form'
import { v4 as uuid } from 'uuid';
const TodoApp = () => {

    let arrayDummy=[
        {
            id:uuid(),
            todo:"code karo "
        },
        {
            id:uuid(),
            todo:"kuch mat  karo "
        },
        {
            id:uuid(),
            todo:"pdhai karo "
        },
        {
            id:uuid(),
            todo:"code push  "
        },
    ]

    const [todos, setTodos] = useState(arrayDummy)
      
    const addTodos = (todo)=>{
        setTodos([...todos,todo] )
    }
    const deleteTodo =(id)=>{
        const newTodo = todos.filter((todo)=> todo.id!==id)
        setTodos(newTodo);
        console.log(newTodo)    
    }


  return (
    <div>
        <TodoList todos={todos} deleteTodo ={deleteTodo} />
        <Form addTodos={addTodos} todos={todos}/>
    </div>
  )
}

export default TodoApp