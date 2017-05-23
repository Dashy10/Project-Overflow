import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'


const Instructs = () => { return <div style={styles}><p> lorem ipsum ipsum lorem</p></div>}
const styles = {
	textAlign: 'center',
	fontSize: '28'
}
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Instructs />
      <Footer />
      </div>
    );
  }
}

export default App;
