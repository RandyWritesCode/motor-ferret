import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
      <section>
        <h3>Search for Events</h3>
        <p>Use the <Link to='/events-search'>
          search </Link>
         feature to find motorsports events by title or state.
			</p>
      </section>
      <section>
        <h3>Be an Adminstrator</h3>
        <p>View <Link to='/users'>user accounts </Link> and toggle user access!</p>
      </section>
      <section>
        <h3>Create an Event</h3>
        <p>Hosting an event? <Link to="/event-form">Add</Link> it to share it with the community.</p>
      </section>
    </>
  )
}

export default LandingPage