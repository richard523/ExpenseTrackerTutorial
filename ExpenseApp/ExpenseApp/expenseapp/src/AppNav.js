import React, { Component } from 'react';
// import {Nav, NavItem, NavLink } from reactstrap;
import {
  Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, menuClass, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, NavbarText
} from 'reactstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// import $ from 'jquery';
// import Popper from 'popper.js';

class AppNav extends React.Component {
  render() {
   
    return (
      <div>
      <Navbar
        color="light"
        expand="md"
        light
      >
        <NavbarBrand href="/">
          Expense Tracker App
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <NavLink href="/Home/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Categories">
                Categories
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Expenses">
                Expenses
              </NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText>
            Simple Text
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>

    );
  }
}

export default AppNav;