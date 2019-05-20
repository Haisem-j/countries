import React, { Component } from "react";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe",
    };
  }
  render() {
    console.log(this.state);
    return (
      <nav>
        <div className="title">
          <h1>Where in the world?</h1>
        </div>
        <div className={""} id="dark" onClick={this.props.darkMode}>
          <i className="far fa-moon" />
          Dark mode
        </div>
      </nav>
    );
  }
}
