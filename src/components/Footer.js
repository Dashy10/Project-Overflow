import React, {Component} from 'react';

const styles = {
  backgroundColor: 'rgb(26,26,26)',
  opacity: '.7',
  color: 'white',
  height: '70',
  textAlign: 'center',
  padding: '1% 0 5% 0',
  // marginTop: '100',
  position: 'fixed',
  right: '0',
  bottom: '0',
  left: '0'
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
      <div /*style={styles}*/>
        <h4 style={projTitle}>ProjectOverflow &copy; 2017</h4>
      </div>
    )
  }
}

export default Footer;
