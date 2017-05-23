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
        <div className='flex-wrapper'>
          <div>
            <img src="http://placehold.it/350x150"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis elementum egestas. Integer quis odio nulla. Nunc nec dolor vitae augue congue dictum ut sit amet risus. Ut a blandit orci. Etiam et sem erat. Nullam ultrices convallis ipsum id sodales. Sed aliquam a velit non auctor. Mauris auctor lorem eget ante convallis mollis. Phasellus pulvinar, lorem sit amet porta tempus, lectus diam aliquet leo, quis rutrum dolor diam sit amet est. Ut volutpat est sit amet augue facilisis rhoncus. In lacinia a dolor ut posuere. Vivamus augue enim, varius eget suscipit pharetra, viverra nec metus. Mauris hendrerit leo lacus, nec finibus lectus condimentum at. Mauris sollicitudin tristique augue vitae posuere.</p>
          </div>

          <div>
            <img src="http://placehold.it/350x150"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis elementum egestas. Integer quis odio nulla. Nunc nec dolor vitae augue congue dictum ut sit amet risus. Ut a blandit orci. Etiam et sem erat. Nullam ultrices convallis ipsum id sodales. Sed aliquam a velit non auctor. Mauris auctor lorem eget ante convallis mollis. Phasellus pulvinar, lorem sit amet porta tempus, lectus diam aliquet leo, quis rutrum dolor diam sit amet est. Ut volutpat est sit amet augue facilisis rhoncus. In lacinia a dolor ut posuere. Vivamus augue enim, varius eget suscipit pharetra, viverra nec metus. Mauris hendrerit leo lacus, nec finibus lectus condimentum at. Mauris sollicitudin tristique augue vitae posuere.</p>
          </div>

          <div>
            <img src="http://placehold.it/350x150"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis elementum egestas. Integer quis odio nulla. Nunc nec dolor vitae augue congue dictum ut sit amet risus. Ut a blandit orci. Etiam et sem erat. Nullam ultrices convallis ipsum id sodales. Sed aliquam a velit non auctor. Mauris auctor lorem eget ante convallis mollis. Phasellus pulvinar, lorem sit amet porta tempus, lectus diam aliquet leo, quis rutrum dolor diam sit amet est. Ut volutpat est sit amet augue facilisis rhoncus. In lacinia a dolor ut posuere. Vivamus augue enim, varius eget suscipit pharetra, viverra nec metus. Mauris hendrerit leo lacus, nec finibus lectus condimentum at. Mauris sollicitudin tristique augue vitae posuere.</p>
          </div>
          
        </div>
      )
  }
}



