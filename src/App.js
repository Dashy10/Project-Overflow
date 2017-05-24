import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Questions from './components/questions';
import Documentation from './components/Documentation';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Route,
  Link, Switch,NavLink
} from 'react-router-dom';

let Infant = ({ match }) => { return <div> match.params.id: { match.params.id } </div> }

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      resource:[],
      question: '',
    }
  }

  componentDidMount(){
    this.getAllDocuments();

  }

  getAllDocuments(){
  	let url = 'https://project-overflow-db.herokuapp.com/documentation';
  	axios.get(url)
  	.then((res) =>{
  		console.log(res.data)
  	})
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('submitted!');
    let query = document.getElementById('newVal').value;
    console.log(query);

  }
  render() {
    return (
      <Router>
        <div>
          <Header onSubmit={(event) => this.handleSubmit(event)} />
          <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path='/documentation' component={Documentation} />
        {/* <Route exact path='/questions' component={Questions} /> */ }
        <Route path="/questions/:id" component={Questions}></Route>  
      </Switch>
      {/*<Route path="/:id" component={Infant}></Route>  Order matters*/}
      <Footer  />
        </div>
    </Router>

    );
  }
}

export default App;
