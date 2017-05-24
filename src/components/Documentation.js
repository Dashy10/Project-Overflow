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
      let link = document.createElement('a')
      let list = document.createElement('li');
      link.setAttribute('href', res.data.data[i].url);
      /*anchor.innerHTML=res.data.data[i].url*/
      list.innerHTML=res.data.data[i].topic
      link.appendChild(list)
      doc.appendChild(link);
        
    })
    })
    
  }
  

  render(){
  	return(
  			<div>
  				<h1>Documentation</h1>
          <ul id='docs'>
           
          </ul>
  			</div>
  		)
  }
}