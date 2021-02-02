import React from 'react'


function Feed(props) {

  let displayEvents = props.events.map((event, idx) => {
    let secondDate = (event.date2 ? `to ${event.date2}` : '')
    return (
      <section key={idx}>
        <a href={event.website}>
          <h4>{event.title}</h4>
        </a>
        <p>{event.photo}</p>
        <p>{event.date1}</p>
        <p>{secondDate}</p>
        <p>{event.state}</p>

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
      {displayEvents}
    </>
  </>
  )
}

export default Feed
