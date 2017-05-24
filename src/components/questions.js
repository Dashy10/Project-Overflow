import React,{Component} from 'react';

const styles = {
	margin: '10%'
}

class Questions extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div>
				loading...
				<h1 style={styles}> {this.props.match.params.id} </h1>
			<p> {console.log('show all props--->', this.props)} </p>
			<p> {console.log('match params-->', this.props.match.params.id)} </p>
				
				{this.props.handleSubmit}
			</div>
		)
	}
}

export default Questions