import React,{Component} from 'react';
const Instructs = () => { return <div style={styles}><p> This is the home component</p></div>}
const styles = {
	textAlign: 'center',
	fontSize: '28'
}


class Home extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Instructs />
    )
  }
}



export default Home;
