import React, {Component} from 'react';
import {Image, Grid, Row, Col} from 'react-bootstrap';


const gridInstance = (
  <Grid style={{margin: '1%', padding: '5%'}}>
    <Row className="show-grid">
      <Col className='aboutCols' xs={6} md={4} style={{borderRight:'1px solid black'}}>

        {/* <img style={{height: '100', width: '100'}} src='https://image.freepik.com/free-icon/question-mark_318-52837.jpg' alt='question mark'></img> */}

        <img style={{height: '100', width: '100'}} src='https://cdn2.iconfinder.com/data/icons/bold-ui/100/questionmark-512.png' alt='question mark'></img>

        <h2 style={{borderBottom: '1px solid black', padding: '1%'}}> How to Search </h2>
        <ol>
          <li> Enter a topic or keyword in the search bar above. </li>
          <li> Click on the 'Topics" Dropdown menu and select the desired subject.</li>
          <li> Once on the topics page, all related questions will be displayed. </li>
          <li> Submit a question to be posted to the given subject page. </li>
        </ol>
      </Col>
      <Col className='aboutCols' xs={6} md={4}>
      <img style={{height: '100', width: '100'}} src='http://img2.wikia.nocookie.net/__cb20130117173952/clubpenguin/images/7/7c/Exclamation_Point_Emoticon.PNG?w=240' alt='exclamation mark'></img>
      <h2 style={{borderBottom: '1px solid black', padding: '1%'}}> How to Answer </h2>
        <ol>
          <li> Click on a question to be brought to that question's page.</li>
          <li> Submit an answer by entering into the input field at the top. </li>
          <li> If you made a mistake of any kind in your answer, feel free to make an edit as well!</li>
          <li> If you would like to delete the answer entirely, that option is also available to you.</li>

        </ol>
      </Col>
    </Row>
  </Grid>
  )

class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='flex-wrapper-info'>
        {gridInstance}

      </div>
    )
  }
}

export default About;
