import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { PageContainer } from '../../shared/index';

function Login(props) {
    return (
        <PageContainer>
            <Typography variant='h3'>Login</Typography>{' '}
            <p>
                Use the demo account below, or create an account on the{' '}
                <Link to='/sign-up'>sign up</Link> page
            </p>
            <p>Username: Admin10</p>
            <p>Password: 1Aa!2Bb@</p>
            <Grid
                component='form'
                onSubmit={e => {
                    props.handleLogin(e, props.history);
                }}
            >
                <Grid item xs='auto' sx={{ margin: 2 }}>
                    <TextField label='Username' type='text' id='username' />
                </Grid>
                <Grid item xs='auto' sx={{ margin: 2 }}>
                    <TextField label='Password' type='password' id='password' />
                </Grid>
                <Button className='primary' type='submit'>
                    Login
                </Button>
                <Button type='reset'>Clear</Button>
            </Grid>
        </PageContainer>
    );
}

export default withRouter(Login);
