import React, { useEffect } from 'react';
import { Card, Grid } from '@mui/material';
import { PageContainer, ItemContainer } from '../../shared/index';

function Feed({ events }) {
    useEffect(() => {}, [events]);

    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    return (
        <PageContainer>
            <section>
                <h3>Upcoming Events</h3>
            </section>
            <Grid container spacing={1}>
                {events
                    ? events.map((event, idx) => {
                          let formattedEventType = event.event_type
                              .replace('_', ' ')
                              .toUpperCase();
                          let secondDate = event.date2
                              ? `to ${
                                    days[new Date(event.date2).getUTCDay()]
                                }, ${
                                    months[new Date(event.date2).getUTCMonth()]
                                } ${new Date(
                                    event.date2
                                ).getUTCDate()}, ${new Date(
                                    event.date2
                                ).getUTCFullYear()}`
                              : '';

                          return (
                              <ItemContainer idx={idx}>
                                  <a href={event.website}>
                                      <h4>{event.title}</h4>
                                  </a>
                                  <p>
                                      {days[new Date(event.date1).getUTCDay()]},{' '}
                                      {
                                          months[
                                              new Date(
                                                  event.date1
                                              ).getUTCMonth()
                                          ]
                                      }{' '}
                                      {new Date(event.date1).getUTCDate()},{' '}
                                      {new Date(event.date1).getUTCFullYear()}
                                  </p>
                                  <p>{secondDate}</p>
                                  <p>{event.state}</p>
                                  <p>Event Type: {formattedEventType}</p>
                                  <p>Description: {event.event_description}</p>
                              </ItemContainer>
                          );
                      })
                    : ''}
            </Grid>
        </PageContainer>
    );
}

export default Feed;
