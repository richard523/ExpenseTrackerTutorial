import React, { Component } from 'react';
import AppNav from './AppNav';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import {Table, Container, Form, FormGroup, Button, Label, Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import Moment from 'react-moment'
// import Category from './Category';


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
        description : '',
        expensedate : new Date(),
        id : 104,
        location : '',
        categories : {id: 1, name: 'Travel'}
    }

    constructor(props) {
        super(props)
        this.state = {  //first time object component is loaded
            isLoading : true,
            Categories : [],
            Expenses : [],
            date : new Date(),
            item : this.emptyItem
         }  

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange(this);

        
    }

    async handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.item);
        const item = this.state.item;


        await fetch(`/api/expenses`, {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },

            body : JSON.stringify(item),
        }).then(response => response.json());
        console.log(item);
        
        console.log(this.state.item);
        event.preventDefault();
        this.props.router.push("/expenses");
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
        console.log(this.state.item);
    }

    handleDateChange(date){
        let item={...this.state.item};
        item.expensedate = date;
        this.setState({item})
    }

    async remove(id) {
        await fetch(`/api/expenses/${id}` , {
            method : 'DELETE' ,
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        }).then(() => {
            let updatedExpenses = [...this.state.Expenses].filter(i => i.id !== id); // iterate through components in Expenses; make sure i.id 
            this.setState({Expenses : updatedExpenses})
        });
    }
    
    async componentDidMount() {
        const response = await fetch('/api/categories');
        const body = await response.json();
        this.setState({Categories : body, isLoading : false})

        const responseExp = await fetch('/api/expenses');
        const bodyExp = await responseExp.json();
        this.setState({Expenses : bodyExp, isLoading : false})
    }

    


    render() { 
        const title=<h3>Add Expense</h3>;
        const {Categories} = this.state;
        const {Expenses, isLoading} = this.state;

        if (isLoading)
            return(<div>Loading....</div>)

        let optionList = 
                Categories.map(category=>
                    <option key={category.id}>
                        {category.name}
                    </option>)

        let rows =
                Expenses.map( expense => 
                        <tr key={expense.id}>
                            <td>{expense.description}</td>
                            <td>{expense.location}</td>
                            <td><Moment date = {expense.expensedate} format ="YYYY/MM/DD"></Moment></td>
                            {/* <td>{expense.category.name}</td> */}
                            <td><Button size="m" color = "danger" onClick= { () => this.remove(expense.id)}>Delete </Button></td>

                        </tr>
                    
                    )
        
        return ( 
            
            <div>
                <AppNav/>
                
                <Container>
                    {title}
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="description"><p>Title</p>{"\n"}</Label>
                            <input type="description" name="description" id="description" 
                                
                                onChange={this.handleChange} autoComplete="name"/>

                        </FormGroup>
                        <FormGroup>
                            <Label for="category">Category </Label>
                                <select onChange = {this.handleChange}>
                                    {optionList}
                                </select>
                        </FormGroup>
                        <FormGroup>
                            <Label for="city">Date </Label>
                            
                            <DatePicker selected={this.state.item.expensedate} onChange={this.handleDateChange}/>

                        </FormGroup>
                        <div className="row">
                            <FormGroup className="col-md-4 mb-3">
                                <Label for="location">Location</Label>
                                <Input type="text" name="location" id="location" onChange={this.handleChange}/>
                            </FormGroup>
                        </div>
                        <FormGroup>
                            <Button color="primary" type="submit">Save </Button>{' '}
                            <Button color="secondary" tag={Link} to="/">Cancel </Button>
                        </FormGroup>
                    </Form>
                </Container>


                {''}
                <Container>
                    <h3>Expense List</h3>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width = "20%">Description</th>
                                <th width = "10%">Location</th>
                                <th width = "20%">Date</th>
                                <th > Category </th>
                                <th width = "10%">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </Table>
                </Container>

                
            </div>
           
        );
    }
}

export default Expenses;