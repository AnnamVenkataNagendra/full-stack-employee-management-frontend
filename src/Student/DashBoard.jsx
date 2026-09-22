import React from 'react'
import { Link } from 'react-router-dom';

import './Nav.css';
const DashBoard = () => {
  return (
    <div>
  <h1 className="text-danger bg-body-secondary text-center p-4 mb-0">
    Welcome To Dash Board
  </h1>

  <nav className="bg-body-secondary p-2 nav-par">
    <ul className='ul-tag'>
      <Link to="/fetch" className='text-type'>
        <li>User Data</li>
      </Link>
       <Link to="/" className='text-type'>
        <li>User login</li>
      </Link>
       <Link to="/post" className='text-type'>
        <li>User Regi</li>
      </Link>
    </ul>
  </nav>
</div>
  )
}

export default DashBoard;
