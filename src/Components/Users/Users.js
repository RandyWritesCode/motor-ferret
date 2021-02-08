import React from 'react'

class Users extends React.Component {

  render() {
    let users = this.props.users.map((user, idx) => {
      return (<section key={idx}>
        <h4>
          {user.username}
        </h4>
        <p>{user.profile_picture}</p>
        <p>
          Member Since:
        {user.start_date}
        </p>

        {/* <p>
          Flagged: {user.flagged === "No" ? "No" : "Yes"}
        </p> */}
        <p>Blocked: {user.blocked === "No" ? "No" : "Yes"}
        </p>

        {user.blocked === "No"
          ? <button
            onClick={() => this.props.handleBlockUser(user)}>
            Block User
        </button>
          : <button
            onClick={() => this.props.handleBlockUser(user)}>
            Unblock User
        </button>}
      </section>
      )

    })
    return (
      <>
        <section>
          <h3>View Users:</h3>
        </section>
        {users}
      </>
    )
  }
}
export default Users