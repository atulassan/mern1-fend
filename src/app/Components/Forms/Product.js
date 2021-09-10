import React, { Fragment, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { success, error } from "../../Services/toast-service"
import { getAuthData, postAuthData } from "../../Services/auth-axios-service";

const Product = (props)=> {

    const [loading, setLoading] = useState(true);
    const [catgories, setCatgories] = useState([]);

    useEffect(()=> {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        let categories = await getAuthData("/productcategories");
        setLoading(false);
        setCatgories((categories['status']) ? categories['data']['data']['result'] : []) 
        console.log(categories);
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        let addProduct = await postAuthData("/addproduct", data);
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

                        { loading ? <div>Loading....</div>
                        : 
                        <>
                            <form className="form-signin"id="form-signin" onSubmit={handleSubmit(onSubmit)}>
                                <h1 className="h3 mb-3 font-weight-normal">Create Product</h1>
                                <label htmlFor="inputName" className="sr-only">Name</label>
                                <input type="text" id="inputName" className="form-control" placeholder="Name" name="name" {...register("name", { required: true })} autoFocus />
                                {errors.name && <span>This field is required</span>}
                                <label htmlFor="inputSku" className="sr-only">sku</label>
                                <input type="text" id="inputSku" className="form-control" placeholder="sku" name="sku" {...register("sku", { required: true })} autoFocus />
                                {errors.sku && <span>This field is required</span>}
                                <label htmlFor="inputDescription" className="sr-only">Name</label>
                                <input type="text" id="inputDescription" className="form-control" placeholder="description" name="description" {...register("description", { required: true })} autoFocus />
                                {errors.description && <span>This field is required</span>}
                                <label htmlFor="inputPrice" className="sr-only">price</label>
                                <input type="text" id="inputPrice" className="form-control" placeholder="Price" name="price" {...register("price", { required: true })} autoFocus />
                                {errors.price && <span>This field is required</span>}
                                <p>
                                    <label htmlFor="inputName" className="sr-only">Name</label>
                                    <select name="status" {...register("status", { required: true })}>
                                        <option value="1">Enabled</option>
                                        <option value="0">Disabled</option>
                                    </select>
                                    {errors.status && <span>This field is required</span>}
                                </p>
                                { catgories.length > 0 &&
                                <p>
                                <label htmlFor="inputName" className="sr-only">Name</label>
                                <select name="category" {...register("category", { required: true })}>
                                   { catgories.map((value, index) => 
                                      <option value={value.id} key={index}>{value.name}</option>
                                        ) 
                                   }
                                 </select>
                                    {errors.category && <span>This field is required</span>}
                                </p>         
                                }

                                {/* <div className="checkbox mb-3">
                                    <label>
                                        <input type="checkbox" value="remember-me" /> Remember me
                                    </label>
                                </div> */}
                                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                            </form>        
                        </>

                        }

                        
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Product;