import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    Button,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from '@mui/material';
import { PageContainer } from '../../shared/index';

function SignUp(props) {
    return (
        <PageContainer>
            <section>
                <header>
                    <Typography variant='h3'>Sign Up</Typography>
                </header>
                <p>
                    Password should have at least one uppercase and one
                    lowercase letter, a number and a special character (ie.
                    !@#$){' '}
                </p>

                <p>Aa1!Bb2@</p>
                <Grid
                    component='form'
                    className='signup-form'
                    onSubmit={e => {
                        props.handleSignUpSubmit(e);
                        props.history.push('/login');
                    }}
                >
                    <Grid item sx={{ margin: 1 }}>
                        <TextField
                            label='Full name'
                            type='text'
                            name='fullname'
                            id='fullname'
                            placeholder='Randy Douglas'
                            required
                        />
                    </Grid>
                    <Grid item sx={{ margin: 1 }}>
                        <TextField
                            label='Username'
                            type='text'
                            name='username'
                            id='username-sign-up'
                            placeholder='MotorFerretUser1'
                            required
                        />
                    </Grid>
                    <Grid item sx={{ margin: 1 }}>
                        <TextField
                            label='Password'
                            type='password'
                            name='password'
                            id='password-sign-up'
                            required
                        />
                    </Grid>
                    <Grid item sx={{ margin: 1 }}>
                        <TextField
                            label='Confirm Password'
                            type='password'
                            name='confirm-password'
                            id='confirm-password'
                            required
                        />
                    </Grid>
                    <Grid item sx={{ margin: 1 }}>
                        <FormLabel>
                            Are you a Motor Ferret Administrator?:{' '}
                        </FormLabel>

                        <RadioGroup
                            aria-labelledby='admin-radio-buttons-group-label'
                            defaultValue='no'
                            name='radio-buttons-group'
                        >
                            <FormControlLabel
                                value='yes'
                                control={<Radio />}
                                label='Yes'
                            />
                            <FormControlLabel
                                value='no'
                                control={<Radio />}
                                label='No'
                            />
                        </RadioGroup>
                    </Grid>
                    <Button type='submit'>Sign Up</Button>
                    <Button type='reset'>Clear</Button>
                </Grid>
            </section>
        </PageContainer>
    );
}

export default withRouter(SignUp);
