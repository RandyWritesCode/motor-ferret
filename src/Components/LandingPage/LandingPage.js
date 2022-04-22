import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Grid, Typography } from '@mui/material';
import Carousel from '../Hero/Carousel';

function LandingPage() {
    return (
        <>
            <Carousel />
            <Grid container justifyContent='center' sx={{ margin: 2 }}>
                <Grid item sx={{ margin: 1 }}>
                    <Button variant='contained' component={Link} to='/events'>
                        Upcoming Events
                    </Button>
                </Grid>
                <Grid item sx={{ margin: 1 }}>
                    <Button
                        variant='outlined'
                        component={Link}
                        to='/events-search'
                    >
                        Search Event
                    </Button>
                </Grid>
                <Grid item sx={{ margin: 1 }}>
                    <Button
                        variant='outlined'
                        component={Link}
                        to='/event-form'
                    >
                        Create Event
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}

export default LandingPage;
