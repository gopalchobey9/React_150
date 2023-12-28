import React from 'react'
import {Fragment} from 'react'
import MainNavigation from './Components/mainNavigation/MainNavigation'
import {Routes,Route} from 'react-router-dom'
import AllQoutes from './Components/pages/AllQoutes'
import NewQuotes from './Components/pages/NewQuotes'

const App = () => {
  return (
    <Fragment>
      <MainNavigation/>
       
       <main>
        <Routes>
          <Route path="/" element ={<AllQoutes/>}></Route>
          <Route path="/new" element ={<NewQuotes/>}></Route>
        </Routes>
       </main>

    </Fragment>
  )
}

export default App