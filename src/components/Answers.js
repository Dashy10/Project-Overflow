/*import React,{Component} from 'react';
import axios from 'axios';

class Answers extends Component{
	constructor(props){
		super(props)
		this.state={
			answer:[]
		}
	}

	componentDidMount() {
    this.getAnswers();
  
  }

	getAnswers(props){
		let url = 'https://project-overflow-db.herokuapp.com/answers/4';
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
	

		render(){	
		return(
			<div>
				<h1>yolo</h1>
				<ul id='eanswers'>

				</ul>

			</div>
		)
	}
}


export default Answers*/