import React,{Component} from 'react';
import axios from 'axios';

class Answers extends Component{
	constructor(props){
		super(props)
		this.state={
			answer:[],
		    
		}
	}

	componentDidMount() {
    this.getAnswers();
  
  }

	getAnswers(props){
		let url = 'https://project-overflow-db.herokuapp.com/answers';
		axios.get(url).then((res) => {
        this.setState({answer: res.data.data})
        console.log('this----->',res.data.data)
        this.state.answer.map((e, i) => {
        let doc = document.getElementById('eanswers');
        let list = document.createElement('li');
        list.innerHTML = res.data.data[i].answer
        doc.appendChild(list);

      })
    })
}

		answering(){
				console.log('answer works')
		 let url = 'https://project-overflow-db.herokuapp.com/answers'
		 let resp = document.getElementById('answ').value
		 console.log(resp)
		 axios.post(url,{
		 	answer:resp
		 })

		}

  
	

		render(){	
		return(
			<div>
				<h1>Express</h1>
				<input id ='answ' />
				<button onClick={this.answering}>Answer</button>
				<ul id='eanswers'>

				</ul>

			</div>
		)
	}
}


export default Answers