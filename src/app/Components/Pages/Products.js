import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { getAuthData } from "../../Services/auth-axios-service";

class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            products: [], 
            categories: [],         
        }
    }

    componentDidMount() {
        this.fetchItems();
        console.log("Testing tsting")
    }

    async fetchItems() {
        let categories = await getAuthData("/productcategories");
        let products = await getAuthData("/products");
        await this.setState({
            loading: false,
            products: (products['status']) ? products['data']['data']['result'] : []
        })
        console.log(products);
        console.log(categories);
    }

    render() {
        const {loading, products} = this.state;
        return(
            <Fragment>
                <Link to={`/addproduct`}>Create Product</Link>
                { loading ? 
                <div>Loading...</div> :
                products.length > 0 ? 
                    products.map((product, index) =>
                        <div key={index}>{product.id}{product.name}</div>
                    )
                    : <div>No Proudcts Found</div>    
                }
                <p>Product Listing</p>
            </Fragment>
        )
    }

}


export default Products;