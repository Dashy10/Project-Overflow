import React,{Component} from 'react';
import {Bootstrap, Button, DropdownButton, MenuItem, Nav, NavItem, Navbar, NavDropdown, FormGroup, FormControl} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link, Switch,NavLink
} from 'react-router-dom'
import About from './About';
import Instructions from './Instructions';
import Account from './Account';
import Documentation from './Documentation';
import Contact from './Contact';

class Header extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="header-wrapper">
        <Navbar className="navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <a id="title" href="/">ProjectOverflow</a>
            </Navbar.Brand>
          </Navbar.Header>

          <Nav>
            <NavItem href="/about">About</NavItem>
            <NavItem eventKey={2} href="/contact">Contact</NavItem>
            <NavItem href="/documentation">Documentation</NavItem>
          </Nav>
            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>
            </Navbar.Form>
            <Nav>
              <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>My Profile</MenuItem>
              </NavDropdown>
              <NavItem eventKey={1} href="#">Logout</NavItem>
            </Nav>
          </Navbar>
      </div>

    )
  }

}



export default Header;
