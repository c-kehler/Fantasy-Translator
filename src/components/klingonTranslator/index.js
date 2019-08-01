import React, { Component, useState, useRef } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import axios from "axios";
import "./Translator.css";
import Clipboard from "clipboard";
import ReactTooltip from "react-tooltip";
import { findDOMNode } from "react-dom";
new Clipboard(".btn");

class KlingonTranslate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translatedText: "",
      texttoTranslate: "",
      value: "",
      copied: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ texttoTranslate: event.target.value });
    console.log(this.state.texttoTranslate)
  }

  handleSubmit(event) {
    event.preventDefault();
    const headers = {
      "X-FunTranslations-Api-Secret": process.env.REACT_APP_HEADER_VALUE_KLINGON
    };
    axios
      .get(
        `https://api.funtranslations.com/translate/klingon.json?text=${this.state.texttoTranslate
          .trim()
          .replace(/\s/g, "%20")}`,
        { headers }
      )
      .then(res => {
        const translatedText = res.data.contents.translated;
        console.log(res);
        this.setState({ translatedText });
      });
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div className="klingon-background">
          <div className="translate-container" style={{ marginTop: this.props.dropdown ? '160px' : '0px' }} >
            <form onSubmit={this.handleSubmit}>
              <textarea
                ref={input => {
                  this.inputBox = input;
                }}
                rows="4"
                cols="60"
                className="inputBox2"
                type="text"
                value={this.state.texttoTranslate}
                onChange={this.handleChange}
                placeholder="Enter text to translate to Klingon"
              />
              <button
                className="btn btn-dark"
                id="translatebutton"
                type="submit"
                value="Translate"
              >Translate <i class="fas fa-hand-spock fa-lg" aria-hidden="true" /></button>
              <div className="output-container">
                <div className="outputText2">{this.state.translatedText}</div>
                <div>
                  <button
                    id="copy-button"
                    className="ml-auto btn btn-dark"
                    data-clipboard-text={this.state.translatedText}
                    onClick={() => {
                      ReactTooltip.show(findDOMNode(this.refs.foo));
                    }}
                  >
                    <i class="fa fa-clipboard" aria-hidden="true" />
                  </button>
                  <p ref="foo" data-tip="Copied!" data-for="global" />
                  <ReactTooltip
                    place="right"
                    id="global"
                    delayHide={1000}
                    afterShow={() => {
                      setTimeout(ReactTooltip.hide, 500);
                    }}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.inputBox.focus();
  }
}

export default KlingonTranslate;
