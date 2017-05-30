import React, {Component} from 'react';
import axios from 'axios';
import {Grid, Row, Col, FormControl, Button, FormGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const styles = {
  overflow: 'scroll'
}

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      answers: [],
      docs: [],
      search: this.props.match.params.topic.toUpperCase(),
     qtopic_id: 0,
    }
    this.renderAll = this.renderAll.bind(this);
    this.renderQuestions = this.renderQuestions.bind(this);
    this.handleSubmitQ = this.handleSubmitQ.bind(this);
    this.renderDocs = this.renderDocs.bind(this);
  }

  componentDidMount(){
    this.renderQuestions(); //Render data on page load
    this.renderAll();
    this.renderDocs();
  }
  renderQuestions(){
    //Calls on all Questins + Answers related to topic
  let url = 'https://project-overflow-db.herokuapp.com/questions/' + this.props.match.params.topic;
  axios.get(url).then((res) => {
    let store = res.data.data
    // console.log('SHOW ME THE STORED DATA==>', store);
    this.setState({
      questions: store,
    })
    // console.log('WHat this show? Only state??', this.state);     
   })
  }

  renderAll(){
  let rendered = [];    //store all rendered values to prevent dupes
    // if (this.state.questions !== undefined) {
    let render = this.state.questions.map(e => {
      // console.log('Return the MAPPING===>', e);
      // if(rendered.indexOf(e.question)){
      //   rendered.push(e.question)  
        return ( 
  <Row>
    <Col style={styles} xs={4} md={2}>   
    </Col>
    <Col style={styles} xs={4} md={4}>
      <Link to={`/${e.question_sub}/answers/${e.qquestion_id}`}> <h4 key={e.qquestion_id}> {e.question} </h4> </Link>  
    </Col>
    <Col style={styles} xs={4} md={3}>
      <h5> {e.qdate_added.slice(0,10)} </h5>
    </Col>
    <Col style={styles} xs={4} md={1}>
      <div style={{fontSize: '22'}}> &uarr; </div>
    </Col>
    <Col style={styles} xs={4} md={1}>
      <div style={{fontSize: '22'}}> &darr; </div>
    </Col>
    <Col style={styles} xs={4} md={1}>
      <h5> 0 </h5>
    </Col>
  </Row>
 )
 })
    return ( 
      <Grid> 
      {render} 
      </Grid> 
      )
    }
  

  handleSubmitQ(e){
  e.preventDefault();
  // this.findQuestionId()  Swtich was working but not setting New State ID????
  console.log('SHOW ME STATE ID', this.props);
  let newQuestion = document.getElementById('qVal').value;
  let sub = this.state.search.toLowerCase();
  let id = this.state.qtopic_id 
    //Assign topics to a number to querying purposes
    switch(sub) {
      case 'javascript': id = 1;
      break;
      case 'express': id = 2;
      break;
      case 'react': id = 3;
      break;
      case 'node': id = 4;
      break;
    }
    console.log('TALK TO ME ABOUT NEW ID DOG===>', id);
    // console.log('HERES The new SUB & ID -->', typeof sub, sub, id);
    let url = 'https://project-overflow-db.herokuapp.com/questions';
    axios.post(url, {
      question: newQuestion,
      qtopic_id: id,
      question_sub: sub,
    })
  // this.renderAll();
  }

  renderDocs(){
    let sub = this.props.match.params.topic;
    let url = 'https://project-overflow-db.herokuapp.com/documentation/' + sub;
    axios.get(url).then(res => {
     this.setState({
      docs: res.data.data,
    })
    console.log('SHOW res===>', res)
  })
 }

render(){
  //Docs will only render if they are loaded into state
  console.log('SHOW STATE DOCS==>',this.state.docs);
  let docsRender = this.state.docs.length &&
      this.state.docs.map(e => {
        return <div> 
        <a href={e.url} target='_blank'>    {e.topic} </a>
        </div>
      })
  return(
    <div>
    <Grid >
      <Row> <h1> {this.state.search} </h1> </Row>
      <Row>
          <form onSubmit={this.handleSubmitQ}>
            <FormGroup >
            <FormControl style={{border:'5px lightgray solid'}} id='qVal' type="text" placeholder="Question"/>
            </FormGroup>
          </form>
      </Row> 
      <Row>
        <Col style={styles} xs={4} md={2}> <h2> Documents </h2>
          {docsRender}
          </Col>   
        <Col style={styles} xs={4} md={4}> <h2> Questions </h2> </Col>
        <Col style={styles} xs={4} md={3}> <h2> Date Added </h2> </Col>
        <Col style={styles} xs={4} md={1}> <h2>  </h2> </Col>
        <Col style={styles} xs={4} md={1}> <h2>  </h2> </Col>
        <Col style={styles} xs={4} md={1}> <h2> Count </h2> </Col>       
      </Row> 
    </Grid>    
      {this.renderAll()} 
    </div>
    )
  }
}


