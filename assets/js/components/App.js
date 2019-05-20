import React, { Component} from 'react'
import Navbar from './Navbar'
import Content from './Content'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
      dMode: false
    }
    this.darkMode = this.darkMode.bind(this);
  }
  darkMode(event) {
    let temp = document.getElementById("dark");
    if (event.target.className == "") {
      temp.classList.add("mode");
      this.setState({
        dMode: true
      });
    } else {
      temp.classList.remove("mode");
      this.setState({
        dMode: false
      });
    }
  }
  render () {
    return (
    <div className={this.state.dMode == true ? 'dMode' : ''}>
      <Navbar darkMode={this.darkMode}/>
      <Content />
    </div>)
  }
}

