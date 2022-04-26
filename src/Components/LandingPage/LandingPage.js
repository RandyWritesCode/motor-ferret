import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Card, Grid, Typography } from '@mui/material';
import Carousel from '../Hero/Carousel';
import Login from '../Login/Login';

function LandingPage(props) {
    const history = useHistory();
    return (
        <>
            <Carousel />
            {props.loggedIn ? (
                <Grid container justifyContent='center' sx={{ margin: 2 }}>
                    <Grid item sx={{ margin: 1 }}>
                        <Button
                            variant='contained'
                            component={Link}
                            to='/events'
                        >
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
            ) : (
                <Login
                    handleLogin={props.handleLogin}
                    history={history}
                    loggedIn={props.loggedIn}
                />
            )}
        </>
    );
}

export default LandingPage;
