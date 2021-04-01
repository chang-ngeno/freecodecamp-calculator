import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Keypad.css';

class Keypad extends Component{
    render(){
        return(
            <Container className="bg-success text-white text-center">
                <Row>
                    <Col className="key btn">C</Col>
                    <Col className="key btn">+/-</Col>
                    <Col className="key btn">%</Col>
                    <Col className="key btn">DEL</Col>
                </Row>
                <Row>
                    <Col className="key btn">7</Col>
                    <Col className="key btn">8</Col>
                    <Col className="key btn">9</Col>
                    <Col className="key btn">/</Col>
                </Row>
                <Row>
                    <Col className="key btn">4</Col>
                    <Col className="key btn">5</Col>
                    <Col className="key btn">6</Col>
                    <Col className="key btn">X</Col>
                </Row>
                <Row>
                    <Col className="key btn">1</Col>
                    <Col className="key btn">2</Col>
                    <Col className="key btn">3</Col>
                    <Col className="key btn">-</Col>
                </Row>
                <Row>
                    <Col className="key btn">0</Col>
                    <Col className="key btn">.</Col>
                    <Col className="key btn">=</Col>
                    <Col className="key btn">+</Col>
                </Row>
            </Container>
        );
    }
}
export default Keypad;