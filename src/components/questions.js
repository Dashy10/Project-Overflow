import React,{Component} from 'react';
import axios from 'axios'

const styles = {
	margin: '10%',
	textAlign: 'center',
	marginTop: '50'
}

class Questions extends Component{
	constructor(props){
		super(props)
		this.state = {
			finddata: [],
			allQuestions: [],
			relAnswers: [],
		}
	}

	componentWillMount(){
		this.renderQuestions();
		this.checkNewUrl();
	}

	checkNewUrl(){
		let newUrl = 'https://project-overflow-db.herokuapp.com/QA/1'
		axios.get(newUrl)
		.then((res) => {
			console.log('whats new return-->', res.data);
			let alldata = res.data
			this.setState({
				finddata: res.data,
				allQuestions: alldata.questions,
				relAnswers: alldata.answers
			})
		})
	}

	renderNew(){
		console.log('does this STATE SHOW', this.state.finddata);
		let x = this.state.finddata;
		console.log('CONVERT TO ARRAY', Object.values(x));
		let y = Object.values(x);
		console.log('THIS IS Y-->', y);
		y.map((data) => {
			console.log('SPLITTING ARRAY -->', data);
			console.log('SPLITTING Object -->', data[0]);
			
		})
		return this.state.relAnswers.map((e, i) => {
			console.log('RENDERING NEW info-->', e.answers);
			return ( <p> {e.answers} </p> )
		})
	}

	renderAnswers(){
		return this.state.relAnswers.map((e, i) => {
		console.log('rendering the ANSWERS -->', e.answer);
		return (
		<li> {e.answer} </li>
		)
		})
	}

	renderQuestions(){
		let url = 'https://project-overflow-db.herokuapp.com/questions';

		axios.get(url)
		.then((res) => {
		console.log('do we see data Q--->', res.data.data);
		let data = res.data.data
		// this.setState({
		// 	allQuestions: data
		// })
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
				<h1 style={styles}> {this.props.match.params.id} </h1>
			
				{this.renderNew()}	

				{this.props.handleSubmit}
			</div>
		)
	}
}

export default Questions