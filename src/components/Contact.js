import React, {Component} from 'react';
import {Image, Grid, Row, Col} from 'react-bootstrap';

const title = {
  fontSize: '36',
  textAlign: 'center',
  margin: '2.5%'
}

const styles = {
  height: '250',
  width: '250',
  margin: '2.5%'
}

const profileImages = (
  <Grid>
    <Row>
      <Col xs={6} md={4}>
        <Image style={styles} src="http://i1356.photobucket.com/albums/q732/oconnelle3/dash_zpsrcuwn7si.jpeg" circle/>
      </Col>
      <Col xs={6} md={4}>
        <Image style={styles} src="http://i1356.photobucket.com/albums/q732/oconnelle3/linkedinpic_zpsgjmixare.jpg" circle/>
      </Col>
      <Col xs={6} md={4}>
        <Image style={styles} src="http://i1356.photobucket.com/albums/q732/oconnelle3/kyle_zpssro6q31i.jpeg" circle/>
      </Col>
    </Row>
  </Grid>
);

const socialTabs = (
  <div style={{display: 'inlineBlock', width: '90%'}}>
  <img style={{height: '25px', width: '25px', borderRadius: '50%', margin: '5px' }} src='https://lh3.googleusercontent.com/00APBMVQh3yraN704gKCeM63KzeQ-zHUi5wK6E9TjRQ26McyqYBt-zy__4i8GXDAfeys=w300' />
  <img style={{height: '25px', width: '25px', borderRadius: '50%', margin: '5px'  }} src='https://pbs.twimg.com/profile_images/616309728688238592/pBeeJQDQ.png' />
  </div>
  )
  

const bioDetails = (
  <Grid>
    <Row>
      <Col xs={6} md={4}>
        <ul style={{
          listStyle: 'none'
        }} sm={6} md={3}>
          <li>Name: Lorem</li>
          <li>Username: loRem</li>
          <li> {socialTabs} </li>
        </ul>
        <p>Lorm ipsum other things and lorem stuff and thn other more things to do lorem</p>
      </Col>
      <Col xs={6} md={4}>
        <ul style={{
          listStyle: 'none'
        }} xs={6} md={4}>
          <li>Name: Lorem</li>
          <li>Username: loRem</li>
          <li> {socialTabs} </li>
        </ul>
        <p>Lorm ipsum other things and lorem stuff and thn other more things to do lorem</p>
      </Col>
      <Col xs={6} md={4}>
        <ul style={{
          listStyle: 'none'
        }} xs={6} md={4}>
          <li>Name: Lorem</li>
          <li>Username: loRem</li>
          <li> {socialTabs} </li>
          <p>Lorm ipsum other things and lorem stuff and thn other more things to do lorem</p>
        </ul>
      </Col>
    </Row>
  </Grid>
);

class Contact extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='flex-wrapper'>
        <h2 style={title}>
          Meet The Team
        </h2>
        {profileImages}
        {bioDetails}

      </div>

    )
  }
}

export default Contact;
