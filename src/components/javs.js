import React,{Component} from 'react';
import axios from 'axios';
import {Bootstrap, ListGroup, ListGroupItem} from 'react-bootstrap';


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
		let rendered = []
		if(this.state.finddata.data !== undefined) {
			let render = this.state.finddata.data.map((e) => {
				if (rendered.indexOf(e.question)) {
					console.log(e.question, rendered, rendered.indexOf(e.question))
					rendered.push(e.question)
					return (
						<div className='questions-no-duplicate'>
							<h4> {e.question} </h4>
							<div> {e.answer} </div>
						</div>
					);
				} else {
					console.log(e.question, rendered, rendered.indexOf(e.question))

					return (
						<div className='questions-no-duplicate'>{e.answer}</div>
					)
				}
			});
			return render;
		}
	}

	render(){
		return(
			<div className='javascript-wrapper'>
				<h1>JavaScript</h1>
				<div>{
					this.renderIng()}
				</div>
				<div className='javascript-documentation'>
					<ul id ='javadocs'>
						<span className='documentation-title'>
						JavaScript Documentation and Resources
						</span>
					</ul>
				</div>
				{/* <ListGroup id='javadocs'>
	 <ListGroupItem>Item 1</ListGroupItem>
	 <ListGroupItem>Item 2</ListGroupItem>
	 <ListGroupItem>...</ListGroupItem>
 </ListGroup> */}

			</div>
		)
	}

}

export default Javs
