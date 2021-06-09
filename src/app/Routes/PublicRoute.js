import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

// restricted = false meaning public route
// restricted = true meaning restricted route
const PublicRoute = ({component: Component, restricted, ...rest}) => {

    //console.log(useSelector(state => state.client));
    const client = useSelector(state => state.client);
    const isLoggedIn = client.isLoggedIn;
    console.log(isLoggedIn);

    return (
        <Fragment>
            <Route {...rest} render={props => (
                    isLoggedIn ?
                        <Redirect to="/dashboard" />
                    : <Component {...props} />
                )} />        
        </Fragment>
    );
};

export default PublicRoute;