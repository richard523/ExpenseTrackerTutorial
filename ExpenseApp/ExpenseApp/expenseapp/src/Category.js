import React, { Component } from 'react';

class Category extends Component {
    state = { 
        isLoading : true,
        Categories: []
     } 

     // sync  . load one at a time?
     // async . multiple items will load
    async componentDidMount(){
        
        const response=await fetch('api/categories')
        const body = await response.json();
        this.setState({Categories : body, isLoading : false});
    }
    render() { 
        const {Categories, isLoading} = this.state;
        if(isLoading) 
            return(<div>Loading...</div>);
        

        return (
            <div>
                <h2>Categories</h2>
                {
                    Categories.map( category =>
                        <div id={category.id}>
                            {category.name}
                        </div>
                    )
                }
            </div>
        );
    }
}
 
export default Category;