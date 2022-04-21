import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import CarouselContainer from '../Hero/Carousel';

function LandingPage() {
    return (
        <>
            <CarouselContainer />
            <Grid>
                <Typography variant='h4'>Search for Events</Typography>
                <Typography variant='body'>
                    Use the <Link to='/events-search'>search </Link>
                    feature to find motorsports events by title or state.
                </Typography>
            </Grid>
            <Grid>
                <Typography variant='h3'>Be an Adminstrator</Typography>
                <Typography variant='body'>
                    {' '}
                    View <Link to='/users'>user accounts </Link> and toggle user
                    access!
                </Typography>
            </Grid>
            <Grid>
                <Typography variant='h3'>Create an Event</Typography>
                <Typography variant='body'>
                    Hosting an event? <Link to='/event-form'>Add</Link> it to
                    share it with the community.
                </Typography>
            </Grid>
        </>
    );
}

export default LandingPage;
