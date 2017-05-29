import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SingleQuestion extends Component {
  constructor(props){
    super(props)
    // console.log('show props--->', props.match.params.id);
    // console.log('show state--->', props.match.params.subject);
  }

  componentDidMount(){
    this.renderQuestion();
  }

  renderQuestion(){
    let id = parseInt(this.props.match.params.id)
    let url = 'https://project-overflow-db.herokuapp.com/QAS/' + id
    axios.get(url)
    .then((res) => {
      console.log(res.data.question);
      let data = res.data.data;
      console.log(data);
    })
  }


    render(){
      return(
        <div> 
        <h1>hello friend</h1> 
        {this.renderQuestion()}
        </div>
        )
    }
}
