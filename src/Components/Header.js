import React from 'react'
import "./Header.css"
import Home from './Gallery'
import Home from './Login'
import Home from './Menu'
import Home from './Review'
import Home from './About'
import { Link, Route,Router,Routes } from 'react-router-dom';
function Header() {
  return (
    <div>
        <div className='heading1'>
            <h1>Food App</h1> 
      <ul className='link'>
        <li>
        <Router>
        <Routes>
        
         <Link to="/Home" className='firstlink' >Home</Link>
         <Link to="/Menu" className='secondlink'>Menu</Link>
         <Link to="/Login" className='secondlink'>Login</Link>
         <Link to="/Review" className='secondlink'>Review</Link>
         <Link to="/Gallery" className='secondlink'>Gallery</Link>
         <Link to="/About" className='secondlink'>About</Link>
         </Routes>
         </Router>
       </li>
     </ul>
     
        </div>
    </div>
  )
}


export default Header