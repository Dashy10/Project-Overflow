import React,{Component} from 'react';
import {Bootstrap, Button, DropdownButton, MenuItem, Nav, NavItem, Navbar, NavDropdown, FormGroup, FormControl} from 'react-bootstrap';

const styles = {
	backgroundColor: 'rgb(26,26,26)',
	opacity: '.7',
	color: 'white',
	height: '70',
	textAlign: 'center',
	padding: '2.5% 0',
	position: 'fixed',
  right: '0',
  bottom: '0',
  left: '0'
}
const projTitle = {
	fontSize: '28'
}

export default class Footer extends Component {
  constructor(props){
    super(props)
  }

  render(){
  	return(
  			<div style={styles}>
  				<h4 style={projTitle}>ProjectOverflow &copy; 2017</h4>
  			</div>
  		)
  }
}
