import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import Details from "./Details";
export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      details: false,
      detailCountry: {}
    };
    this.change = this.change.bind(this);
    this.filteredData = this.filteredData.bind(this);
    this.clicked = this.clicked.bind(this);
    this.detailChecker = this.detailChecker.bind(this);
  }

  async componentDidMount() {
    try {
      let response = await axios.get("https://restcountries.eu/rest/v2/all");
      this.setState({
        countries: response.data,
        filteredData: response.data,
        filter: "All"
      });
    } catch (error) {
      console.error(error);
    }
  }

  detailChecker(event) {
    if(this.state.details !== true){
      let newState = this.state.filteredData.filter((item)=>{
        if(event.target.id == item.name){
          return item;
        }
      })
      this.setState({
        details: true,
        detailCountry: newState
      })
    }else{
      this.setState({
        details: false
      })
      
    }
  }

  clicked(event) {
    this.setState(
      {
        filter: event.target.id
      },
      () => {
        this.filteredData();
      }
    );
  }

  change(event) {
    this.setState(
      {
        name: event.target.value
      },
      () => {
        this.filteredData();
      }
    );
  }

  filteredData() {
    let newData = this.state.countries;
    // console.log(newData);
    if (this.state.filter !== "All") {
      let ff = this.state.filter;
      newData = newData.filter(item => {
        if (ff == item.region) {
          return true;
        }
      });
    }

    if (this.state.name !== "") {
      newData = newData.filter(item => {
        let name = item.name.toLowerCase();
        let checker = name.match(this.state.name);
        if (checker !== null) {
          return true;
        }
      });
    }

    this.setState(
      {
        filteredData: newData
      },
      () => {
        // console.log(this.state.countries);

      }
    );
  }
  render() {
    if (this.state.details !== true) {
      return (
        <div className="content-container">
          <div className="filters">
            <input
              type="text"
              className="search"
              placeholder="Search for a country...."
              onChange={this.change}
            />
            <div className="dropdown">
              <div className="dropbtn">
                <div>Filter By Region</div>{" "}
                <i className="fas fa-chevron-down" />
              </div>
              <div className="dropdown-content">
                <div className="fit" id="All" onClick={this.clicked}>
                  All
                </div>
                <div className="fit" id="Africa" onClick={this.clicked}>
                  Africa
                </div>
                <div className="fit" id="Americas" onClick={this.clicked}>
                  America
                </div>
                <div className="fit" id="Asia" onClick={this.clicked}>
                  Asia
                </div>
                <div className="fit" id="Europe" onClick={this.clicked}>
                  Europe
                </div>
                <div className="fit" id="Oceania" onClick={this.clicked}>
                  Oceania
                </div>
              </div>
            </div>
          </div>
          <Card
            countries={this.state.filteredData}
            detailChecker={this.detailChecker}
          />
        </div>
      );
    }else{
      return(
        <div className="content-container">
          <Details detailChecker={this.detailChecker} detailCountry={this.state.detailCountry}/>        
        </div>
      )
    }
  }
}
