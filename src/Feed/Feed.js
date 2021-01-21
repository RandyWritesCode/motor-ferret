import React from 'react'
import { Link } from 'react-router-dom'
import STORE from '../STORE'
function Feed() {

  let event = STORE.events.map((event, idx) => {
    return (
      <section>
        <Link>
          <h4>{event.title}</h4>
        </Link>
        <p>{event.photo}</p>
        <p>{event.date}</p>
        <p>Event Type: {event.event_type}</p>
        <p>Description: {event.event_description}</p>
      </section>

    )
  })
  return (<>
    <section>
      <h3>Upcoming Events</h3>
    </section>
    <>
      {event}
    </>
  </>
  )
}

export default Feed
