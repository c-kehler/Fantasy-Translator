import React, { Component } from "react";
import { Container } from "reactstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className = "home-background">
      <div class="container">
        <div class="header"  style={{ marginTop: this.props.dropdown ? '250px' : '0px' }}>
          <div class="home-text">
            <h1 className = 'header1' >Fantasy Translator</h1>
            <p class="subtext">
              {" "}
              A fun translation site that interfaces with a translation API.
            </p>
          </div>{" "}
        </div>
      </div>
      </div>
    );
  }
}

export default Home;
