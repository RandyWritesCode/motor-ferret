import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

class Nav extends React.Component {
  // constructor(props) {
  //   super(props)
  // }




  renderLoginLink() {
    return (
      <ul>
        <li><Link to="/event-form" >Add Event</Link></li>
        <li><Link to="/events-search" >Search Events</Link></li>
        <li><Link to='/events'>Events</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/sign-up">SignUp</Link></li>
      </ul>
    )
  }

  renderLogoutLink() {

    return (
      <ul>
        <li><Link to="/event-form" >Add Event</Link></li>
        <li><Link to="/events-search" >Search Events</Link></li>
        <li><Link to='/events'>Events</Link></li>
        {
          (this.props.admin === "Yes")
            ? <li><Link to="users">View Users</Link></li>
            : null
        }
        <li>
          <Link to="/" onClick={this.props.handleLogout}>
            Logout
          </Link>
        </li>
      </ul >
    )
  }
  //update state with login t/f.  the conditional below needs to be based on state. 
  render() {
    return (
      <nav>
        {(this.props.loggedIn === true)
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    )
  }
}

export default Nav