import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const style = {
  margin: 'auto',
  display: 'table'
}

export default class SingleQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: [],
      aquestion_id: [],
      atopic_id: []
    }

    this.answering = this.answering.bind(this)
  }

  componentDidMount() {
    console.log('show state', this.props)
    this.answering();
  }

  renderQuestion() {
    let id = parseInt(this.props.match.params.id)
    let url = 'https://project-overflow-db.herokuapp.com/QAS/' + id

    axios.get(url).then((res) => {
      let data = res.data.question;
      let answ = res.data.answer;
      for (let i = 0; i < data.length; i++) {
        console.log('THIS IS WHAT TO LOOK AT ----->', data[i].question);
        let asked = document.createElement('h1')
        asked.setAttribute('id', id)
        console.log(asked)
        let holder = document.getElementById('holder')
        asked.innerHTML = data[i].question;
        holder.appendChild(asked);
      }

      for (let i = 0; i < answ.length; i++) {
        let holder = document.getElementById('holder');
        let li = document.createElement('li')
        li.innerHTML = answ[i].answer;
        li.setAttribute('class', 'answer-list')
        holder.appendChild(li);
      }
    })
  }

  answering() {
    let url = 'https://project-overflow-db.herokuapp.com/answers'
    let response = document.getElementById('answer').value
    let id = this.props.match.params.id
    if (response !== "") {
      axios.post(url, {
        answer: response,
        aquestion_id: id
      })
    }
    document.querySelector("#answer").value = "";
  }
  render() {
    return (
      <div>
        <div id='holder'>

          {this.renderQuestion()}
          <div style={style}>
            <input id='answer' type='text' placeholder='Answer'/>
            <button onClick={this.answering}>Submit</button>
          </div>

        </div>
        <div id='sticky-footer'></div>
      </div>
    )
  }
}
