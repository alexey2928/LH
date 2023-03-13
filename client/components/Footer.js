import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light fixed-bottom">
      <Container>
        <Row>
          <Col xs={12} sm={6}>
            <h5>Footer Heading</h5>
            <p>Some text goes here.</p>
          </Col>
          <Col xs={12} sm={6}>
            <h5>Another Heading</h5>
            <p>More text goes here.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;