import React,{Component} from 'react';
import axios from 'axios'


class Express extends Component{
	
constructor(props){
    super(props)
    this.state={
      resource:[]
    }
  }
componentDidMount(){
    this.getAllExpressDocs();
    
  }

  getAllExpressDocs(props){
    let url = 'https://project-overflow-db.herokuapp.com/documentation/express';
    axios.get(url)
    	
    .then((res) =>{
      this.setState({
        resource: res.data.data
      })
      console.log(res.data.data)
      this.state.resource.map((e,i)=>{
      console.log(this.state.resource)
      let doc = document.getElementById('expressdocs');
      let link = document.createElement('a')
      let list = document.createElement('li');
      link.setAttribute('href', res.data.data[i].url);
      list.innerHTML=res.data.data[i].topic
      link.appendChild(list)
      doc.appendChild(link);
        
    })
    })
    
  }
	
	render(){
		return(
			<div>
				<h1>Express</h1>
					<ul id ='expressdocs'>

					</ul>
			</div>
		)
	}
	
}
export default Express