import React,{Component} from 'react';
import axios from 'axios';

class Answers extends Component{
	constructor(props){
		super(props)
		this.state={
			answer:[],
			answer_id:[]
		    
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
        list.setAttribute('answer_id',[i])   // trying to assign the data id so that we can delete.
        list.innerHTML = res.data.data[i].answer
        doc.appendChild(list);
        let button = document.createElement('button');
        button.setAttribute('id',[i])
        button.innerHTML='Delete'
        button.addEventListener('click',this.delet)  //had to create a click event because the button is being created with the info coming from our axios call.
        doc.appendChild(button);

      })
    })
}

		answering(){
				console.log('answer works')
		 let url = 'https://project-overflow-db.herokuapp.com/answers'
		 let resp = document.getElementById('answ').value
		 console.log(resp)
		 axios.post(url,{
		 	answer:resp,
		 	
		 })

		}
		delet(){
			console.log('delete')
			let li = document.getElementsByTagName('li')
			let target = document.getElementById('0')
			console.log(target)
			console.log(li)
			let url = ('https://project-overflow-db.herokuapp.com/answers/' + target)
			/*let target = document.getElementById('id')*/
			if(li===target){
				return 
			axios.delete(url,{
				/*answer:target*/
				answer_id:target
			
			})
			}
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