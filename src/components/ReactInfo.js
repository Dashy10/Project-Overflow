import React, {Component} from 'react';
import axios from 'axios';
import {Image, Grid, Row, Col} from 'react-bootstrap';

class ReactInfo extends Component {

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
    this.getAllReactDocs();
    this.renderIng();
    this.checkNewUrl()
  }

  getAllReactDocs(props) {
    let url = 'https://project-overflow-db.herokuapp.com/documentation/react';
    axios.get(url).then((res) => {
      this.setState({resource: res.data.data})
      console.log(res.data.data)
      this.state.resource.map((e, i) => {
        console.log(this.state.resource)
        let doc = document.getElementById('reactdocs');
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
    let newUrl = 'https://project-overflow-db.herokuapp.com/QA/3'
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
                <Grid>
                  <Row className="show-grid">
                   <h1>React</h1>
                    <Col className='aboutCols' xs={6} md={4} style={{borderRight:'1px solid black'}}>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={4} style={{borderRight:'1px solid black'}}>
                      <h4>React Documentation and Resources<h4>
                    </Col>
                    <Col xs={6} md={4} style={{borderRight:'1px solid black'}}>
                      <h4> {e.question} </h4>
                    </Col>



                  </Row>
                </Grid>


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
      <div className='react-wrapper'>

            {this.renderIng()}

      </div>
    )
  }
}

export default ReactInfo;
