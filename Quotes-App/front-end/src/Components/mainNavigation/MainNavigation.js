import React from 'react'
import {Link} from 'react-router-dom'
import styles from './MainNavigation.module.css'



const MainNavigation = () => {
  return (
    <nav className={styles.nav}>
        <h2>Quote app</h2>
        <ul>
            <li> <Link to ='/'>All qoutes</Link></li>
            <li> <Link to ='/new'>New qoutes</Link></li>
        </ul>
    </nav>
  )
}

export default MainNavigation