import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

const isLogin = () => {
    return false;
}

// restricted = false meaning public route
// restricted = true meaning restricted route
const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Fragment>
            <Route {...rest} render={props => (
                    isLogin() && restricted ?
                        <Redirect to="/dashboard" />
                    : <Component {...props} />
                )} />        
        </Fragment>
    );
};

export default PublicRoute;