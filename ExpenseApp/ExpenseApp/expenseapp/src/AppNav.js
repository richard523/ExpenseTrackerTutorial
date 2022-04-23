import React, { Component } from "react";
// import {Nav, NavItem, NavLink } from reactstrap;
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  menuClass,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
// import $ from 'jquery';
// import Popper from 'popper.js';

class AppNav extends React.Component {
  render() {
    return (
      <div>
        {/* <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script> */}
        <Navbar color="dark" expand="md">
          <NavbarBrand href="/"><p class = "text-secondary ">Simple Expense Tracker App</p></NavbarBrand>
          {/*
          <div class="collapse navbar-collapse">
              <ul class="nav navbar-nav">
                  <li><a href="">Page 1</a>
                  </li>
                  <li><a href="">Page 2</a>
                  </li>
                  <li><a href="">Page 3</a>
                  </li>
              </ul>
          </div> */}
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="/"><p class = "text-secondary ">Home</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Categories"><p class = "text-secondary ">Categories</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Expenses"><p class = "text-secondary ">Expenses</p></NavLink>
              </NavItem>
            </Nav>
            {/* <NavbarText>
              Secret Text
            </NavbarText> */}
            
          </Collapse>
        </Navbar>
      </div>

    );
  }
}

export default AppNav;
