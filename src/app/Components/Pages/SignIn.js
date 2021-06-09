import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useForm } from "react-hook-form";
import { login } from '../../Store/Actions/Auth';
//import { success, error } from "../../Services/toast-service"


const SignIn = (props)=> {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log("Login Form Data++++++++++++++++", data);
        props.dispatch(login(data));
    }

    return (
        <Fragment>
             <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-xl-9 mx-auto">
                        <form className="form-signin"id="form-signin" onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <label htmlFor="inputEmail" className="sr-only">Email address</label>
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" name="email" {...register("email", { required: true })} autoFocus />
                            {errors.email && <span>This field is required</span>}
                            <label htmlFor="inputPassword" className="sr-only">Password</label>
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" name="password" {...register("password", { required: true })} />
                            {errors.password && <span>This field is required</span>}
                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Remember me
                                </label>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                            <p className="mt-5 mb-3 text-muted">If you dont have account, please <Link to="/signup">Signup</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default connect(null, null)(SignIn);