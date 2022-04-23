import React, { Component } from 'react';
import AppNav from './AppNav';
import DatePicker from "react-datepicker";

class Expenses extends Component {
    state = {  } 
    render() { 
        return ( 
            <div>
                <AppNav/>
                <h2>Expenses</h2>
            </div>
        );
    }
}
 
export default Expenses;