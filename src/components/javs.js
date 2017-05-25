import React,{Component} from 'react';
import axios from 'axios'


class Javs extends Component{
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
    let url = 'https://project-overflow-db.herokuapp.com/documentation/javascript';
    axios.get(url)
    	
    .then((res) =>{
      this.setState({
        resource: res.data.data
      })
      console.log(res.data.data)
      this.state.resource.map((e,i)=>{
      console.log(this.state.resource)
      let doc = document.getElementById('javadocs');
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
				<h1>JavaScript</h1>
					<ul id ='javadocs'>

					</ul>
			</div>
		)
	}
	
}

export default Javs