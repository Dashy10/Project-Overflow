import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Questions from './components/questions';
import Topics from './components/Topics';
import Login from './components/Login';
import axios from 'axios';
import Rreact from './components/Rreact';
import Express from './components/express';
import JavaScriptInfo from './components/JavaScriptInfo';
import Node from './components/node';

import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resource: [],
      allQuestions: [],
      search: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submitted!', event);
    let query = document.getElementById('newVal').value.toLowerCase();
    window.location.assign('/topics/' + query)
  }

  componentWillMount() {
    this.renderQuestions();
  }

  renderQuestions() {
    let url = 'https://project-overflow-db.herokuapp.com/questions';
    axios.get(url).then((res) => {
      console.log('do we see data Q--->', res.data.data);
      let data = res.data.data
      this.setState({
        allQuestions: data,
        search: window.location.pathname.slice(8)
      })
      console.log('show Q state-->', this.state.search)

      return data.map((e) => {
        console.log('showme the Q-->', e.question);
        return ( <li> {e.question} </li> )
      })
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Header search={this.state.search}
          onSubmit={(event) => this.handleSubmit(event)} />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path="/about" component={About}/>
            <Route exact path='/topics' component={Topics}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/topics/react' component={Rreact}/>
            <Route exact path='/topics/express' component={Express}/>
            <Route exact path='/topics/javascript' component={JavaScriptInfo}/>
            <Route exact path='/topics/nodejs' component={Node}/> {/* <Route exact path='/questions' component={Questions} /> */}
            <Route path="/questions/:id" component={Questions}></Route>
          </Switch>
          <Footer/>
        </div>
      </Router>

    );
  }
}

export default App;
