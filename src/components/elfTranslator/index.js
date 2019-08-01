import React, { Component } from "react";
import axios from "axios";
import "./Translator.css";
import Clipboard from "clipboard";
import ReactTooltip from "react-tooltip";
import { findDOMNode } from "react-dom";
new Clipboard(".btn");

class ElfTranslate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translatedText: "",
      texttoTranslate: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ texttoTranslate: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.texttoTranslateURL);
    const headers = {
      "X-FunTranslations-Api-Secret": process.env.REACT_APP_HEADER_VALUE_ELF
    };
    axios
      .get(
        `https://api.funtranslations.com/translate/sindarin.json?text=${this.state.texttoTranslate
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
    return (
      <div className="elf-background">
        <div className="translate-container" style={{ marginTop: this.props.dropdown ? '160px' : '0px' }} >
          <form onSubmit={this.handleSubmit}>
            <textarea
              ref={input => {
                this.inputBox = input;
              }}
              rows="4"
              cols="60"
              className="inputBox"
              type="text"
              value={this.state.texttoTranslate}
              onChange={this.handleChange}
              placeholder="Enter text to translate to Sindarin"
            />
            <input
              className="btn btn-dark"
              id="translatebutton"
              type="submit"
              value="Translate"
            />
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
    );
  }
  componentDidMount() {
    this.inputBox.focus();
  }
}

export default ElfTranslate;
