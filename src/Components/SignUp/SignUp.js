import React from 'react';
import { withRouter } from 'react-router-dom';

function SignUp(props) {
    return (
        <div>
            <section>
                <header>
                    <h2>Sign Up</h2>
                </header>
                <p>
                    Password should have at least one uppercase and one
                    lowercase letter, a number and a special character (ie.
                    !@#$){' '}
                </p>

                <p>Aa1!Bb2@</p>
                <form
                    className='signup-form'
                    onSubmit={e => {
                        props.handleSignUpSubmit(e);
                        props.history.push('/login');
                    }}
                >
                    <div>
                        <label htmlFor='fullname'>Full name:</label>
                        <input
                            type='text'
                            name='fullname'
                            id='fullname'
                            placeholder='Randy Douglas'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='username'>Username:</label>
                        <input
                            type='text'
                            name='username'
                            id='username-sign-up'
                            placeholder='MotorFerretUser1'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            name='password'
                            id='password-sign-up'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='confirm-password'>
                            Confirm Password
                        </label>
                        <input
                            type='password'
                            name='confirm-password'
                            id='confirm-password'
                            required
                        />
                    </div>
                    <div>
                        <span>Are you a Motor Ferret Administrator?: </span>
                        <input
                            type='radio'
                            id='admin'
                            name='admin'
                            value='Yes'
                        />
                        <label htmlFor='admin'>Yes</label>
                        <input
                            type='radio'
                            id='not_admin'
                            name='admin'
                            value='No'
                            defaultChecked
                        />
                        <label htmlFor='not_admin'>No</label>
                    </div>
                    <button type='submit'>Sign Up</button>
                    <button type='reset'>Clear</button>
                </form>
            </section>
        </div>
    );
}

export default withRouter(SignUp);
