import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex flex-row place-content-between'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/paste"}>List of pastes</NavLink>
        
    </div>
  )
}

export default NavBar