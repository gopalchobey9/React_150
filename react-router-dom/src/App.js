import React from 'react'
import {Routes,Route,Link} from  'react-router-dom'
import Cat from './Components/pages/Cat'
import Doge from './Components/pages/Doge'
import Main from './Components/pages/Main'

const App = () => {
  return (
    
    <div>
      <nav>
        <ul>
          <li><Link to="/">Main</Link></li>
          <li><Link to="/cat">Cat</Link></li>
          <li><Link to="/doge">Doge</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element ={<Main/>}/>
        <Route path='/cat' element ={<Cat/>}/>
        <Route path='/doge' element ={<Doge/>}/>
      </Routes>


    </div>
  )
}

export default App