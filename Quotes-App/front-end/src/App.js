import React from 'react'
import {Fragment} from 'react'
import MainNavigation from './Components/mainNavigation/MainNavigation'
import {Routes,Route} from 'react-router-dom'
import AllQuotes from './Components/pages/AllQuotes'
import NewQuotes from './Components/pages/NewQuotes'

const App = () => {
  return (
    <Fragment>
      <MainNavigation/>
       
       <main>
        <Routes>
          <Route path="/" element ={<AllQuotes/>}></Route>
          <Route path="/new" element ={<NewQuotes/>}></Route>
        </Routes>
       </main>

    </Fragment>
  )
}

export default App