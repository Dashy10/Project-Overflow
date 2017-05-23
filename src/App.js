import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Route,
  Link, Switch,NavLink
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
          <Route exact path='/'component={Home} />

        <Route exact path="/about" component={About} />
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
