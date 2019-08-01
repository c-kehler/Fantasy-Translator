import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import YodaTranslate from "../yodaTranslator/index.js";
import ElfTranslate from "../elfTranslator/index.js";
import ValyrianTranslate from "../valyrianTranslator/index.js";
import KlingonTranslate from "../klingonTranslator/index.js";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/index";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      moved: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle = e => {
    this.setState({
      moved: !this.state.moved
    });
    this.toggle = this.toggle.bind(this);
  };
  render() {
    return (
      <div>
        <Navbar
          className="navbar fixed-top navbar-dark"
          bg="navbar transparent"
          expand="lg"
        >
          <Navbar.Brand href="/">Translator</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={this.toggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={window.location.pathname}>
              <Nav.Link href="/yoda">Yoda</Nav.Link>
              <Nav.Link href="/elf">Elf</Nav.Link>
              <Nav.Link href="/valyrian">Valyrian</Nav.Link>
              <Nav.Link href="/klingon">Klingon</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container-fluid1">
          <Switch>
            <Route
              exact path="/"
              render={props => (
                <Home {...props} dropdown={this.state.moved} />
              )}
            />
            <Route
             exact path="/yoda"
              render={props => (
                <YodaTranslate {...props} dropdown={this.state.moved} />
              )}
            />
            <Route
              exact path="/elf"
              render={props => (
                <ElfTranslate {...props} dropdown={this.state.moved} />
              )}
            />
            <Route
              exact path="/valyrian"
              render={props => (
                <ValyrianTranslate {...props} dropdown={this.state.moved} />
              )}
            />
             <Route
              exact path="/klingon"
              render={props => (
                <KlingonTranslate {...props} dropdown={this.state.moved} />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Header;
