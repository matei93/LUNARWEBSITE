import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-center">
      {/* Apply the 'footer' class */}
      <Container>
        <hr className="footer-line" />
        <Row className="align-items-center">
          <div className="col">
            <a href="/" className="logo">
              <img
                className="logoFooter"
                src="/images/LOGO ALB.png"
                alt="logoLunar"
              />
            </a>
          </div>
          <div className="col">
            <a href="/" className="btn btn-link">
              <i className="bi bi-arrow-left"></i>
            </a>
          </div>
          <div className="col">
            <p>&copy; {new Date().getFullYear()} LUNAR</p>
          </div>

          <div className="col">
            <a
              className="icon-link"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              className="icon-link"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
