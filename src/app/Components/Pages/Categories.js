import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { getAuthData } from "../../Services/auth-axios-service";

class Categories extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            categories: [],         
        }
    }

    componentDidMount() {
        this.fetchItems();
        console.log("Categories Listing+++++++++++++");
    }

    async fetchItems() {
        let categories = await getAuthData("/productcategories");
        await this.setState({
            loading: false,
            categories: (categories['status']) ? categories['data']['data']['result'] : []
        });
        console.log(categories);
    }

    render() {
        const {loading, categories} = this.state;
        return(
            <Fragment>
                <Link to={`/addcategory`}>Create Category</Link>
                { loading ? 
                <div>Loading...</div> :
                categories.length > 0 ? 
                categories.map((category, index) =>
                        <div key={index}>{category.id}{category.name}</div>
                    )
                    : <div>No Proudcts Found</div>    
                }
                <p>category Listing</p>
            </Fragment>
        )
    }

}


export default Categories;