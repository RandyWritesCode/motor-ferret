import React from 'react';
import SearchEventsForm from '../SearchEventsForm/SearchEventsForm'

// import Error from '../AppError/AppError';

export default function Search(props) {
  let displayEvents = props.display.map((event, idx) => {
    let secondDate = (event.date2 ? `to ${event.date2}` : '')
    let eventType = event.event_type
    eventType = eventType.replace("_", " ")

    return (
      <section key={idx}>
        <a href={event.website}>
          <h4>{event.title}</h4>
        </a>
        <p>{event.photo}</p>
        <p>{event.date1}</p>
        <p>{secondDate}</p>
        <p>{event.state}</p>

        <p>Event Type: {eventType}</p>
        <p>Description: {event.event_description}</p>
      </section>
    )
  })

  return (
    // <Error>
    <div className='search'>
      <header>
        <section >
          <h2>Event Search </h2>
          <h3>Search for events</h3>
        </section>
      </header>
      <section>
        <SearchEventsForm
          handleEventSearch={props.handleEventSearch}
          handleEventSearchByLocation={props.handleEventSearchByLocation}
          display={props.display}
          events={props.events}

        />
      </section>
      <div>
        {displayEvents}
      </div>
    </div>
    // </Error>
  );

};

