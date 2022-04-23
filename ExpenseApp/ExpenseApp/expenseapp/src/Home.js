import React, { Component } from 'react';
import AppNav from './AppNav';

class Home extends React.Component {
    state = { }
    render() { 
        return (
            <div>
                <AppNav/>
                <h2 style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '100vh'}}>
                    Welcome to the Simple Expense App</h2>
            </div>
        );
    }
}
 
export default Home;