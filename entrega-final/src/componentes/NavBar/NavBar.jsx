import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img  className='logoCaptain' src={"../public/img/loguito.png"} alt="Logo Captain" />
      </Link>

        <nav>
            <ul>
                <li>
                  <NavLink to="/"> Home </NavLink>
                
                </li>

                <li>
                  <NavLink to="/categoria/Bebidas"> Bebidas </NavLink>
                  
                </li>

                <li>
                 <NavLink to="/categoria/Combos Bebidas"> Combo bebidas </NavLink> 
                </li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar