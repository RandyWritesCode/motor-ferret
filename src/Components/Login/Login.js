import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function Login(props) {

  return (
    <section>
      <h3>Login</h3>
      <p>Use the demo account below, or create an account on the <Link to='/sign-up'>sign up</ Link> page</p>
      <p>Username: Admin10</p>
      <p>Password: 1Aa!2Bb@</p>
      <form onSubmit={(e) => {
        props.handleLogin(e, props.history)
      }}>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" />
        </div>
        <button>Login</button>
        <button>Clear</button>
      </form>
    </section>
  )
}

export default withRouter(Login)