import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

function Nav() {
  return (
    <nav>

      <ul>
        {/* <li>Sign Up</li> */}
        <Link to="/event-form" >
          <li>Event Form</li>
        </Link>
        <Link to="/events-search" >
          <li>Search Events</li>
        </Link>
        <Link to='/feed'>
          <li>Events</li>
        </Link>
        <Link to="users">
          <li>View Users</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to='/'>

          <li>Logout</li>
        </Link>

      </ul>
    </nav>
  )
}

export default Nav