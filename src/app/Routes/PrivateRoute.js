import React, {Fragment} from 'react';
//import { connect } from "react-redux";
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from "../Components/Template/Header";
import Footer from "../Components/Template/Footer";

// Show the component only when the user is logged in
// Otherwise, redirect the user to /signin page

const PrivateRoute = ({component: Component, ...rest}) => {

    //console.log(useSelector(state => state.client));
    const client = useSelector(state => state.client);
    const isLoggedIn = client.isLoggedIn;
    console.log(isLoggedIn);

    return (
        <Fragment>
            <Header />
                <Route {...rest} render={ props => (
                    isLoggedIn ?
                        <Component {...props} />
                    : <Redirect to="/signin" />
                ) } />
            <Footer />
        </Fragment>
    );
};

export default PrivateRoute;