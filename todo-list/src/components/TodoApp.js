import React,{useEffect , useState} from 'react'
import TodoList from './TodoList'
import Form from './Form'
// import { v4 as uuid } from 'uuid';
const TodoApp = () => {

    // let arrayDummy=[
    //     {
    //         id:uuid(),
    //         todo:"code karo ",
    //         checked:false
    //     },
    //     {
    //         id:uuid(),
    //         todo:"kuch mat  karo ",
    //         checked:true
    //     },
    //     {
    //         id:uuid(),
    //         todo:"pdhai karo ",
    //         checked:false
    //     },
    //     {
    //         id:uuid(),
    //         todo:"code push  ",
    //         checked:false
    //     },
    // ]

    let arrayDummy =JSON.parse(window.localStorage.getItem('todos')||"[]")

    let [todos, setTodos] = useState(arrayDummy)


    console.log("inside todoApp")
     useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
     }, [todos]);


      
    const addTodos = (todo)=>{
        setTodos([...todos,todo] )
    } 


    // const deleteTodo =(id)=>{
    //     const newTodo = todos.filter((todo)=> todo.id!==id)
    //     setTodos(newTodo);
    //     console.log(newTodo)    
    // }
    const deleteTodo =(id)=>{
         setTodos ((prevState)=>{
            return prevState.filter((todo)=> todo.id!==id)
         })
    }
 
    const checkTodo =(id)=>{
        setTodos((prevState)=>{
            return  prevState.map((item)=>item.id ===id?{...item,checked:!item.checked}:item)
        })
    }



  return (
    <div>
        <TodoList todos={todos} deleteTodo ={deleteTodo}  checkTodo={checkTodo} />
        <Form addTodos={addTodos} todos={todos} checkTodo={checkTodo}/>
    </div>
  )
}

export default TodoApp