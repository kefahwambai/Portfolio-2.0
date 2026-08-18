import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <Container>
        <Row className="g-4 align-items-end">
          <Col md={6}>
            <div className="footer-brand">KEFAH WAMBAI</div>
            <p>Law · Technology · Emerging Issues</p>
          </Col>
          <Col md={6} className="footer-links text-md-end">
            <Link to="/about">About</Link><Link to="/project">Work</Link><Link to="/insights">Insights</Link><a href="mailto:kefahngwei@gmail.com">Email</a>
          </Col>
        </Row>
        <div className="footer-bottom">© {year} Kefah Wambai. All rights reserved.</div>
      </Container>
    </footer>
  );
}

export default Footer;
