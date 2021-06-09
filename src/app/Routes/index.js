import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from "../Components/Pages/Dashboard";
import SignIn from "../Components/Pages/SignIn";
import SignUp from "../Components/Pages/SignUp";
import Contact from "../Components/Pages/Contact";
import Home from "../Components/Pages/Home";
import About from "../Components/Pages/About";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Routes = (props) => {
    return (
        <Fragment>
            <Switch>
                <PublicRoute restricted={false} component={SignIn} path={["/", "/login"]} exact />
                <PublicRoute restricted={false} component={SignUp} path="/signup" exact />
                <PrivateRoute restricted={false} component={About} path="/about" exact />
                <PrivateRoute restricted={false} component={Contact} path="/contact" exact />
                <PrivateRoute component={Home} path="/home" exact />
                <PrivateRoute component={Dashboard} path="/dashboard" exact />               
                <Route component={()=> {
                    return (
                        <div> Sorry Not Found.....</div>
                    );
                }}  />               
            </Switch>
        </Fragment>
    )
}

export default Routes;