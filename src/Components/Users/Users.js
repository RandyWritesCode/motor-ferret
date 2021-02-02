import React from 'react'
import TokenService from '../../Services/token-services'
import config from '../../config'

class Users extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let userUrl = `${config.API_ENDPOINT}/users`;
    let getAllUsers = {
      method: 'GET',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    }

    fetch(userUrl, getAllUsers)
      .then(res => {
        if (!res.ok) {
          return res.json.then(error => Promise.reject(error))
        }
        return res.json()
      })
      .then(users => {
        this.setState({
          users: users,
          admin: TokenService.getUserAuth()
        })
      })
      .catch(error => this.setState({ error }))

  }

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
          <p>Admins Only!</p>
        </section>
        {users}
      </>
    )
  }
}
export default Users