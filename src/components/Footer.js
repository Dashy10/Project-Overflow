import React, {Component} from 'react';

const styles = {
  backgroundColor: 'rgb(26,26,26)',
  opacity: '.7',
  color: 'white',
  height: '100 auto',
  textAlign: 'center',
  padding: '1% 0 5% 0',
  // position: 'absolute',
  right: '0',
  bottom: '0 ',

  left: '0',
  width: '100%',
  marginTop: '105px auto'
}
const projTitle = {
  fontSize: '28'
}

class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      // <div style={styles}>
      //
      // </div>
      <footer style={styles} className='site-footer'><h4 style={projTitle}>ProjectOverflow &copy; 2017</h4></footer>
    )
  }
}

export default Footer;
