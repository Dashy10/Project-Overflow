import React,{Component} from 'react';
import axios from 'axios'

export default class Documentation extends Component {
  constructor(props){
    super(props)
    this.state={
      resource:[]
    }
  }
componentDidMount(){
    this.getAllDocuments();
    /*axios
    .get('https://project-overflow-db.herokuapp.com/documentation')
    .then(res => this.setState({ resource: res.data }))*/
  }

  getAllDocuments(props){
    let url = 'https://project-overflow-db.herokuapp.com/documentation';
    axios.get(url)
    
    .then((res) =>{
      this.setState({
        resource: res.data.data
      })
      
      this.state.resource.map((e,i)=>{
      console.log(this.state.resource)
      let doc = document.getElementById('docs');
      let list = document.createElement('li');
      list.innerHTML=res.data.data
      doc.appendChild(list);
        
    })
    })
    
  }
  

  render(){
  	return(
  			<div>
  				Documentation
          <ul id='docs'>
           
          </ul>
  			</div>
  		)
  }
}