import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-center">
      {" "}
      {/* Apply the 'footer' class */}
      <Container>
        <Row>
          <Col md={12}>
            <hr className="footer-line" />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <a href="/" className="logo">
              <img
                className="logoFooter"
                src="/images/LOGO ALB.png"
                alt="logoLunar"
              ></img>
            </a>
          </Col>
          <Col md={6}>
            <p>&copy; {new Date().getFullYear()} LUNAR</p>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 2, offset: 5 }}>
            <a href="home" className="btn btn-link">
              <i className="bi bi-arrow-left"></i>
            </a>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </footer>
  );
};

export default Footer;
