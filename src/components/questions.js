import React,{Component} from 'react';
import axios from 'axios'

const styles = {
	margin: '10%'
}

class Questions extends Component{
	constructor(props){
		super(props)
		this.state = {
			allQuestions: [],
		}
	}

	componentWillMount(){
		this.renderQuestions();
	}

	renderQuestions(){
		let url = 'https://project-overflow-db.herokuapp.com/questions';

		axios.get(url)
		.then((res) => {
		console.log('do we see data Q--->', res.data.data);
		let data = res.data.data
		this.setState({
			allQuestions: data
		})
	})
}

	renderQ(){
		console.log('renderQ allQssss', this.state.allQuestions);
		return this.state.allQuestions.map((e, i) => {
			console.log('e infoooo', e.question);
		return (
			<li> {e.question} </li>
			)
		})

			
	}

	render(){
		return(
			<div>
				loading...	
				<h1 style={styles}> {this.props.match.params.id} </h1>
			<ul>  {this.renderQ()}  </ul>
					
				

				{this.props.handleSubmit}
			</div>
		)
	}
}

export default Questions