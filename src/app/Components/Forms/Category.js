import React, { Fragment, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { success, error } from "../../Services/toast-service"
import { postAuthData } from "../../Services/auth-axios-service";

const Category = (props)=> {

    useEffect(()=> {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        /*let categories = await getAuthData("/categories");
        setLoading(false);
        setCatgories((categories['status']) ? categories['data']['data']['result'] : []) 
        console.log(categories);*/
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        let addProduct = await postAuthData("/addproductcategory", data);
        console.log(addProduct);
        console.log("Login Form Data++++++++++++++++", data);
        if(addProduct['status']) {
            success(addProduct.data.message)    
        } else {
            error(addProduct.data.message);
        }
    }

    return (

        
        <Fragment>
             <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-xl-9 mx-auto">

                        <>
                            <form className="form-signin"id="form-signin" onSubmit={handleSubmit(onSubmit)}>
                                <h1 className="h3 mb-3 font-weight-normal">Create Category</h1>
                                <label htmlFor="inputName" className="sr-only">Name</label>
                                <input type="text" id="inputName" className="form-control" placeholder="Name" name="name" {...register("name", { required: true })} autoFocus />
                                { errors.name && <span>This field is required</span> }
                                <label htmlFor="inputDescription" className="sr-only">Name</label>
                                <input type="text" id="inputDescription" className="form-control" placeholder="description" name="description" {...register("description", { required: true })} autoFocus />
                                {errors.description && <span>This field is required</span>}
                                <p>
                                    <label htmlFor="inputName" className="sr-only">Name</label>
                                    <select name="status" {...register("status", { required: true })}>
                                        <option value="1">Enabled</option>
                                        <option value="0">Disabled</option>
                                    </select>
                                    {errors.status && <span>This field is required</span>}
                                </p>
                                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                            </form>        
                        </>

                        
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Category;