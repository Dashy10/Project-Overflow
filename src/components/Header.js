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
            
            <NavDropdown eventKey={3} title="Documentation" id="nav-dropdown">
                <MenuItem eventKey={3.1} href="/eact">React</MenuItem>
                <MenuItem eventKey={1} href="/express">Express</MenuItem>
                <MenuItem eventKey={1} href="/javs">JavaScript</MenuItem>
                <MenuItem eventKey={1} href="/node">Node.js</MenuItem>
              </NavDropdown>  
          </Nav>
            <Navbar.Form pullLeft>
          {/* FormGroup does not provide on submit event. Need to wrap it with form element and attach event handler to it */}
            <form action="/questions" method="post" onSubmit={this.props.onSubmit}>
              <FormGroup >
                <FormControl id='newVal' type="text" placeholder="Search" />
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
