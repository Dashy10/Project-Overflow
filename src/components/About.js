import React,{Component} from 'react';
import {Bootstrap, Button, DropdownButton, MenuItem, Nav, NavItem, Navbar, NavDropdown, FormGroup, FormControl} from 'react-bootstrap';
import Header from './Header'
import Footer from './Footer'

export default class About extends Component {
  constructor(props){
    super(props)
  }

  render(){
  	return(
  			<div>
          About component
  			</div>
  		)
  }
}
