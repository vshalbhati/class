import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <div className='Navbar'>
        <Link to="./">Teacher</Link>
        <Link to="./Student">Student</Link>
        <Link to="./Assign">Assign</Link>
    </div>
  )
}

export default Navbar