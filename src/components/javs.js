import React,{Component} from 'react';
import axios from 'axios'


class Javs extends Component{
	constructor(props){
    super(props)
    this.state={
      resource:[],
      finddata: [],
	  allQuestions: [],
      relAnswers: [],
    }
        this.renderIng = this.renderIng.bind(this);
		this.checkNewUrl = this.checkNewUrl.bind(this);
  }
componentDidMount(){
    this.getAllDocuments();
    this.renderIng();
    this.checkNewUrl()
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



  checkNewUrl(){
		let newUrl = 'https://project-overflow-db.herokuapp.com/QA/1'
		axios.get(newUrl)
		.then((res) => {
			console.log('whats new return-->', res.data);
			let alldata = res.data
			this.setState({

				finddata: alldata,
				allQuestions: alldata.questions,
        relAnswers: alldata.answers
			})
		})
	}




					


	renderIng(){
		if(this.state.finddata.data !== undefined) {
	console.log('Showing NEW RENDER DATA', this.state.finddata.data);

		let render = this.state.finddata.data.map((e) => {
			console.log("array of objects =====>", e);
			return (<div>
							<ul> {e.question} </ul>
							<li> {e.answer} </li>
							</div>
				);
		});
		return render;
		}
	}
	
	render(){
		return(
			<div>
				<h1>JavaScript</h1>
					<ul id ='javadocs'>
						{this.renderIng()}
					</ul>
			</div>
		)
	}
	
}

export default Javs