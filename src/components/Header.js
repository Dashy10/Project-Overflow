import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom'
import About from './About';
import Account from './Account';
import Topics from './Topics';
import Contact from './Contact';
import { Bootstrap, Button, DropdownButton, MenuItem, Nav, NavItem, Navbar, NavDropdown, 
        FormGroup, FormControl  } from 'react-bootstrap';

class Header extends Component {
  constructor(props) {
    super(props)

  }

render() {
  return (
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

          <NavDropdown eventKey={3} title="Topics" id="nav-dropdown">
            <MenuItem eventKey={3.1} href="/topics/react">React</MenuItem>
            <MenuItem eventKey={1} href="/topics/express">Express</MenuItem>
            <MenuItem eventKey={1} href="/topics/javascript">JavaScript</MenuItem>
            <MenuItem eventKey={1} href="/topics/nodejs">Node.js</MenuItem>
          </NavDropdown>
        </Nav>
        <Navbar.Form pullLeft>
          {/* FormGroup does not provide on submit event. Need to wrap it with form element and attach event handler to it */}
          <form action="/questions" method="post" onSubmit={this.props.onSubmit}>
            <FormGroup >
              <FormControl id='newVal' type="text" placeholder="Search"/>
            </FormGroup>
          </form>
        </Navbar.Form>
        <Nav>
          <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>My Profile</MenuItem>
            <MenuItem eventKey={1} href="#">Logout</MenuItem>
            <MenuItem eventKey={1} href="/login">Login</MenuItem>
          </NavDropdown>

        </Nav>
      </Navbar>
    </div>
  )
}
}

export default Header;
