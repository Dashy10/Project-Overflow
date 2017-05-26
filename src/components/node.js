import React, {Component} from 'react';
import axios from 'axios';

class Node extends Component {

  constructor(props) {
    super(props)
    this.state = {
      resource: [],
      finddata: [],
      allQuestions: [],
      relAnswers: []
    }
    this.renderIng = this.renderIng.bind(this);
    this.checkNewUrl = this.checkNewUrl.bind(this);
  }
  componentDidMount() {
    this.getAllNodeDocs();
    this.renderIng();
    this.checkNewUrl();
  }

  getAllNodeDocs(props) {
    let url = 'https://project-overflow-db.herokuapp.com/documentation/nodejs';
    axios.get(url).then((res) => {
      this.setState({resource: res.data.data})
      console.log(res.data.data)
      this.state.resource.map((e, i) => {
        console.log(this.state.resource)
        let doc = document.getElementById('nodedocs');
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
    let newUrl = 'https://project-overflow-db.herokuapp.com/QA/4'
    axios.get(newUrl).then((res) => {
      console.log('whats new return-->', res.data);
      let alldata = res.data
      this.setState({finddata: alldata, allQuestions: alldata.questions, relAnswers: alldata.answers})
    })
  }

  renderIng() {
    let rendered = []
    if (this.state.finddata.data !== undefined) {
      let render = this.state.finddata.data.map((e) => {
        if (rendered.indexOf(e.question)) {
          console.log(e.question, rendered, rendered.indexOf(e.question))
          rendered.push(e.question)
          return (
            <div className='questions-no-duplicate'>
              <h4>
                {e.question}
              </h4>
              <div>
                {e.answer}
              </div>
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

  render() {
    return (
      <div className='node-wrapper'>
        <h1>Node.js</h1>
        <div className='flex-wrapper-no-duplicate'>
          <div id='resource-column'>
            <ul id='nodedocs'>
              <span className='documentation-title'>
                Node.js Documentation and Resources
              </span>
            </ul>
          </div>
          <div id='question-column'>
            {this.renderIng()}
          </div>
        </div>

      </div>


    )
  }

}

export default Node;
