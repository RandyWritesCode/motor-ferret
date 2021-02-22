import React from 'react'


function Feed(props) {


  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
            let secondDate = (event.date2
              ? `to ${days[new Date(event.date2).getUTCDay()]}, ${months[new Date(event.date2).getUTCMonth()]} ${new Date(event.date2).getUTCDate()}, ${new Date(event.date2).getUTCFullYear()}`
              : '')

            return (
              <section key={idx}>
                {/* <a href={event.website}> */}
                <h4>{event.title}</h4>
                {/* </a> */}
                {/* <p>{event.photo}</p> */}
                <p>{days[new Date(event.date1).getUTCDay()]}, {months[new Date(event.date1).getUTCMonth()]} {new Date(event.date1).getUTCDate()}, {new Date(event.date1).getUTCFullYear()}</p>
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
