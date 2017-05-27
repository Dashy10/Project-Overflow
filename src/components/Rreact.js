import React, {Component} from 'react';
import axios from 'axios';
import {Image, Grid, Row, Col, FormControl, Button, FormGroup} from 'react-bootstrap';

const styles = {
}

const textBox = (
	<input type='text' placeholder='answer'> </input>
	)

class Rreact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      resource: [],
      finddata: [],
      allQuestions: [],
      relAnswers: [],
      newQuestion: false
    }
    console.log('REACT PAGE SHOW STATE STAUS', this.props.search)
    this.renderIng = this.renderIng.bind(this);
    this.checkNewUrl = this.checkNewUrl.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getAllReactDocs = this.getAllReactDocs.bind(this);
  }
  componentDidMount() {
    this.renderIng();
    this.checkNewUrl();
    this.getAllReactDocs();
    console.log('Whats the search -->', this.props.search)
  }

    getAllReactDocs() {
    let url = 'https://project-overflow-db.herokuapp.com/documentation/react';
    axios.get(url).then((res) => {
     let docs = this.setState({resource: res.data.data})
      console.log(res.data.data)
      this.state.resource.map((e, i) => {
        console.log('Show me the res--->', e.topic)
        return ( <li> {e.topic} </li> )
		})
      return docs
	})
}

  handleClick(){
  	console.log('button clicked')
  	this.setState({
  		newQuestion: true
  	})
  	console.log('new state', this.state)
  	console.log('new props', this.props)	
  }
  renderCommentBox(){
  	// if(this.state.newQuestion){
  		return(
  			<div>
  				<input style={{height: '35px', width: '40%', border: '1 solid gray'}} type='text' placeholder='Your Answer'></input>
  			</div>
  			)
  		}
  	// }

    checkNewUrl() {
    let newUrl = 'https://project-overflow-db.herokuapp.com/QA/2'
    axios.get(newUrl).then((res) => {
      console.log('whats new return-->', res.data);
      let alldata = res.data
      this.setState({finddata: alldata, allQuestions: alldata.questions, relAnswers: alldata.answers})
    })
  }

    renderIng() {
    let rendered = []
    if (this.state.finddata.data !== undefined) {
      let render = this.state.finddata.data.map((e) => {
        if (rendered.indexOf(e.question)) {
          console.log(e.question, rendered, rendered.indexOf(e.question))
          rendered.push(e.question)
          return (
	<Grid>
		<Row>
			<Col style={styles} xs={6} md={2}> 
				 {this.getAllReactDocs} 
   
			</Col>
			<Col style={styles} xs={12} md={6}> 
				<h4 style={{color:'blue'}}> {e.question} </h4> 
				<h5> {e.answer} </h5>
{/*	Drop btn for npw				<Button onClick={this.handleClick}>+</Button> */}
					{this.renderCommentBox()}
			</Col>
			<Col styles={styles} xs={6} md={4}>
				<h5> {e.qdate_added.slice(0,10)} </h5>
			</Col>
		</Row>
	</Grid>

          );
        } else {
          console.log(e.question, rendered, rendered.indexOf(e.question))

          return (
            <div className='questions-no-duplicate'>{e.answer}</div>
          )
        }
      });
      return render;
    }
  }

  render(){
  	return (
  		<div>
  			<Grid>
  				<Row> <h1 style={{padding: '1%'}}> REACT </h1> </Row>
					<Row>

						<form action='/topics/react' method="get" >
							<FormGroup >
							<FormControl style={{border:'5px lightgray solid'}} id='qVal' type="text" placeholder="Question"/>
							</FormGroup>
						</form>

					</Row>
					<Row>
						<Col style={styles} xs={6} md={2}> <h2> Documents </h2>  </Col>
						<Col style={styles} xs={12} md={6}> <h2> Questions </h2> </Col>
						<Col style={styles} xs={12} md={4}> <h2> Date Added </h2> </Col>
				 </Row>
  			</Grid>
  			{this.renderIng()}
  			
  		</div>
  		)
  }
}

export default Rreact;