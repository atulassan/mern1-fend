import React, {Fragment} from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from "../Components/Template/Header";
import Footer from "../Components/Template/Footer";

const isLogin = () => {
    return true;
}

// Show the component only when the user is logged in
// Otherwise, redirect the user to /signin page

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Fragment>
            <Header />
                <Route {...rest} render={ props => (
                    isLogin() ?
                        <Component {...props} />
                    : <Redirect to="/signin" />
                ) } />
            <Footer />
        </Fragment>
    );
};

export default PrivateRoute;