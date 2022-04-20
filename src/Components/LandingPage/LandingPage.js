import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';

function LandingPage() {
    return (
        <>
            <Grid>
                <Typography variant='h4'>Search for Events</Typography>
                <p>
                    Use the <Link to='/events-search'>search </Link>
                    feature to find motorsports events by title or state.
                </p>
            </Grid>
            <Grid>
                <h3>Be an Adminstrator</h3>
                <p>
                    View <Link to='/users'>user accounts </Link> and toggle user
                    access!
                </p>
            </Grid>
            <Grid>
                <h3>Create an Event</h3>
                <p>
                    Hosting an event? <Link to='/event-form'>Add</Link> it to
                    share it with the community.
                </p>
            </Grid>
        </>
    );
}

export default LandingPage;
