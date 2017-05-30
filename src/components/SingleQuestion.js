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
    // this.renderQuestion();
  }

  renderQuestion(){
    let id = parseInt(this.props.match.params.id)
    let url = 'https://project-overflow-db.herokuapp.com/QAS/' + id
    
    axios.get(url)
    .then((res) => {
      let data = res.data;
      
      console.log(data);
      let asked = document.createElement('h1')
      let holder = document.getElementById('holder')
      asked.innerHTML=data.question;
      let li = document.createElement('li')
      li.innerHTML=data.answer
      holder.appendChild(asked);
      holder.appendChild(li);
    })
  }
    //   data.map((e) => {
    //     if(e.qquestion_id === id){
    //       console.log(e);
    //     })
    // })



    render(){
      return(
        <div id='holder'> 
        <h1>hello friend</h1> 
        {this.renderQuestion()}
        </div>
        )
    }
}
