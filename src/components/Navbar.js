import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setExpanded(false);

  return (
    <Navbar expanded={expanded} fixed="top" expand="lg" className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={close} className="brand-mark">
          <span className="brand-monogram">KW</span>
          <span className="brand-name">KEFAH WAMBAI</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={Link} className={location.pathname === "/" ? "active" : ""} to="/" onClick={close}>Home</Nav.Link>
            <Nav.Link as={Link} className={location.pathname === "/about" ? "active" : ""} to="/about" onClick={close}>About</Nav.Link>
            <Nav.Link as={Link} className={location.pathname === "/project" ? "active" : ""} to="/project" onClick={close}>Work</Nav.Link>
            <Nav.Link as={Link} className={location.pathname === "/insights" ? "active" : ""} to="/insights" onClick={close}>Insights</Nav.Link>
            <Nav.Link as={Link} className="nav-cta" to="/resume" onClick={close}>CV</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
