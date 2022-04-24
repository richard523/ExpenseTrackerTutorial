import React, { Component } from 'react';
import AppNav from './AppNav';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import {Container, Form, FormGroup, Button, Label, Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import Category from './Category';


class Expenses extends Component {
    state = { date : new Date(),
            isLoading : true, } 


    render() { 
        const title=<h3>Add Expense</h3>;
        const {Categories, isLoading} = this.state;

        if (isLoading)
            return(<div>Loading....</div>)

        let optionList = 
                Categories.map(category=>
                    <option id={category.id}>
                        {category.name}
                    </option>)
        
        return ( 
            <div>
                <AppNav/>
                <h2>Expenses</h2>
                <Container>
                    {title}
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <label for="title"><text>Title</text>{"\n"}</label>
                            <input type="text" name="title" id="title" 
                                onChange={this.handleChange} autoComplete="name"/>
                        </FormGroup>
                        <FormGroup>
                            <label for="category">Category </label>
                                <select>
                                    {optionList}
                                </select>



                            <input type="text" name="category" id="category" 
                                onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <label for="city">Date </label>
                            <DatePicker selected={this.state.date} onChange={this.handleChange}/>
                        </FormGroup>
                        <div className="row">
                            <FormGroup className="col-md-4 mb-3">
                                <Label for="location">Location</Label>
                                <Input type="text" name="location" id="location"/>
                            </FormGroup>
                        </div>
                        <FormGroup>
                            <Button color="primary" type="submit">Save </Button>{' '}
                            <Button color="secondary" tag={Link} to="/">Cancel </Button>
                        </FormGroup>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default Expenses;