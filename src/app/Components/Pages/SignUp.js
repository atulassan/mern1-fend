import React, { Fragment } from 'react';
import { useForm } from "react-hook-form";
import { postData } from "../../Services/axios-service"
import { success, error } from "../../Services/toast-service"

const SignUp = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    console.log("Register Form Data++++++++++++++++", data);
    let register = await postData("/register", data);
    console.log("Register+++++++++++++", register);
    if(register.data.status) {
        document.getElementById("form-signup").reset();
        success(register.data.message);
    } else {
        error(register.data.message)
    }
  }

  return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-xl-9 mx-auto">
                        <form className="form-signup" id="form-signup" onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <label htmlFor="inputEmail" className="sr-only">Email address</label>
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" name="email" {...register("email", { required: true })} autoFocus />
                            {errors.email && <span>This field is required</span>}
                            <label htmlFor="username" className="sr-only">Username</label>
                            <input type="text" id="inputUsername" className="form-control" name="username" {...register("username", { required: true })} placeholder="username" />
                            {errors.username && <span>This field is required</span>}
                            <label htmlFor="inputPassword" className="sr-only">Password</label>
                            <input type="password" id="inputPassword" className="form-control" name="password" {...register("password", { required: true })} placeholder="Password" />
                            {errors.password && <span>This field is required</span>}
                            <label htmlFor="inputPhone" className="sr-only">Phone</label>
                            <input type="text" id="inputPhone" className="form-control" name="phone" {...register("phone", { required: true })} placeholder="Phone" />
                            {errors.phone && <span>This field is required</span>}
                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Remember me
                                </label>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
                            <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SignUp;