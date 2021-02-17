import React from 'react'

class Users extends React.Component {

  render() {
    return (
      <div>
        <section>
          <h3>View Users:</h3>
        </section>
        {(this.props.users)
          ? this.props.users.map((user, idx) => {
            return (<section key={idx}>
              <h4>
                {user.username}
              </h4>
              <p>{user.profile_picture}</p>
              {/* <img src={user.profile_picture} /> */}
              <p>
                Member Since:
        {user.start_date}
              </p>

              <p>Blocked: {user.blocked === "No" ? "No" : "Yes"}
              </p>

              {user.blocked === "No"
                ? <button
                  onClick={() => this.props.handleBlockUser(user, this.props.history)}>
                  Block User
        </button>
                : <button
                  onClick={() => this.props.handleBlockUser(user, this.props.history)}>
                  Unblock User
        </button>}
            </section>
            )

          })
          : ''

        }
      </div>
    )
  }
}
export default Users