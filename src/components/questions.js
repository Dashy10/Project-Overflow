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
				allQuestions: alldata.question,
				relAnswers: alldata.answers
			})
		})
	}

// 	renderNew(){
// 		console.log('does this STATE SHOW', this.state.finddata);
// 		let x = this.state.finddata;
// 		console.log('THIS IS THE XXXXXXX-->', x);
// 		console.log('CONVERT TO ARRAY', Object.values(x));

// 		return (this.state.allQuestions.map((e) =>{
// 			var ques = <h1> {e.question} </h1>
// 			return ques
// 			console.log('SHOW ME THE MONEY',e.question);
// 			return this.state.relAnswers.filter((f) => {
// 					if(f.question_id === e.question_id){
// 						console.log('show me the QUESTION', e.question)		 
// 						console.log('got it', f.answer)
// 						return ques
// 					}
// 			})
// 		})
// 	)
// }


					


	renderAnswers(){
		return this.state.allQuestions.map((e, i) => {
		console.log('rendering the ANSWERS -->', e.question);
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
			
				

				{this.props.handleSubmit}
			</div>
		)
	}
}

export default Questions