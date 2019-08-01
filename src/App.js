import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header/index.js";
import ReactTooltip from 'react-tooltip'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div>
          
        <Header />
        <ReactTooltip />
        </div>
      </div>
    );
  }
}

export default App;
