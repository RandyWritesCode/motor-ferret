import React from 'react'
import STORE from '../STORE'

function Users() {

  let user = STORE.users.map((user, idx) => {
    console.log(user)
    return (<section key={idx}>
      <h4>
        {user.username}
      </h4>
      <p>
        Member Since:
        {user.start_date}
      </p>
      <p>
        Flagged:
{user.flagged}      </p>
    </section>
    )
  })

  return (
    <>
      {user}
    </>
  )
}

export default Users