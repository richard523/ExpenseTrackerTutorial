import React, { Component } from 'react';
import AppNav from './AppNav';

class Home extends React.Component {
    state = { }
    render() { 
        return (
            <div>
                <AppNav/>
                <h2>Home</h2>
            </div>
        );
    }
}
 
export default Home;