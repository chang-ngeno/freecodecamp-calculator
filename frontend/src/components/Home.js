import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Display from "./Display";
import  './Home.css';
import Keypad from "./Keypad/Keypad";

class Home extends Component {
  render() {
    return (
      <Container id="main">
        <Display />
        <Keypad />
      </Container>
    );
  }
}

export default Home;