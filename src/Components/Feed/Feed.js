import React from 'react'


function Feed(props) {

  let displayEvents = props.events.map((event, idx) => {
    console.log(event)
    let formattedEventType = event.event_type.replace('_', " ").toUpperCase()
    let secondDate = (event.date2 ? `to ${event.date2}` : '')
    return (
      <section key={idx}>
        <a href={event.website}>
          <h4>{event.title}</h4>
        </a>
        {/* <p>{event.photo}</p> */}
        <p>{event.date1}</p>
        <p>{secondDate}</p>
        <p>{event.state}</p>
        <p>Event Type: {formattedEventType}</p>
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
