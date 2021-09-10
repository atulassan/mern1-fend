import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dashboard from "../Components/Pages/Dashboard";
import SignIn from "../Components/Pages/SignIn";
import SignUp from "../Components/Pages/SignUp";
import Contact from "../Components/Pages/Contact";
import Products from "../Components/Pages/Products";
import Categories from "../Components/Pages/Categories";
import AddProduct from "../Components/Pages/AddProduct";
import AddCategory from "../Components/Pages/AddCategory";
import Home from "../Components/Pages/Home";
import About from "../Components/Pages/About";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Routes = (props) => {

    const client = useSelector(state => state.client);
    const userRole = client?.user?.role;
    console.log(client);
    console.log(userRole);

    return (
        <Fragment>
            <Switch>
                <PublicRoute restricted={false} component={SignIn} path={["/", "/signin"]} exact />
                <PublicRoute restricted={false} component={SignUp} path="/signup" exact />
                { !userRole && 
                    <PrivateRoute restricted={false} component={About} path="/about" exact />
                }
                { userRole && 
                    <PrivateRoute restricted={false} component={Contact} path="/contact" exact />
                }
                { userRole && 
                    <PrivateRoute restricted={false} component={Products} path="/products" exact />
                }                        
                { userRole && 
                    <PrivateRoute restricted={false} component={Categories} path="/categories" exact />
                }                        
                { userRole && 
                    <PrivateRoute restricted={false} component={AddProduct} path="/addproduct" exact />
                }
                { userRole && 
                    <PrivateRoute restricted={false} component={AddCategory} path="/addcategory" exact />
                }                        
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