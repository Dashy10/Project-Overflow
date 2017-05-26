import React, {Component} from 'react';
import axios from 'axios';

const styles = {
  margin: '10%',
  textAlign: 'center',
  marginTop: '50'
}

class Questions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      finddata: [],
      allQuestions: [],
      relAnswers: []
    }
    this.renderIng = this.renderIng.bind(this);
    this.checkNewUrl = this.checkNewUrl.bind(this);
  }

  componentWillMount() {
    // this.renderQuestions();
    this.checkNewUrl();
  }

  checkNewUrl() {
    let newUrl = 'https://project-overflow-db.herokuapp.com/QA/1'
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
            <div>
              <div>
                {e.question}
              </div>
              <div>
                {e.answer}
              </div>
            </div>
          );
        } else {
          console.log(e.question, rendered, rendered.indexOf(e.question))

          return (
            <div>{e.answer}</div>
          )
        }
      });
      return render;
    }
  }

  renderNew() {
    console.log('does this STATE SHOW', this.state.allQuestions);

    return (this.state.allQuestions.map((e) => {
      // return <h1> {e.question} </h1>
      console.log('SHOW ME THE MONEY', e);
      return this.state.relAnswers.filter((f) => {
        if (f.question_id === e.question_id) {
          console.log('show me the QUESTION', e.question)
          console.log('got it', f.answer)
          return
        }
      })
    }))
  }

  renderAnswers() {
    return this.state.allQuestions.map((e, i) => {
      console.log('rendering the ANSWERS -->', e.question);
      return (
        <li>
          {e.answer}
        </li>
      )
    })
  }

  renderQuestions() {
    let url = 'https://project-overflow-db.herokuapp.com/questions';
    axios.get(url).then((res) => {
      console.log('do we see data Q--->', res.data.data);
      // let data = res.data.data
      // this.setState({
      // 	allQuestions: data
      // })
    })
  }

  renderQ() {
    return this.state.allQuestions.map((e, i) => {
      console.log('e infoooo', e.question);
      return (
        <li>
          {e.question}
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        {/* <h1 style={styles}> {this.props.match.params.id} </h1> */}

        {this.renderIng()}

        {this.props.handleSubmit}
      </div>
    )
  }
}

export default Questions;
