import React,{Component} from 'react';

class Questions extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div>
				loading...
				{this.props.handleSubmit}
			</div>
		)
	}
}

export default Questions