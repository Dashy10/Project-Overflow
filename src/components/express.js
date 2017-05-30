import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Style={

    overflow: 'scroll',
    height: 357

}

class Express extends Component {

  constructor(props) {
    super(props)
    this.state = {
      resource: [],
      finddata: [],
      allQuestions: [],
      relAnswers: [],
      question:[],
      qtopic_id: [],
      aquestion_id:[],
      atopic_id:[],
      qquestion_id:[]
    }
    this.renderIng = this.renderIng.bind(this);
    this.checkNewUrl = this.checkNewUrl.bind(this);

  }
  componentDidMount() {
    this.getAllExpressDocs();
    this.renderIng();
    this.checkNewUrl()
  }

  getAllExpressDocs(props) {
    let url = 'https://project-overflow-db.herokuapp.com/documentation/express';
    axios.get(url).then((res) => {
      this.setState({resource: res.data.data})
      console.log(res.data.data)
      this.state.resource.map((e, i) => {
        /*console.log(this.state.resource)*/
        let doc = document.getElementById('expressdocs');
        let link = document.createElement('a')
        let list = document.createElement('li');
        link.setAttribute('href', res.data.data[i].url);
        list.innerHTML = res.data.data[i].topic
        link.appendChild(list)
        doc.appendChild(link);

      })
    })

  }

  checkNewUrl() {
    let newUrl = 'https://project-overflow-db.herokuapp.com/questions/2'
    axios.get(newUrl).then((res) => {

      let alldata = res.data
      this.setState({finddata: alldata,
                      allQuestions: alldata.questions,
                      relAnswers: alldata.answers,
                      qtopic_id:alldata.qtopic_id,
                      atopic_id:alldata.atopic_id,
                      aquestion_id:alldata.aquestion_id
                        })
    })
  }

  // renderIng(){
  //   let url ='https://project-overflow-db.herokuapp.com/Questions'
  // }

  renderIng() {
    let rendered = []
    if (this.state.finddata.data !== undefined) {
      let render = this.state.finddata.data.map((e) => {
        if (rendered.indexOf(e.question)) {

          rendered.push(e.question)
          return (
            <div className='questions-no-duplicate'>
              <h4>
                <Link to={'/answers'}>{e.question}</Link>
              </h4>

              <input type='text' id ='answ' placeholder='answer'/>
              <button onClick={this.answerQuestion}>Answer</button>
              <button onClick={this.deleteQuestions}>Delete</button>
              <div>
                {e.answer}
              </div>

            </div>
          );
        } else {


          return (
            <div className='questions-no-duplicate'>{e.answer}</div>
          )
        }
      });
      return render;
    }
  }

  /* askQuestion(event){
    event.preventDefault();

    let url = 'https://project-overflow-db.herokuapp.com/questions'
    console.log('The Express question button is working')
    let item = document.getElementById('ques').value;

    console.log(item);
      axios.post(url,{
        question: item,
        qtopic_id: '2',


      })

   }*/

   askQuestion(event) {
    event.preventDefault();
    let url = 'https://project-overflow-db.herokuapp.com/questions'
    let item = document.getElementById('ques').value;
    if (item !== "") {
      axios.post(url, {
        question: item,
        qtopic_id: '2'
      })
    }
    document.querySelector("#ques").value = "";

  };

 /*deleteQuestions(event){
  event.preventDefault();
  console.log('delete button works')
  url ='https://project-overflow-db.herokuapp.com/questions'
  let asked = this.state.question
      console.log(asked)
   axios.delete('https://project-overflow-db.herokuapp.com/questions').then((res =>{
    this.setState({question:'is express fun'})

    console.log(res.data.data)

  })

})*/
   /*deleteQuestions(res){
    let url = 'https://project-overflow-db.herokuapp.com/questions/'
    console.log(url)

    axios.delete(



      this.setState({
        question:
      })

    )
   }*/




 /*$('.delete').on('click', function(){
  let id = $(this).parent().attr('data-id')
  axios.delete('/comments/'+id)
  $(this).parent().remove();
  $('<hr>')
  console.log(id+'djsgdhfghsdg')
})*/

 answerQuestion(){
  console.log('answer button works')
  let url = 'https://project-overflow-db.herokuapp.com/answers'
  let respond = document.getElementById('answ').value;
  console.log(respond)
  /*axios.post(url)*/

  axios.post(url,{
        answer: respond


      })
 }






  render() {
    return (
      <div style={Style}>
        <h1>Express</h1>
        <div>{this.renderIng()} </div>
        <ul id='expressdocs'>
          <span className='documentation-title'>
            Express Documentation and Resources
          </span>

        </ul>
          <input type='text' id = 'ques'/>
          <button  onClick={this.askQuestion}>Submit</button>
          <input type='text' id ='answ' placeholder='answer'/>
          <button onClick={this.deleteQuestions}>Delete</button>

      </div>
    )
  }

}
export default Express;
