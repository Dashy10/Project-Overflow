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
  			<div className='flex-wrapper-info'>
          
            
                <h1>Looking For An Answer?</h1> 
                  <ul>
                    <li>ldairgq</li>
                    <li>sarjgkvbqie</li>
                    <li>krjghqohei</li>
                    <li>jehrqbfhuerbc</li>
                    <li>alkjrsbfqle</li>
                  </ul>

                  <h1>Answering a Question?</h1>
                  <ul>
                    <li>jdfgbkuywrb</li>
                    <li>asakfjgbve</li>
                    <li>srjglfqeuf</li>
                    <li>sarhfqeuyrfq</li>
                    <li>lrgoqfute</li>
                  </ul>
            

            

  			</div>
  		)
  }
}
