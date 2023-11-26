import React from 'react'
import "./Header.css"
import Home from './Gallery'
import Home from './Order'
import Home from './Menu'
import Home from './Review'
import Home from './About'
import { Link, Route,Routes } from 'react-router-dom';
function Header() {
  return (
    <div>
        <div className='heading1'>
            <h1>Food App</h1> 
      <ul className='link'>
        <li>
        
         <Link to="/Home" className='firstlink' >Home</Link>
         <Link to="/Menu" className='secondlink'>Menu</Link>
         <Link to="/Order" className='secondlink'>Order</Link>
         <Link to="/Review" className='secondlink'>Review</Link>
         <Link to="/Gallery" className='secondlink'>Gallery</Link>
         <Link to="/About" className='secondlink'>About</Link>
       </li>
     </ul>
     
        </div>
    </div>
  )
}


export default Header