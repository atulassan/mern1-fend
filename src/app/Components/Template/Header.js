import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../../Store/Actions/Auth';
import {useSelector, useDispatch} from "react-redux";

const Header = (props) => {

    console.log(props);

    const dispatch = useDispatch();

    const user = useSelector(state => state.client);

    console.log("Use Selector +++++++++++++++++", user);

    const logOut = () => {
        dispatch(logout());
    }

    return (
        <Fragment>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/categories">Categories</NavLink></li>
                <li><NavLink to="/events/123"
                    isActive={(match, location) => {
                        if (!match) {
                        return false;
                        }

                        // only consider an event active if its event id is an odd number
                        const eventID = parseInt(match.params.eventID);
                        return !isNaN(eventID) && eventID % 2 === 1;
                    }}
                    >
                    Event 123
                    </NavLink>
                </li>
                <li><span onClick={logOut}>Logout</span></li>
            </ul>
        </Fragment>
    )
}

//export default Header;
export default Header;