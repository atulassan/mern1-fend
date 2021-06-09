import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { logout } from '../../Store/Actions/Auth';

const Header = (props) => {

    console.log(props);

    const logOut = () => {
        props?.dispatch(logout());
    }        

    return (
        <Fragment>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/signin">Login</NavLink></li>
                <li><NavLink to="/signup">Register</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
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
export default connect(null, null)(Header);