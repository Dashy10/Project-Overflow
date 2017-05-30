import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const style ={
      margin: 'auto',
    display: 'table'
}

export default class SingleQuestion extends Component {
  constructor(props){
    super(props)
    this.state={
      answer:[],
      aquestion_id:[],
      atopic_id:[]
    }
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
      let data = res.data.question;
      let answ = res.data.answer;
      for(let i =0; i<data.length;i++){
      console.log('THIS IS WHAT TO LOOK AT ----->',data[i].question);
      let asked = document.createElement('h1')
      let holder = document.getElementById('holder')
      asked.innerHTML=data[i].question;
      // let li = document.createElement('li')
      // li.innerHTML=data[i].answer
      holder.appendChild(asked);
      // holder.appendChild(li);
      }
      for(let i =0; i<answ.length;i++){
        console.log('THIS IS WHAT TO LOOK AT ----->',answ);
        let holder = document.getElementById('holder');
        let li = document.createElement('li')
        li.innerHTML=answ[i].answer
        holder.appendChild(li);
      }
    })
  }
    //   data.map((e) => {
    //     if(e.qquestion_id === id){
    //       console.log(e);
    //     })
    // })

      answering(){

        let url = 'https://project-overflow-db.herokuapp.com/answers'
        let response = document.getElementById('answer').value

        console.log(response)
        axios.post(url,{
      answer:response,

      /*aquestion_id:,
      atopic_id:*/

       aquestion_id:'aquestion_id'
      
      

     })
        
      }


    render(){
      return(
        <div>
        <div id='holder'>
        <h1>hello friend</h1>
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
