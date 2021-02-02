import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../Services/token-services'
import "./Nav.css"

class Nav extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    TokenService.clearUserKey()
    TokenService.clearAdminKey()
  }

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
          <Link to="/" onClick={this.handleLogoutClick}>
            Logout
          </Link>
        </li>
      </ul >
    )
  }

  render() {
    return (
      <nav>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    )
  }
}

export default Nav