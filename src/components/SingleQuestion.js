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
      atopic_id: [],
      question: '',
      answer: [],
      edit: false
    }

    this.answering = this.answering.bind(this)
    this.editAnswer = this.editAnswer.bind(this)
    this.deleteAnswer = this.deleteAnswer.bind(this)
  }
  // use this to retrieve all questions
  componentDidMount() {
    let id = parseInt(this.props.match.params.id)
    let url = 'https://project-overflow-db.herokuapp.com/QAS/' + id
    axios.get(url).then((res) => {
      console.log(res.data.question[0]);
      this.setState({data: res.data.question[0], question: res.data.question[0].question, answer: res.data.answer})

    });
  }

  answering() {
    let url = 'https://project-overflow-db.herokuapp.com/answers'
    let response = document.getElementById('answer').value
    let id = this.props.match.params.id
    if (response !== "") {
      axios.post(url, {
        answer: response,
        aquestion_id: id
      }).then((res) => {
        window.location.reload();
      })
    }
    document.querySelector("#answer").value = "";
  }
  // binding
  editAnswer() {
    this.setState({edit: true})
  }

  deleteAnswer() {
    let url = 'https://project-overflow-db.herokuapp.com/answers' + id
    let id = this.props.match.params.id
    axios.delete()
  }
  render() {
    return (
      <div>
        <div id='holder'>
          <h2 id='single-question'>{this.state.question}</h2>
          <div className='answer-container'>{this.state.answer.map(res => <p className='answer-list'>{(!this.state.edit)
                ? res.answer
                : <input type="text" placeholder={res.answer}/>}
                <br />
              <button>
                Delete</button>
              <button onClick={() => this.editAnswer()}>Edit</button>
            </p>)}</div>
          {(!this.state.edit)
            ? (
              <div style={style}>
                <input id='answer' type='text' placeholder='Answer'/>
                <button className="button-margin" onClick={this.answering}>Submit</button>

              </div>
            )
            : (
              <div style={style}>
                <input id='answer' type='text' placeholder='Answer'/>
                <button className="button-margin" onClick={this.answering}>Submit</button>

              </div>
            )
}

        </div>
        <div id='sticky-footer'></div>
      </div>
    )
  }
}

// make an axios call that gets all the data
// set the state of data just pulled
// map over that data
//
// renderQuestion() {
//
//   //   let id = parseInt(this.props.match.params.id)
//   //   let url = 'https://project-overflow-db.herokuapp.com/QAS/' + id
//   //   return(
//   //   axios.get(url).then((res) => {
//   //     let data = res.data.question;
//   //     let answ = res.data.answer;
//   //     for (let i = 0; i < data.length; i++) {
//   //       console.log('THIS IS WHAT TO LOOK AT ----->', data[i].question);
//   //       let asked = document.createElement('h1')
//   //       asked.setAttribute('id', id)
//   //       console.log(asked)
//   //       let holder = document.getElementById('holder')
//   //       asked.innerHTML = data[i].question;
//   //       holder.appendChild(asked);
//   //     }
//   //     console.log('answ------', answ)
//   //     // this.setState({answ: answ})
//   //     answ = answ.map( el => <h1>{el.answer}</h1>)
//   //     console.log('answ', answ)
//   //
//   //     return answ;
//   //
//   //     // for (let i = 0; i < answ.length; i++) {
//   //     //   let holder = document.getElementById('holder');
//   //     //   let li = document.createElement('li')
//   //     //   li.innerHTML = answ[i].answer;
//   //     //   li.setAttribute('class', 'answer-list')
//   //     //   holder.appendChild(li);
//   //     // }
//   //   })
//   // )
// }
