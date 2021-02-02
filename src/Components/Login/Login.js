import React from 'react'
import { withRouter } from 'react-router-dom'

function Login(props) {
  return (
    <section>
      <h3>Login</h3>
      <p>Username: Admin1</p>
      <p>Password: Aa1!Bb2@</p>
      <form onSubmit={(e) => {
        props.handleLogin(e)
        props.history.push('/events')
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