import React, { Fragment } from 'react';
import { toast } from 'react-toastify';

const Home = ()=> {
    const notify = () => toast("Wow so easy!");
    return (
        <Fragment>
            <p onClick={notify}>Home</p>
        </Fragment>
    )
}

export default Home;