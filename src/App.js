import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Questions from './components/questions';

import {
  BrowserRouter as Router,
  Route,
  Link, Switch,NavLink
} from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      question: ''
    }
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('submitted!');
    let query = event.target.value;
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
        <Route exact path='/questions' component={Questions} />
      </Switch>
      {/* <div className="App"> */}
      <Footer />
      {/* </div> */}
        </div>
    </Router>

    );
  }
}

export default App;
