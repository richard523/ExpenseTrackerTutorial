import React, { Component } from 'react';
// import {Route, Router, Switch} from 'react-router-dom'; old syntax
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Category from './Category';
import Home from './Home';
import Expenses from './Expenses';

class App extends Component {
    state = {}
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path='/' element = {<Home/>}/>
                    <Route exact path='/categories' element = {<Category/>}/>
                    <Route exact path='/expenses' element = {<Expenses/>}/>
                </Routes>
            </Router>
        )
    }
}

export default App;