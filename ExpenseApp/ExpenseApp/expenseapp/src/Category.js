import React, { Component } from 'react';

class Category extends React.Component {
    state = { 
        isLoading : true,
        Categories : []
    } // state is internal to a react component

    //sync : sent request then wait for response
    // async : you send request and don't have to wait? loads all components at once?
    async componentDidMount() {
        const response = await fetch('/api/categories')
        const body = await response.json();
        this.setState({Categories : body, isLoading : false});

    }
    render() { 
        const {Categories, isLoading} = this.state;
        if(isLoading)
            return <div></div>;

        return (
            <div>
                <h2>Categories</h2>
                {
                    Categories.map( category => 
                        <div id={category.id}>  
                            {category.name}
                        </div>)
                }
            </div>
        )
    }
}
 
export default Category;