import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Container >
        {/* <h1>Home</h1>
        <p>
          <Link to="/login/">Login</Link>
        </p>
        <p>
          <Link to="/signup">Sign up</Link>
        </p>
        <p>
          <Link to="/dashboard">Dashboard</Link>
        </p> */}
        <div id="calcPad">
            <div className="row">
              <div className="col"><Button>7</Button></div>
              <div className="col"><Button>8</Button></div>
              <div className="col"><Button>9</Button></div>
              <div className="col"><Button>*</Button></div>
            </div>
            <div className="row">
              <div className="col"><Button>4</Button></div>
              <div className="col"><Button>5</Button></div>
              <div className="col"><Button>6</Button></div>
              <div className="col"><Button>/</Button></div>
            </div>
            <div className="row">
              <div className="col"><Button>7</Button></div>
              <div className="col"><Button>7</Button></div>
              <div className="col"><Button>7</Button></div>
              <div className="col"><Button>7</Button></div>
            </div>
          {/* <Row className="justify-content-md-center">
            <Col id="display" xs={9}>Display</Col>
            <Col id="clear"><Button>Clear</Button></Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col id="seven">7</Col>
            <Col id="eight">8</Col>
            <Col id="nine">9</Col>
            <Col id="multiply">*</Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col id="four">4</Col>
            <Col id="five">5</Col>
            <Col id="six">6</Col>
            <Col id="divide">/</Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col id="one">1</Col>
            <Col id="two">2</Col>
            <Col id="three">3</Col>
            <Col id="zero">0</Col>
          </Row> */}
        </div>
      </Container>
    );
  }
}

export default Home;