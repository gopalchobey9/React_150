import React,{Suspense} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin  from './Components/Admin'
import Home from './Components/Home'

const Products = React.lazy(()=> import("./Components/Products"))

const App = () => {
  return (
    <BrowserRouter>
  <Routes>
    <Route path='/admin' element ={<Admin/>}/>
    <Route path='/' element ={<Home/>}/>
    <Route path='/products' element ={
      <Suspense fallback =" loading ...">
        <Products/> 
        </Suspense>
      
    }/>
  </Routes>
  
  </BrowserRouter>
  )
}

export default App