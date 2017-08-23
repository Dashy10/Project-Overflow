import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
// import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';
import SingleQuestion from './components/SingleQuestion';
import Search from './components/Search';
import QA from './components/QA';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resource: [],
      allQuestions: [],
      search: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let query = document.getElementById('newVal').value.toLowerCase();
    let cap = query.charAt(0).toUpperCase()
    let x = query.slice(1)
    let compo = cap + x
    this.setState({search: query})
    window.location.assign('/topics/' + query)
  }

  render() {
    return (

      <Router>
        <div>
          <div className="page-wrap">
            <Header onSubmit={(event) => this.handleSubmit(event)}/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/contact' component={Contact}/>
              <Route exact path="/about" component={About}/>
              <Route exact path='/login' component={Login}/> {/* <Route exact path='/topics' component={Topics}/> */}
              <Route exact path='/:subject/answers/:id' component={SingleQuestion}/>
              <Route exact path='/topics/:topic' component={Search}/>
              <Route exact path='/topics/:topic/qa' component={QA}/>
            </Switch>
          </div>

        </div>
      </Router>

    );
  }
}

export default App;
