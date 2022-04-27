import React, { Component } from 'react';
import AppNav from './AppNav';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import {Container, Form, FormGroup, Button, Label, Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import Category from './Category';


class Expenses extends Component {
    	
    // 0	
    // id	100
    // expensedate	"2020-05-30T23:38:23.085Z"
    // description	"Maryland Trip"
    // location	"Maryland"
    // category	
    // id	1
    // name	"Travel"

    emptyItem = {
        id : '103',
        expensedate : new Date(),
        description : '',
        location : '',
        categories : [1, 'Travel']
    }



    state = { 
            isLoading : true,
            expenses : [],
            Categories : [],
            date : new Date(),
            item : this.emptyItem
         } 
    
    async componentDidMount() {
        const response = await fetch('/api/categories');
        const body = await response.json();
        this.setState({Categories : body, isLoading : false})
    }


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
                
                <Container>
                    {title}
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="title"><text>Title</text>{"\n"}</Label>
                            <input type="text" name="title" id="title" 
                                onChange={this.handleChange} autoComplete="name"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="category">Category </Label>
                                <select>
                                    {optionList}
                                </select>
                            <input type="text" name="category" id="category" 
                                onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="city">Date </Label>
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