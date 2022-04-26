import React, { useState, useEffect } from 'react';
import { Button, Grid, MenuItem, TextField } from '@mui/material';
import { ItemContainer } from '../../shared/index';

const LocationForm = ({ events, handleEventSearchByLocation }) => {
    const [eventsByState, setEventsByState] = useState([]);

    return (
        <ItemContainer>
            <Grid component='form' onSubmit={handleEventSearchByLocation}>
                <Grid item xs={7}>
                    <TextField
                        select
                        label='Search by State:'
                        fullWidth
                        id='state'
                        value={eventsByState}
                        onChange={e => setEventsByState(e.target.value)}
                    >
                        {events.length
                            ? events.map((event, idx) => {
                                  return (
                                      <MenuItem key={idx} value={event.state}>
                                          {event.state}
                                      </MenuItem>
                                  );
                              })
                            : ''}
                    </TextField>
                </Grid>
                <Grid className='center'>
                    <Button className='primary' type='submit'>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </ItemContainer>
    );
};

export default LocationForm;
