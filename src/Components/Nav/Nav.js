import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"
import Logo from '../../Images/motor_ferret_logo.png'

class Nav extends React.Component {
  // constructor(props) {
  //   super(props)
  // }




  renderLoginLink() {
    return (
      <ul className='item'>
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
      <ul className='item'>
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
      <nav >
        <div classname='large-container'>
          <Link to="/">
            <img className='item ' src={Logo} alt='a ferret driving a red car' />
          </Link>
          <div className='item large-item logo'>
            <Link to="/"><h1>Motor Ferret</h1></Link>
            <h2>The Ultimate Motorsports Event Finder</h2>
          </div>
        </div>
        {(this.props.loggedIn === true)
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    )
  }
}

export default Nav