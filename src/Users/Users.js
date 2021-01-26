import React from 'react'


function Users(props) {
  console.log(props)
  let user = props.users.map((user, idx) => {
    return (<section key={idx}>
      <h4>
        {user.username}
      </h4>
      <p>{user.profile_picture}</p>
      <p>
        Member Since:
        {user.start_date}
      </p>

      <p>
        Flagged: {user.flagged}</p>
    </section>
    )

  })
  return (
    <>
      { user}
    </>
  )
}
export default Users