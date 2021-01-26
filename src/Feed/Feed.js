import React from 'react'
import { Link } from 'react-router-dom'


function Feed(props) {

  let event = props.events.map((event, idx) => {
    let secondDate = (event.date2 ? `to ${event.date2}` : '')
    return (
      <section>
        <a href={event.website}>
          <h4>{event.title}</h4>
        </a>
        <p>{event.photo}</p>
        <p>{event.date1}</p>
        <p>{secondDate}</p>
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
