import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../../Services/token-services';

export default function PrivateRoute({ render, ...props }) {
    const Component = render;
    return (
        <Route
            {...props}
            render={componentProps =>
                TokenService.hasAuthToken() ? (
                    <Component {...componentProps} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: componentProps.location },
                        }}
                    />
                )
            }
        />
    );
}
