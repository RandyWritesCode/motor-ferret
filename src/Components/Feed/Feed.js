import React from 'react'


function Feed(props) {


  return (<>
    <section>
      <h3>Upcoming Events</h3>
    </section>
    <>
      {
        (props.events)
          ? props.events.map((event, idx) => {
            console.log(event)
            let formattedEventType = event.event_type.replace('_', " ").toUpperCase()
            let secondDate = (event.date2 ? `to ${new Date(event.date2).toLocaleDateString()}` : '')
            return (
              <section key={idx}>
                {/* <a href={event.website}> */}
                <h4>{event.title}</h4>
                {/* </a> */}
                {/* <p>{event.photo}</p> */}
                <p>{new Date(event.date1).toLocaleDateString()}</p>
                <p>{secondDate}</p>
                <p>{event.state}</p>
                <p>Event Type: {formattedEventType}</p>
                <p>Description: {event.event_description}</p>
              </section>

            )
          })
          : ''
      }
    </>
  </>
  )
}

export default Feed
