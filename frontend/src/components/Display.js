import React, { Component } from 'react';
import { Row, Col, Container } from "react-bootstrap";

class Display extends Component{
    render(){
        return(
            <Container className="text-right bg-dark text-white" id="display">
                <Row>
                    <Col xs={12}>453 - 23 + 3,453 + 4,783 = </Col>
                </Row>
                <Row>
                    <Col xs={12}>8,666</Col>
                </Row>
            </Container>
        );
    }
}
export default Display;