import React, {Component} from 'react';
import axios from 'axios';
import Search from './Search';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';

export default class Topics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resource: []
    }
  }
  componentDidMount() {
    this.getAllDocuments();
  }

  getAllDocuments(props) {
    let url = 'https://project-overflow-db.herokuapp.com/documentation';
    axios.get(url).then((res) => {
      let docs = res.data.data;
      docs.map((e, i) => {
        let doc = document.getElementById('docs');
        let link = document.createElement('a')
        let list = document.createElement('li');
        link.setAttribute('href', res.data.data[i].url);
        list.innerHTML = res.data.data[i].topic
        link.appendChild(list)
        doc.appendChild(link);
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Documentation</h1>
        <ul id='docs'></ul>
        <Switch>
          <Route exact path='/' component={Topics} />
          <Route exact path='/topics/:topic' component={Search} />          
        </Switch>
      </div>
    )
  }
}

