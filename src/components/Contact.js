import React,{Component} from 'react';
import { Image, Grid, Row, Col } from 'react-bootstrap';
// import Header from './Header'
// import Footer from './Footer'
const title = {
  fontSize: '36',
  textAlign: 'center',
  margin: '2.5%'
}

const styles = {
  height: '300',
  width: '300',
  margin: '2.5%'
}

const profileImages = (
  <Grid>
    <Row>
      <Col xs={6} md={4}>
        <Image style={styles} src="http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg" circle />
      </Col>
      <Col xs={6} md={4}>
        <Image style={styles} src="http://placekitten.com.s3.amazonaws.com/homepage-samples/200/286.jpg" circle />
      </Col>
      <Col xs={6} md={4}>
        <Image style={styles} src="http://placekitten.com.s3.amazonaws.com/homepage-samples/96/139.jpg" circle />
      </Col>
    </Row>
  </Grid>
);

const bioDetails = (
  <Grid>
    <Row>
      <Col xs={6} md={4}>
        <ul style={{listStyle: 'none'}} sm={6} md={3}>
          <li>Name: Lorem</li>
          <li>Username: loRem</li>
          <li>LinkedIn: Ipsum</li>
          <li>Github: Other stuff</li>
        </ul>
        <p>Lorm ipsum other things and lorem stuff and thn other more things to do lorem</p>
      </Col>
      <Col xs={6} md={4}>
        <ul style={{listStyle: 'none'}} xs={6} md={4}>
          <li>Name: Lorem</li>
          <li>Username: loRem</li>
          <li>LinkedIn: Ipsum</li>
          <li>Github: Other stuff</li>
        </ul>
        <p>Lorm ipsum other things and lorem stuff and thn other more things to do lorem</p>
      </Col>
      <Col xs={6} md={4}>
        <ul style={{listStyle: 'none'}} xs={6} md={4}>
          <li>Name: Lorem</li>
          <li>Username: loRem</li>
          <li>LinkedIn: Ipsum</li>
          <li>Github: Other stuff</li>
          <p>Lorm ipsum other things and lorem stuff and thn other more things to do lorem</p>
        </ul>
      </Col>
    </Row>
  </Grid>
);

export default class About extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
        <div className='flex-wrapper'>
        <h2 style={title}> Meet The Team </h2>
          {profileImages}
          {bioDetails}
          
        </div>
          
      )
  }
}



