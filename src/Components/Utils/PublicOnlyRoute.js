import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../../Services/token-services';

function PublicOnlyRoute({ component, ...props }) {
    const Component = component;
    return (
        <Route
            {...props}
            render={componentProps =>
                TokenService.hasAuthToken() ? (
                    <Redirect to={'/'} />
                ) : (
                    <Component
                        {...componentProps}
                        handleSignUpSubmit={props.handleSignUpSubmit}
                    />
                )
            }
        />
    );
}

export default PublicOnlyRoute;
