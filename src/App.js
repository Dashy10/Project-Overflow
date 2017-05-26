import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Questions from './components/Questions';
import Topics from './components/Topics';
import Login from './components/Login';
import axios from 'axios';
import ReactInfo from './components/ReactInfo';
import Express from './components/Express';
import JavaScriptInfo from './components/JavaScriptInfo';
import Node from './components/Node';

import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';

let Infant = ({match}) => {
  return <div>
    match.params.id: {match.params.id}
  </div>
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resource: [],
      question: '',
      allQuestions: []
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submitted!');
    let query = document.getElementById('newVal').value;
    console.log(query);
    this.setState({question: this.query})
    window.location.assign('/questions/' + query)
  }

  componentWillMount() {
    this.renderQuestions();
  }

  renderQuestions() {
    let url = 'https://project-overflow-db.herokuapp.com/questions';

    axios.get(url).then((res) => {
      console.log('do we see data Q--->', res.data.data);
      let data = res.data.data
      this.setState({allQuestions: data})

      return data.map((e) => {
        console.log('showme the Q-->', e.question);
        return (
          <li>
            {e.question}
          </li>
        )

      })

    })
  }

  render() {
    return (
      <Router>
        <div>
          <Header onSubmit={(event) => this.handleSubmit(event)}/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path="/about" component={About}/>
            <Route exact path='/topics' component={Topics}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/topics/react' component={ReactInfo}/>
            <Route exact path='/topics/express' component={Express}/>
            <Route exact path='/topics/javascript' component={JavaScriptInfo}/>
            <Route exact path='/topics/nodejs' component={Node}/> {/* <Route exact path='/questions' component={Questions} /> */}
            <Route path="/questions/:id" component={Questions}></Route>
          </Switch>
          {/*<Route path="/:id" component={Infant}></Route>  Order matters*/}
          <Footer/>
        </div>
      </Router>

    );
  }
}

export default App;
